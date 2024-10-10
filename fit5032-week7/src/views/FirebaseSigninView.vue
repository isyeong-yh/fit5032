<template>
  <div>
    <h1>Sign in</h1>
    <p>
      <input type="text" placeholder="Email" v-model="email" />
    </p>
    <p>
      <input type="password" placeholder="Password" v-model="password" />
    </p>
    <p>
      <label for="role">Role:</label>
      <select v-model="role" id="role" required>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
    </p>
    <p>
      <button @click="signin">Sign in via Firebase</button>
    </p>
  </div>
</template>
  
<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
  
const email = ref("");
const password = ref("");
const role = ref("user");
const router = useRouter();
const auth = getAuth();
const db = getFirestore();
  
 const signin = async () => {
  try {
    // Sign in the user with email and password
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
  
    // Fetch the user's role from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
  
    if (userDoc.exists()) {
      const userData = userDoc.data();
      if (userData.role === role.value) {
        console.log("Sign in successful!");
        console.log(auth.currentUser); // To check the current user signed in
        router.push("/"); // Redirect to the home page or the appropriate dashboard
      } else {
        console.error("Role mismatch!");
        alert("Selected role does not match your assigned role.");
        await auth.signOut(); // Sign out the user if the role doesn't match
      }
    } else {
      console.error("No user data found!");
      alert("User data not found in Firestore.");
    }
  } catch (error) {
    console.error("Error during sign-in:", error.code);
  }
};
</script>
  