<template>
    <div class="container" id="container">
        <div class="card">
            <div class="card-header">
                <center><a name="" id="" class="btn btn-success" href="#" role="button">Crea una nueva categoría</a></center>
            </div>          
            <div class="card-body">
                <table class="table table-striped table-inverse table-responsive">
                    <thead class="thead-inverse">
                        <tr>
                            <th><center>Id</center></th>
                            <th><center>Nombre</center></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <td></td>
                            <th><center>Descripción</center></th>
                            <th><center>Acciones</center></th>
                        </tr>
                        </thead>
                        <tbody>    
                            <tr v-for="category in categories" :key="category.id">
                                <td><center>{{category.id}}</center></td>
                                <td><center>{{category.name}}</center></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{{category.description}}</td>
                                <td>
                                 <button name="delete" id="btnDelete" class="btn btn-danger" href="#" role="button">Eliminar</button>
                                 <button name="more" id="btnMore" class="btn btn-info" href="#" role="button">Ver más...</button>
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

        const response = await fetch("http://localhost:8000/api/category/list", options);
        const data = await response.json();

        console.log(data);

        this.categories = data.data;
    },
    data(){
        return {
            categories:[]
        }
    }

}
</script>

<style scoped>
#btnDelete {
    margin-left: 135px;
    margin-right: 25px; 
}
#btnMore {
    margin-right: 0px; 
}
#container {
    margin-top: 35px;
}
</style>