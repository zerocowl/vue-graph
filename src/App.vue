<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Super Lista</h1>
    <SchoolsList/>
    <br>
    <StudentsList/>
  </div>
</template>

<script>
import StudentsList from './components/studentsList.vue'
import SchoolsList from './components/schoolsList.vue'

export default {
  name: 'app',
  components: {
    SchoolsList,
    StudentsList
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #313131;
  margin-top: 60px;
}
</style>
