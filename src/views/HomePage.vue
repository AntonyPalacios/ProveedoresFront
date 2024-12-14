<template>
  <div>
    <div class="container">
      <img src="../../public/logoBancom.png" width="300" height="150">
      <p>¡Bienvenido de nuevo!</p>
      <div class="login">
        <div class="inputLogin">
          <p>Usuario</p>
          <input type="text" v-model="username">
        </div>
        <div class="inputLogin">
          <p>Contraseña</p>
          <input type="password" v-model="password">
        </div>
        <base-button @click="login">Ingresar</base-button>
      </div>
    </div>
    <the-footer/>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref} from 'vue';

const router = useRouter();
const store = useStore();

const username = ref("");
const password = ref("");

async function login(){
  await store.dispatch('login',{username: username.value,password: password.value})
      .then(async ()=>{
        if(store.getters["getUserType"] === 'provider'){
          //await store.dispatch('provider/setProviderFormInfo');
          await router.push({name:'providerFormSelf'})
        }else{
          await store.dispatch('project/setProjects');
          await router.push({name:'project'})
        }
      })


}

</script>

<style scoped>

.container {
  background-color: black;
  margin: 0 auto;
  width: 50%;
}

.container p {
  color: white;
  width: auto;
  font-size: x-large;
}
.login{
  border: 1px solid black;
}

.login button{
margin: 0 auto 50px;
}

.inputLogin{
  margin: 0 50px 30px;
}
.inputLogin p{
  text-align: start;
  font-size: medium;
  margin-bottom: 10px;
}
.inputLogin input{
  width: 100%;
  height: 25px;
}
</style>