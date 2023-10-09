// stores/user.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import router from "../router";
import { useDatabaseStore } from './database';


export const useUserStore = defineStore('user', () => {
  let userData = ref(null);
  let loadingUser = ref(false)
  let loading = ref(false)

  const registerUser = async (email, password) => {
    loadingUser.value = true;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      userData.value = { email: user.email, uid: user.uid };
      router.push("/");
    } catch (err) {
      console.error(err)
      userData.value = null;
    } finally {
      loadingUser.value = false;
    }
  }

  const loginUser = async (email, password) => {
    loadingUser.value  = true;
    try {
      const { user } = await signInWithEmailAndPassword(
        auth, email, password
      );
      userData.value = { email: user.email, uid: user.uid };
      router.push("/about");
    } catch (error) {
        if (error.code === 'auth/user-not-found') {
          alert("No se encontró ningún usuario con esa dirección de correo electrónico.");
        } else if (error.code === 'auth/wrong-password'){
          alert("Clave equivocada");
        } else {
          console.log(error);
          userData.value = null;
        }
        // console.log(error);
        // userData.value = null;
    } finally {
        loadingUser.value  = false;
    }
  }

  const logoutUser = async (email, password) => {
    const databaseStore = useDatabaseStore();
    // databaseStore.$reset();

    // loading.value  = true;
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
    } finally {
        userData.value = null;
        loading.value = false;
        router.push("/login");
    }
  }

  const currentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubcribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            userData.value = {
              email: user.email,
              uid: user.uid,
            };
          } else {
            userData.value = null;
            const databaseStore = useDatabaseStore();
            // databaseStore.$reset();
          }
          resolve(user);
          unsubcribe();
        }, (e) => reject(e)
      );
      // Según la documentación, la función onAuthStateChanged() devuelve
      // La función de cancelación de suscripción para el observador
      // unsubcribe();
    });
  }

  return {
    loadingUser, loading, userData, registerUser, loginUser, logoutUser, currentUser,
  }
})
