import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"danotes-cca4d","appId":"1:637227885121:web:20d337b6bf2befc41e9cc0","storageBucket":"danotes-cca4d.appspot.com","apiKey":"AIzaSyC8X77MrZjd9ezCBevJdO__EHnE-eKlhdk","authDomain":"danotes-cca4d.firebaseapp.com","messagingSenderId":"637227885121"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"danotes-cca4d","appId":"1:637227885121:web:20d337b6bf2befc41e9cc0","storageBucket":"danotes-cca4d.appspot.com","apiKey":"AIzaSyC8X77MrZjd9ezCBevJdO__EHnE-eKlhdk","authDomain":"danotes-cca4d.firebaseapp.com","messagingSenderId":"637227885121"})), provideFirestore(() => getFirestore())]
};
