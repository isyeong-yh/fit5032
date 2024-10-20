<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p>
        <label for="role">Role:</label>
        <select v-model="role" id="role" required>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
    </p>
    <p><button @click="register">Save to Firebase</button></p>
</template>
  
<script setup>
import { ref } from "vue"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useRouter } from "vue-router"
  
const email = ref("")
const password = ref("")
const role = ref('user')
const router = useRouter()
const auth = getAuth()
const db = getFirestore();
  
const register = async () => {
  try {
    // Register the user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    // Save the user's role in Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      role: role.value
    });

    console.log("Firebase Register Successful!");
    router.push("/FireLogin");
  } catch (error) {
    console.log("Error during registration:", error.code);
  }
};
</script>
  