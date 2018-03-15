<template>
  <div class="list-of-schools">  
    <!-- Apollo watched Graphql query -->
    <ApolloQuery
      :query="require('../graphql/schools.gql')"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Pera um pouquinho...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">Azedo :/</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <article v-for="school in data.schools" :key="school.name">
            <div  class="title">{{ school.name }}</div>
            <div  class="author">Cidade: {{ school.city }}</div>
          </article>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">Ué não tem nada :(</div>
         
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

article {
  background: white;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 2px;
}
</style>
