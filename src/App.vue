<template>
  <v-app id="d">
    <v-toolbar app>
      <v-toolbar-title>Ranking Oficial</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs6 sm12 md6 offset-xs0>
            <v-card color="primary">
              <StudentsList/>
            </v-card>
          </v-flex>
          <v-flex xs6 sm12 md6 offset-xs0>
            <v-card color="secondary">
              <SchoolsList/>           
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
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