<template>
    <div class="container" id="container">
        <div class="card">
            <div class="card-header">
                <center><router-link :to="'/posts/create'" name="create" id="btnCreate" class="btn btn-success" href="#" role="button">Crea un nuevo post</router-link></center>
            </div>          
            <div class="card-body">
                <table class="table table-striped table-inverse table-responsive">
                    <thead class="thead-inverse">
                        <tr>
                            <th><center>Id</center></th>
                            <th><center>Título</center></th>
                            <th><center>Contenido</center></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><center>Descripción</center></th>
                            <th><center>Acciones</center></th>
                        </tr>
                        </thead>
                        <tbody>    
                            <tr v-for="post in posts" :key="post.id">
                                <td><center>{{post.id}}</center></td>
                                <td><center>{{post.tittle}}</center></td>
                                <td><center>{{post.content}}</center></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{{post.description}}</td>
                                <td>
                                 <button @click="deletePost(post.id)" name="delete" id="btnDelete" class="btn btn-danger" href="javascript:void(0)" role="button">Eliminar</button>
                                 <router-link :to="'/posts/edit/'+post.id" name="more" id="btnMore" class="btn btn-info" href="#" role="button">Ver más...</router-link>
                                </td>
                            </tr>
                        </tbody>
                </table>
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

        const response = await fetch("http://localhost:8000/api/post/list", options);
        const data = await response.json();

        console.log(data);

        this.posts = data.data;
    },
    data(){
        return {
            posts:[]
        }
    }

}
</script>

<style scoped>
#btnDelete {
    margin-left: 165px;
    margin-right: 25px; 
}
#btnMore {
    margin-right: 0px; 
}
#container {
    margin-top: 35px;
}
</style>