<template>
  <div class ="container" id="container">
    <div class="card">
        <div class="card-header">
            <b>Nuevo post</b>
        </div>
        <div class="card-body">
            <form>
                <div class="form-group">
                  <label for="tittle">Título:</label>
                  <input type="text" required   name="tittle" id="tittle" v-model="post.tittle" class="form-control">
                </div>
                <br/>
                <div class="form-group">
                  <label for="content">Contenido:</label>
                  <input type="text" required  name="content" id="content" v-model="post.content" class="form-control">
                </div>
                <br/>
                <div class="form-group">
                    <label for="category">Categoría:</label>
                    <select className="form-select" required  name="category" id="category"  v-model="post.category" class="form-control">
                        <option value="">Seleccione...</option>
                        <option v-for="category in categories" :key="category.id">
                            <ul>{{category.name}}</ul>
                        </option>
                    </select>
                </div>
                <br/>
                <div class="form-group">
                    <label for="user">Creado por:</label>
                    <select className="form-select" required  name="user" id="user" v-model="post.user" class="form-control">
                        <option value="">Seleccione...</option>
                        <option v-for="user in users" :key="user.id">
                            <ul>{{user.name}}</ul>
                        </option>
                    </select>
                </div>
                <br/>
                <div class="form-group">
                  <label for="state">Estado:</label>
                  <select className="form-select" required name="state" id="state" v-model="post.state" class="form-control">
                    <option value="">Seleccione...</option>
                        <option value="1">Publicado</option>
                        <option value="0">No publicado</option>
                  </select>
                </div>
                <br/>
                <div class="form-group">
                  <label for="description">Descripción:</label>
                  <textarea name="description" id="description" v-model="post.description" class="form-control" rows="3"></textarea>
                </div>
                <br/>
                <div>
                    <button @click="newPost" name="save" id="btnSave" class="btn btn-success" role="button">Crear post</button>
                    <router-link :to="'/'" name="cancel" id="btnCancel" class="btn btn-secondary" role="button">Cancelar</router-link>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    async created() {
        const options = {
            method: "GET"
        }

        const categoryResponse = await fetch("http://localhost:8000/api/category/list", options);
        const userResponse = await fetch("http://localhost:8000/api/user/list", options);

        const categoryData = await categoryResponse.json();
        const userData = await userResponse.json();

        console.log(categoryData);
        console.log(userData);

        this.categories = categoryData.data;
        this.users = userData.data;
    },
    
    data() {
        return {
            categories:[],
            users:[],
            post: {
                tittle: "",
                content: "",
                user: "",
                category: "",
                state: "",
                description: ""
            }
        }
    },
    methods: {
       async newPost(e) {
            e.preventDefault();

            const options = {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.post)
            }

            const response = await fetch("http://localhost:8000/api/post/store", options);
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