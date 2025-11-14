import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

async function testarFirestore() {
  try {
    await addDoc(collection(db, "teste"), {
      mensagem: "Conexão bem-sucedida!",
      data: new Date(),
    });
    console.log("✅ Documento adicionado com sucesso!");

    const querySnapshot = await getDocs(collection(db, "teste"));
    querySnapshot.forEach((doc) => {
      console.log("📄 Documento:", doc.id, doc.data());
    });
  } catch (error) {
    console.error("❌ Erro ao testar Firestore:", error);
  }
}

testarFirestore();
