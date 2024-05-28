// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH-9qk4-0bZiV6bCL0uiUCWNNJrWAvHEM",
  authDomain: "sentinel-dk-2sl.firebaseapp.com",
  projectId: "sentinel-dk-2sl",
  storageBucket: "sentinel-dk-2sl.appspot.com",
  messagingSenderId: "334334586230",
  appId: "1:334334586230:web:3a14c3646d47c53f985e57",
  measurementId: "G-QQCRN7Z0YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
// grand the notification permission 

export const generateToken = async () =>{
    const permission = await Notification.requestPermission()
    console.log(permission);
    if (permission === "granted"){
        console.log("sucessfully granted ...")
        try {
            const token = await getToken(messaging, {
                vapidKey: "BMMHyaxwQLOr_CysICUiSvutxvQ0AGp9LxRozvIB_ktGuGoreEucqmsgfFJGtD8bvdlrTICqLHuqw6UBPoTnDHM"
            });
            console.log(token);
        } catch (error) {
            console.error("Error in getting token:", error);
        }
    }
    
}
