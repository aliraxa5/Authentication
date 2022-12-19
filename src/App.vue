<template>
  <div v-if="$store.state.user">
  <div id="nav" >
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <div class="logout">
      <a id="logoutbtn" @click="$store.dispatch('logout')">Logout</a>
    </div>
  </div>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
}

#nav {
  padding: 10px;
  padding-top: 20px;
  
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.logout{
  display: block;
  justify-content: center;
  margin-bottom: 12px;

}
#logoutbtn{
  padding: 3px 12px;
  padding-bottom: 7px;
  background-color: palevioletred;
  border-radius: 3px;
  cursor: pointer;
  color: #ffffff;
  
}
#logoutbtn:hover{
  background-color: white;
  border: palevioletred solid 1.5px;
  color: #2c3e50;
}
</style>