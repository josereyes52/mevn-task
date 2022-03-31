<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="jumbotron">
                    <h1 class="text-center">{{task.title}}</h1>
                    <p>{{task.description}}</p>
                    <router-link 
                        :to="{
                            name:'EditTask', 
                            params: {
                                Title: task.title,
                                Description: task.description
                            } 
                        }">
                        <a class="btn btn-primary btn-lg" role="button">Edit</a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data () {
        return {
            task: []
        }
    },
    created () {
        this.renderTask();
    },
    methods: {
        renderTask(){
            fetch(`/api/tasks/${this.$route.params.id}`)
            .then(response => response.json())
            .then(task => {
                this.task = task;
            })
        }
    }
}
</script>