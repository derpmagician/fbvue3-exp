// views/Chat.vue
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useUserStore } from '@/stores/user';
// import { useChatMsgsStore } from '@/stores/chatMsgs';
import { collection, query, orderBy, limit, onSnapshot, addDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import dayjs from 'dayjs';

const props = defineProps({
  isDark: {
    type: Boolean,
  },
})

let documents = ref([]);
let loadingDoc = ref(false);
let unsubscribe = null;
const reversedDocuments = computed(() => {
  return [...documents.value].reverse();
});

const userStore = useUserStore();
// const chatMsgsStore = useChatMsgsStore();
const mensaje = ref('');


const formatTimestamp = (timestamp) => {
  if (!timestamp) return '';
  // Convierte el Timestamp de Firebase a un objeto Date de JavaScript
  const timeStampDate = timestamp.toDate();
  // Formatea la fecha con Day.js
  return dayjs(timeStampDate).format('DD/MM/YYYY HH:mm:ss');
};

const getAllMsgs = () => {
  loadingDoc.value = true;
  try {
    const q = query(collection(db, "chats"), orderBy('createdAt', "desc"), limit(12));
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

onMounted(() => {
  // chatMsgsStore.$reset();
  // chatMsgsStore.getAllMsgs();
  getAllMsgs();

});

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
  }
});



const handleSubmit = () => {
  sendMsgs(mensaje.value, userStore.userData.nombre)
  mensaje.value="";
}

</script>

<template>
  <h2>Chat Global</h2>
  <div>
    <div class="chat__window">
      <div v-if="loadingDoc">Loading docs...</div>
      <div v-else>
        <ul >
          <li  v-for="item, of reversedDocuments"
            :key="`${item?.createdAt.seconds}${item?.createdAt.nanoseconds}`" >
            <div class="mt-2 me-2 py-1 chat__user"
              :class="item.sender === userStore.userData.nombre ? 'text-end' : 'text-start'" >
              <span class="bg-success text-white rounded-2 px-2 py-1">{{item?.sender}}</span> {{ formatTimestamp(item?.createdAt) }}
              <div class="" >{{item?.msg}}</div>
            </div>
            
          </li>
        </ul>
      </div>
    </div>
    <form @submit.prevent="handleSubmit" class="input-group input-group-sm mb-3 row">
      <div class="mt-3 col-sm-12">
        <input type="text" class="form-control"
          placeholder="Ingrese Mensaje" v-model="mensaje" />
      </div>
      <div class="me-2 mt-3 col-sm-12">
        <button type="submit" class="btn col me-2"
          :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Enviar</button>
      </div>
    </form>
  </div>
</template>

<style>
/* .chat__window {
  height: 500px;
  outline: 1px saddlebrown solid;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}

.chat__window::-webkit-scrollbar {
  width: 10px;
}

.chat__window::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.chat__window::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.chat__window::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.chat__user {
  font-size: 0.8rem;
} */
</style>