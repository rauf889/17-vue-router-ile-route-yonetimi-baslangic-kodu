<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>Kullanicinin ID Bilgisi: {{ $route.params.id }}</p>
    <router-link
      tag="button"
      class="btn btn-primary"
      :to="navigationLink">Kullaniciyi Duzenle</router-link>
  </div>
</template>


<script>
  export default {
    data(){
      return{
        navigationLink : {
          name : 'userEdit',
          params : { id : this.$route.params.id }, 
          query : { name : 'gokhan', lastName : 'kandemir'},
          hash : '#data',
        }
      }
    },
    beforeRouteEnter(to, from, next){
      console.log("Component seviyesinde kontrol");
      next();
    }
  }
</script>
