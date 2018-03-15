<template>
  <div class="list-of-students">  
    <!-- Apollo watched Graphql query -->
    <ApolloQuery
      :query="require('../graphql/students.gql')"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Pera um pouquinho...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">Azedo :/</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
            <table>
            <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Maior Nota</th>
            </tr>
            <tr  v-for="student in data.students" :key="student.name">
                <td>{{ student.name }}</td>
                <td>{{ student.age }}</td>
                <td>{{ student.maximum_grade }}</td>
            </tr>
            </table>
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

table {
  border: 2px solid rgba(56, 68, 243, 0.836);  
  background-color: #fff;
}

th {
  background-color: #6aabd6;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}
</style>
