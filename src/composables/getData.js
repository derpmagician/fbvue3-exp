import { ref } from 'vue'
import axios from 'axios';

export const useGetData = () => {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(true);

  const getData = async (url) => {
    loading.value = true;
    try {
      const res = await axios.get(url);
      data.vaule = await res.data;
    } catch (err) {
      console.error(err);
      error.valuw = "Error de servidor";
    }
    finally {
      loading.value = false;

    }
  };
  return { getData, data };
}