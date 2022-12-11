<template>
    <div class ="container" id="container">
      <div class="card">
          <div class="card-header">
             <b>Nueva categoría</b> 
          </div>
          <div class="card-body">
              <form>
                  <div class="form-group">
                    <label for="tittle">Nombre:</label>
                    <input type="text" name="name" id="name" v-model="category.name" class="form-control">
                  </div>
                  <br/>
                  <div class="form-group">
                    <label for="description">Descripción:</label>
                    <textarea name="description" id="description" v-model="category.description" class="form-control" rows="3"></textarea>
                  </div>
                  <br/>
                  <div>
                      <button @click="newCategory" name="save" id="btnSave" class="btn btn-success" role="button">Crear categoría</button>
                      <router-link :to="'/categories'" id="btnCancel" class="btn btn-secondary" role="button">Cancelar</router-link>
                  </div>
              </form>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      
      data() {
          return {

            category: {
                name:"",
                description: "",
            }
          }
      },
      methods:{
        async newCategory(e) {
            e.preventDefault();

            const options = {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body:  JSON.stringify(this.category)
            }

            const response = await fetch("http://localhost:8000/api/category/store", options);
            
            const data = await response.json();
            console.log(data);
       

            this.$router.replace({path: '/categories'});  
        }
    }
  }
  </script>
  
  <style scoped>
  #btnSave {
      margin-left: 5px;
      margin-right: 25px; 
  }
  #btnCancel {
      margin-right: 0px; 
  }
  #container {
    margin: 2em auto;
  }
  </style>