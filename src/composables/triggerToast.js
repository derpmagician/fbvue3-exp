import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useTriggerToast = (type) => {
  let msg;
  switch(type) {
    case "error":
      msg = "Ingrese un enlace valido"
      break;
    case "success":
      msg = "Enlace añadido"
      break;
  }
  const triggerToast = () => {
    toast(msg, {
      type: type, // 'success' 'info', 'warning', 'error'
      position: 'top-right', // 'top-right' 'top-left', 'bottom-right', 'bottom-left'
      autoClose: 1000,
    });
  };
  return { triggerToast }
}