import { ref, computed } from 'vue';
// Devuelve true si la url es valida y falso si no
export const useIsValidUrl = (url) => {

  const isValidUrl = computed(() => {
    const urlPattern = /^(http|https):\/\/[^ "]+$/;
    return urlPattern.test(url.value);
  });

  return { isValidUrl }

}

