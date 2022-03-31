<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="jumbotron">
                    <h1>Hello, world!</h1>
                    <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                </div>
            </div>
        </div>
        <div class="row" >
            <div class="col-md-4" v-for="task of tasks" v-bind:key="task._id">
                <h2>{{task.title}}</h2>
                <p>{{task.description}}</p>
                <p>
                    <router-link :to="'/task/'+task._id">
                        <a class="btn btn-default" role="button">View Task &raquo;</a>
                    </router-link>
                </p>
            </div>
        </div>    
    </div>  
</template>

<script>
export default {
    data() {
        return {
            tasks: []
        }
    },
    created () {
        this.getTasks();
    },
    methods: {
        getTasks() {
            fetch('/api/tasks')
            .then(response => response.json())
            .then(tasks => {
                this.tasks = tasks;
            })
        }
    }

}
</script>
