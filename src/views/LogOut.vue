<template>
    <div>
      <h1>Log Out</h1>
      <button @click="logOut">Log Out</button>
    </div>
</template>
  
<script>
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
  
export default {
  setup() {
    const router = useRouter();
    const auth = getAuth();
  
    onMounted(() => {
      const user = auth.currentUser;
      if (user) {
        console.log('Current User:', user);
      } else {
        console.log('No user is signed in.');
      }
    });
  
    const logOut = () => {
      signOut(auth)
        .then(() => {
          console.log('User signed out');
          router.push('/');
          console.log("Current User: " + auth.currentUser) // To check the current User signed in
        })
        .catch(error => {
          console.error('Error signing out:', error);
        });
    };
  
    return {
      logOut
    };
  }
};
</script>
  