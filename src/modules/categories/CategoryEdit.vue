<template>
    <div class ="container" id="container">
      <div class="card" id="card">
          <div class="card-header">
             <b>Editar categoría</b> 
          </div>
          <div class="card-body">
              <form>
                  <div class="form-group">
                    <label for="tittle">Nombre:</label>
                    <input type="text" required name="name" id="name" v-model="category.name" class="form-control">
                  </div>
                  <br/>
                  <div class="form-group">
                    <label for="description">Descripción:</label>
                    <textarea name="description" id="description" v-model="category.description" class="form-control" rows="3"></textarea>
                  </div>
                  <br/>
                  <div>
                      <button @click="updateCategory" name="save" id="btnSave" class="btn btn-success" role="button">Guardar cambios</button>
                      <router-link :to="'/'" id="btnCancel" class="btn btn-secondary" role="button">Cancelar</router-link>
                  </div>
              </form>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default { 
    props:['id'],
        async created(){
            const options = {
                method: "GET"
            }
            const response = await fetch("http://localhost:8000/api/category/listById/"+this.id , options);
            const data = await response.json();

            console.log(data);

            let editCategoryData = {
                name: data.data.name,
                description: data.data.description,
            }
            this.category = editCategoryData;
        },
        data(){
            return{
                category: {
                    name: "",
                    description: ""
                }
            }
        },
        methods:{
            async updateCategory(e){
                e.preventDefault();

                const options = {
                method: "PUT",
                headers: {'Content-Type': 'application/json'},
                body:  JSON.stringify(this.category)
            }
                const response = await fetch("http://localhost:8000/api/category/update/"+this.id , options);
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
  #card {
    margin: 2em auto;
  }
  </style>