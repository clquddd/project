<template>
    <div class="container">
      <NavComp />
      <router-view></router-view>
    </div>

</template>

<script>
  import NavComp from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    NavComp
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke
}

.container {
  background-color: #fea918;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
}
</style>
