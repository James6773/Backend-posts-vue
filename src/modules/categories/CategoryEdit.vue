<template>
    <div class ="container" id="container">
      <div class="card">
          <div class="card-header">
             <b>Editar categoría</b> 
          </div>
          <div class="card-body">
              <form>
                  <div class="form-group">
                    <label for="tittle">Nombre:</label>
                    <input type="text" required name="name" id="name" v-model="category.tittle" class="form-control">
                  </div>
                  <br/>
                  <div class="form-group">
                    <label for="description">Descripción:</label>
                    <textarea name="description" id="description" v-model="category.description" class="form-control" rows="3"></textarea>
                  </div>
                  <br/>
                  <div>
                      <button @click="updateCategory" name="save" id="btnSave" class="btn btn-success" role="button">Guardar cambios</button>
                      <button name="cancel" id="btnCancel" class="btn btn-secondary" role="button">Cancelar</button>
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
                  name: "",
                  description: ""
              }
          }
      },
      methods: {
         async updateCategory(e) {
              e.preventDefault();
  
              const options = {
                  method: "POST",
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify(this.post)
              }
  
              const response = await fetch("http://localhost:8000/api/category/update", options);
              const data = await response.json();
  
              console.log(data);
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
      margin-top: 35px;
      margin-bottom: 20px;
  }
  </style>