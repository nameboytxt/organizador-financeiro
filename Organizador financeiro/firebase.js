// Importa os módulos necessários
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCt0CPxRxo-vwe2opIvreEc-qiLwPAQJsI",
    authDomain: "organizador-financeiro-995f7.firebaseapp.com",
    projectId: "organizador-financeiro-995f7",
    storageBucket: "organizador-financeiro-995f7.firebasestorage.app",
    messagingSenderId: "145966705847",
    appId: "1:145966705847:web:fe9eff326930fe31807132",
    measurementId: "G-M4B1LPKVT2"
};

// Inicializa o app e os serviços
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

// Exporta para uso em outros arquivos
export { db, auth, signInWithEmailAndPassword };
