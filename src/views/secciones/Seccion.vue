<template> 
    <ion-page>
        <ion-content class="ion-padding">
            <Contenido></Contenido>    
            <ion-item v-if="contenido.to === 'seccion-text-area'">
                <ion-textarea 
                label="" 
                placeholder="Escribe aquí..."
                v-model="contentStore.contenido_usuario"
                ></ion-textarea>
            </ion-item>
        </ion-content>    
        <ion-footer>
            <ion-toolbar>
                <ion-button slot="start" color="primary">Anterior</ion-button>
                <ion-button slot="end" color="primary">Siguiente</ion-button>
            </ion-toolbar>
        </ion-footer>    
    </ion-page>  
</template>
<script setup lang="ts">
defineOptions({ name: 'SeccionView' });
import { IonPage, IonContent, 
    IonItem, IonTextarea, IonFooter, 
    IonToolbar, IonButton } from '@ionic/vue';
import { useRoute } from 'vue-router';
import { useContentStore } from '@/stores/content';
import Contenido from '@/components/Contenido.vue';
import { computed } from 'vue';
const route = useRoute();
const contentStore = useContentStore();
const contenido = computed(() => contentStore.contenido);

contentStore.$getContenido(route.params.name as string);

</script>

