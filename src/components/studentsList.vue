<template>
  <ApolloQuery :query="require('../graphql/students.gql')">
    <template slot-scope="{ result: { loading, error, data } }">

      <!-- Loading -->
      <div v-if="loading" class="loading apollo">
        <v-progress-linear :indeterminate="true"></v-progress-linear>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">
        <v-alert type="error" :value="true">
         <h2> Ops...</h2>
        </v-alert>
      </div>

      <!-- Sucess -->
      <div v-else-if="data" class="result apollo">
        <h1>Alunos</h1>
        <v-list three-line class="mx-auto">
          <template v-for="(student, index) in data.students">
            <v-subheader :key="student.name" color="blue">
              <b>Nome: </b> {{ student.name }}</v-subheader>
            <v-list-tile color="black">
              <v-list-tile-content>
                <v-list-tile-title>Maior nota: {{student.maximum_grade}}</v-list-tile-title>
                <v-list-tile-sub-title>Idade:{{student.age}} anos</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider :key="index"></v-divider>
          </template>
        </v-list>
      </div>
    </template>
  </ApolloQuery>
</template>

<style scoped>
  h1, h2, h3 {
    color: white;
  }
</style>