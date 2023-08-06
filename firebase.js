    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
    import { getFirestore,collection, getDocs} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyA7aQlFiTolX3OmuB_fl-Hupj3tL3irDZ4",
      authDomain: "proyectotg-8ef06.firebaseapp.com",
      projectId: "proyectotg-8ef06",
      storageBucket: "proyectotg-8ef06.appspot.com",
      messagingSenderId: "142444510229",
      appId: "1:142444510229:web:237b0ce4e2bb656772e21c"
    };
      
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore()

    export const getEnfermedades = () => getDocs(collection(db,'Enfermedades')) // esta funcion nos ayuda a traer los datos subidos a firebase
