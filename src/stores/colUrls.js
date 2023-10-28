// stores/colUrls.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {
  collection, query, where, getDoc, getDocs,
  addDoc, doc, deleteDoc, updateDoc,arrayUnion } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { auth } from "@/firebaseConfig";

export const useUrlStore = defineStore('colUrls', () => {
  let documents = ref([]);
  let loadingDoc = ref(false);

  const getColUrls = async () => {
    loadingDoc.value = true;
    try {
      const q = query(collection(db, "colUrls"), where("users", "array-contains", auth.currentUser.uid));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        documents.value.push({
          id: doc.id,
          ...doc.data()
        });
      });
    } catch (e) {
      console.log(e);
    } finally {
      loadingDoc.value = false;
    }
  }

  const leerColUrl = async (id) => {
    loadingDoc.value = true;
    try {

      const docRef = doc(db, "colUrls", id);
      const docSnap = await getDoc(docRef);

      if(!docSnap.exists()) {
        throw new Error("doc no existe");
      }

      // if(docSnap.data().user !== auth.currentUser.uid) {
      //   throw new Error("No es dueño del documento");
      // }

      return docSnap.data().longUrl

    } catch (e) {
      console.log(e.message);
    } finally {
      loadingDoc.value = false;
    }
  }

  const addColUrl = async (longUrl) => {
    try {
      const dbToSearch = collection(db, "colUrls");
      let short

      // Verificar si longUrl ya existe en la base de datos
      const longUrlQuery = query(collection(db, "colUrls"), where("longUrl", "==", longUrl));
      const longUrlQuerySnapshot = await getDocs(longUrlQuery);
      if (!longUrlQuerySnapshot.empty) {
        // Si longUrl ya existe, agregar auth.currentUser.uid a users
        const docRef = doc(db, "colUrls", longUrlQuerySnapshot.docs[0].id);
        await updateDoc(docRef, {
          users: arrayUnion(auth.currentUser.uid)
        });
        // Actualizar la lista de URLs en la tienda Pinia
        const updatedDoc = {
          id: longUrlQuerySnapshot.docs[0].id,
          ...longUrlQuerySnapshot.docs[0].data(),
          users: [...longUrlQuerySnapshot.docs[0].data().users, auth.currentUser.uid]
        };
        const index = documents.value.findIndex(doc => doc.id === updatedDoc.id);
        if (index !== -1) {
          documents.value[index] = updatedDoc;
        } else {
          documents.value.push(updatedDoc);
        }
      } else {
        // Si longUrl no existe, crear un nuevo documento
        const objetoDoc = {
          longUrl: longUrl,
          users: [auth.currentUser.uid]
        };
    
        // Crear el documento y obtener su ID
        const docRef = await addDoc(dbToSearch, objetoDoc);
        const id = docRef.id;
    
        // Actualizar el documento con el shortUrl
        await updateDoc(docRef, {
          shortUrl: id
        });
    
        documents.value.push({
          id: id,
          ...objetoDoc,
          shortUrl: id
        });
    }
    

    } catch (e) {
      console.log(e);
    }
  }

  // const deleteColUrl = async (id) => {
  //   try {
  //     const docRef = doc(db, "urls", id);
  //     const docSnap = await getDoc(docRef);
  //     if(!docSnap.exists()) {
  //       throw new Error("doc no existe");
  //     }

  //     if(docSnap.data().user !== auth.currentUser.uid) {
  //       throw new Error("No es dueño del documento");
  //     }

  //     await deleteDoc(doc(db, "urls", id));
  //     documents.value = documents.value.filter(doc => doc.id !== id)

  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }

  const deleteColUrl = async (id) => {
    try {
      const docRef = doc(db, "colUrls", id);
      const docSnap = await getDoc(docRef);
  
      if (!docSnap.exists()) {
        throw new Error("Document does not exist");
      }
  
      const users = docSnap.data().users;
      const userIndex = users.indexOf(auth.currentUser.uid);
  
      if (userIndex === -1) {
        throw new Error("User is not in the document");
      }
  
      // Remove the user from the users array
      users.splice(userIndex, 1);
  
      if (users.length === 0) {
        // If the users array is empty, delete the document
        await deleteDoc(docRef);
      } else {
        // If the users array is not empty, update the document with the new users array
        await updateDoc(docRef, { users });
      }
  
      // Update the documents in the store
      const index = documents.value.findIndex(doc => doc.id === id);
      if (index !== -1) {
        if (users.length === 0) {
          documents.value.splice(index, 1);
        } else {
          documents.value[index] = {
            id,
            ...docSnap.data(),
            users
          };
        }
      }
  
    } catch (e) {
      console.log(e.message);
    }
  }
  

  return {
    documents,
    loadingDoc,
    getColUrls,
    leerColUrl,
    // updateUrl,
    addColUrl,
    deleteColUrl,
  }
})