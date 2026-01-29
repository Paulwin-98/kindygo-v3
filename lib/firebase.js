import { initializeApp, getApps, getApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCtO_Rm9xfrvS6mBCEKAOSMAwSAA-pXajs",
  authDomain: "kindygo-v3.firebaseapp.com",
  projectId: "kindygo-v3",
  storageBucket: "kindygo-v3.firebasestorage.app",
  messagingSenderId: "398457108096",
  appId: "1:398457108096:web:5456d4971314788416d865",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
