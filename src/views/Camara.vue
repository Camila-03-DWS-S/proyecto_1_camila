<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Camera</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-button @click="takePicture">Take Picture</ion-button>
            <div v-if="imageSrc">
                <img :src="imageSrc" alt="Taken picture" />
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
} from '@ionic/vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

const imageSrc = ref<string>('');

async function takePicture() {
    try {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.DataUrl,
            source: CameraSource.Camera,
            quality: 90,
        });

        imageSrc.value = photo.dataUrl ?? '';
    } catch (error) {
        // User cancellation or permissions errors should not crash the view
        console.error('Camera error:', error);
    }
}
</script>
