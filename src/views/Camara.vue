<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Cámara</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-button @click="takePicture">Tomar o Seleccionar Foto</ion-button>
            <div v-if="imageSrc">
                <img :src="imageSrc" alt="Foto seleccionada" />
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';

const imageSrc = ref<string | undefined>('');

const takePicture = async () => {
  try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt // Permite al usuario elegir entre la cámara y la galería
    });
    const imageUrl = image.webPath;
    imageSrc.value = imageUrl;
  } catch (error) {
    console.error('El usuario canceló la selección o hubo un error:', error);
  }
};

</script>