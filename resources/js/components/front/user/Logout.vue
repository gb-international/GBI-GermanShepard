<template>



</template>

<script>
export default {
  name: "Logout",
  data(){
    return{
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }
  },
  created() {
    axios.post('api/user-logout').then(response => {
        if (response.status === 302 || 401) {
          localStorage.setItem("login", "0");
          this.$session.destroy();
         this.$router.push('/');
         //location.reload();
        }
        else {
          // throw error and go to catch block
        }
      }).catch(error => {
        console.log(error);
    });
  } 
}

</script>
