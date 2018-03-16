<template>
  <div class="list-of-schools">  
    <!-- Apollo watched Graphql query -->
    <ApolloQuery
      :query="require('../graphql/schools.gql')"
    >
      <template slot-scope="{ result: { loading, error, data } }">
   
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">
        <v-progress-linear :indeterminate="true"></v-progress-linear>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">
        <v-alert type="error" :value="true">
        <h3>Ops...</h3>
        </v-alert>
      </div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <h1>Escolas</h1>
          <article v-for="school in data.schools" :key="school.name">
            <div  class="title">{{ school.name }}</div>
            <div  class="author">Cidade: {{ school.city }}</div>
          </article>
        </div>
      </template>
     
    </ApolloQuery>
    
  </div>
  
</template>

<style scoped>
.form,
.input,
.apollo,
.message {
  padding: 12px;
}

.input {
  font-family: inherit;
  font-size: inherit;
  border: solid 2px #ccc;
  border-radius: 3px;
}

.error {
  color: red;
}
h1,h2, h3{
  color: white;
}
article {
  background: white;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 2px;
}
</style>
