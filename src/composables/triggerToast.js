import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useTriggerToast = (toastType) => {
  let msg;
  let type;
  switch(toastType) {
    case "credentials":
      msg = "Ingrese todos los campos"
      type = "error"
      break;
    case "error":
      msg = "Ingrese un enlace valido",
      type = "error"
      break;
    case "success":
      msg = "Enlace añadido"
      type = "success"
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