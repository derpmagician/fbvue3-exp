// stores/blogPosts.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { collection, query, where, getDoc, getDocs, Timestamp,
  addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { auth } from "@/firebaseConfig";
import dayjs from 'dayjs';


export const useBlogPostStore = defineStore('blogposts', () => {

  let documents = ref([]);
  let loadingDoc = ref(false);

  const getAllBlogPosts = async () => {
    loadingDoc.value = true;
    try {
      const q = query(collection(db, "blog"));

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

  const getMyBlogPosts = async () => {
    loadingDoc.value = true;
    try {
      const q = query(collection(db, "blog"), where("user", "==", auth.currentUser.uid));

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

  const leerBlogPost = async (id) => {
    loadingDoc.value = true;
    try {

      const docRef = doc(db, "blog", id);
      const docSnap = await getDoc(docRef);

      if(!docSnap.exists()) {
        throw new Error("doc no existe");
      }

      if(docSnap.data().user !== auth.currentUser.uid) {
        throw new Error("No es dueño del documento");
      }

      // return docSnap.data().name
      return {
        titulo: docSnap.data().titulo,
        detalle: docSnap.data().detalle,
        image: docSnap.data().image,
        date: docSnap.data().date }

    } catch (e) {
      console.log(e.message);
    } finally {
      loadingDoc.value = false;
    }
  }

   const updateBlogPost = async (id, titulo, detalle, image) => {
    loadingDoc.value = true;
    
    try {
      const docRef = doc(db, "blog", id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw new Error("no existe el doc");
      }

      if (docSnap.data().user === auth.currentUser.uid) {
        await updateDoc(docRef, {
          titulo: titulo,
          detalle: detalle,
          image: image,
        });
        documents.value = documents.value.map((item) =>
            item.id === id ? { ...item, titulo: titulo, detalle: detalle, image: image,} : item
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

  const addBlogPost = async (titulo, detalle, image='') => {
    try {
      // Obtiene la fecha actual como un objeto Date de JavaScript
      const now = dayjs().toDate();
      // Convierte el objeto Date a un Timestamp de Firebase
      const date = Timestamp.fromDate(now);
      const objetoDoc = {
        titulo: titulo,
        detalle: detalle,
        image: image,
        user: auth.currentUser.uid,
        date: date
      }
      const docRef = await addDoc(collection(db, "blog"), objetoDoc);
      documents.value.push({
        ...objetoDoc,
        id: docRef.id,
      })
      // console.log("Document written with ID: ", docRef.id);

    } catch (e) {
      console.log(e);
    }
  }

  const deleteBlogPost = async (id) => {
    try {
      const docRef = doc(db, "blog", id);
      const docSnap = await getDoc(docRef);
      if(!docSnap.exists()) {
        throw new Error("doc no existe");
      }

      if(docSnap.data().user !== auth.currentUser.uid) {
        throw new Error("No es dueño del documento");
      }

      await deleteDoc(doc(db, "blog", id));
      documents.value = documents.value.filter(doc => doc.id !== id)

    } catch (e) {
      console.log(e.message);
    }
  }

  return {
    documents,
    loadingDoc,
    getAllBlogPosts,
    getMyBlogPosts,
    leerBlogPost,
    updateBlogPost,
    addBlogPost,
    deleteBlogPost,
  }
})
