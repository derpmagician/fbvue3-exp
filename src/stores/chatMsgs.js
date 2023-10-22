// stores/chatMsgs.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { collection, query, where, getDoc, getDocs, Timestamp, onSnapshot,
  addDoc, doc, deleteDoc, updateDoc, orderBy, limit  } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { auth } from "@/firebaseConfig";
import dayjs from 'dayjs';


export const useChatMsgsStore = defineStore('chatmsgs', () => {

  let documents = ref([]);
  let loadingDoc = ref(false);
  let unsubscribe = null;
  const reversedDocuments = computed(() => {
    return [...documents.value].reverse();
  });
  

  const getAllMsgs = () => {
    loadingDoc.value = true;
    try {
      const q = query(collection(db, "chats"), orderBy('createdAt', "desc"), limit(7));
      unsubscribe = onSnapshot(q, (querySnapshot) => {
        documents.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        loadingDoc.value = false;
      });
      return unsubscribe;
    } catch (e) {
      console.log(e);
      loadingDoc.value = false;
    }
  }

  const sendMsgs = async (msg, nombre) => {
    try {
      const now = dayjs().toDate();
      const date = Timestamp.fromDate(now);
      const objetoDoc = {
        msg: msg,
        sender: nombre,
        createdAt: date,
      }
      await addDoc(collection(db, "chats"), objetoDoc);
    } catch (e) {
      console.error("Error enviando mensaje: ", e);
    }
  };

  return {
    documents,
    reversedDocuments,
    loadingDoc,
    getAllMsgs,
    // getMyMsgs,
    // leerMsgs,
    // updateBlogPost,
    sendMsgs,
    // deleteBlogPost,
  }
})
