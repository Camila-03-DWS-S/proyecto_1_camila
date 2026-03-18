import { defineStore } from 'pinia'
import { ref } from 'vue'
import axiosRiksiri from '../axios/axiosRiksiri';

export const useContentStore = defineStore('content', () => {

  const contenido = ref({
    to: null,
  });
  const encuestas = ref([]);
  const contenido_usuario = ref(null);  
  const loading = ref(false);

  function $getContenido( name: string ) {  
    loading.value = true;
    return axiosRiksiri.get('contenido/' + name)
      .then(response => {
        contenido.value = response.data.contenido;
        encuestas.value = response.data.encuestas;
        contenido_usuario.value = response.data.contenido_usuario;
      })
      .finally(() => {
        loading.value = false;
      });
  }
  return { $getContenido, contenido, encuestas, contenido_usuario, loading }
})
