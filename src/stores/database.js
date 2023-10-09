// stores/database.js
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { collection, query, where, getDoc, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { auth } from "@/firebaseConfig";
import { nanoid } from 'nanoid'

export const useDatabaseStore = defineStore('database', () => {

  let documents = ref([]);
  let loadingDoc = ref(false);

  const getUrls = async () => {
    loadingDoc.value = true;
    try {
      const q = query(collection(db, "urls"), where("user", "==", auth.currentUser.uid));

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

  const leerUrl = async (id) => {
    loadingDoc.value = true;
    try {

      const docRef = doc(db, "urls", id);
      const docSnap = await getDoc(docRef);

      if(!docSnap.exists()) {
        throw new Error("doc no existe");
      }

      if(docSnap.data().user !== auth.currentUser.uid) {
        throw new Error("No es dueño del documento");
      }

      return docSnap.data().name

    } catch (e) {
      console.log(e.message);
    } finally {
      loadingDoc.value = false;
    }
  }

  // const updateUrl = async (id, name) => {
  //   loadingDoc.value = true;
  //   try {

  //     const docRef = doc(db, "urls", id);
  //     const docSnap = await getDoc(docRef);

  //     if(!docSnap.exists()) {
  //       throw new Error("doc no existe");
  //     }

  //     if(docSnap.data().user !== auth.currentUser.uid) {
  //       throw new Error("No es dueño del documento");
  //     }

  //     await updateDoc(docRef, {
  //       name: name,
  //     });

  //     documents.value = documents.value.map((item) =>
  //         item.id === id ? { ...item, name: name } : item
  //     );
  //     router.push("/about")

  //     // return docSnap.data().name

  //   } catch (e) {
  //     console.log(e.message);
  //   } finally {
  //     loadingDoc.value = false;
  //   }
  // }

   const updateUrl = async (id, name) => {
    loadingDoc.value = true;
    
    try {
      const docRef = doc(db, "urls", id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw new Error("no existe el doc");
      }

      if (docSnap.data().user === auth.currentUser.uid) {
        await updateDoc(docRef, {
            name: name,
        });
        documents.value = documents.value.map((item) =>
            item.id === id ? { ...item, name: name } : item
        );

      } else {
          throw new Error("no eres el autor");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      loadingDoc.value = false;
    }
  }

  const addUrl = async (name) => {
    try {
      // Add a new document with a generated id.
      const objetoDoc = {
        name: name,
        short: nanoid(6),
        user: auth.currentUser.uid
      }
      const docRef = await addDoc(collection(db, "urls"), objetoDoc);
      documents.value.push({
        ...objetoDoc,
        id: docRef.id,
      })
      // console.log("Document written with ID: ", docRef.id);

    } catch (e) {
      console.log(e);
    }
  }

  const deleteUrl = async (id) => {
    try {
      const docRef = doc(db, "urls", id);
      const docSnap = await getDoc(docRef);
      if(!docSnap.exists()) {
        throw new Error("doc no existe");
      }

      if(docSnap.data().user !== auth.currentUser.uid) {
        throw new Error("No es dueño del documento");
      }

      await deleteDoc(doc(db, "urls", id));
      documents.value = documents.value.filter(doc => doc.id !== id)

    } catch (e) {
      console.log(e.message);
    }
  }

  return {
    documents,
    loadingDoc,
    getUrls,
    leerUrl,
    updateUrl,
    addUrl,
    deleteUrl,
  }
})
