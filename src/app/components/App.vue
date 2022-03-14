<template>
    <Nav />
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="addTask">
                            <div class="form-group">
                                <input type="text"
                                v-model="task.title"
                                placeholder="Insert a task"
                                class="form-control"
                                >
                            </div>
                            <div class="form-group pt-2">
                                <textarea 
                                v-model="task.description"
                                cols="30" 
                                rows="10"
                                class="form-control"
                                placeholder="Insert a description">
                                </textarea>
                            </div>
                            <div class="d-grid gab-2 pt-2">
                                <button class="btn btn-primary btn-lg">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="card" >

                </div>
            </div>
            <div class="col-md-7">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="task of tasks" key="task._id">
                            <td>{{task.title}}</td>
                            <td>{{task.description}}</td>
                            <td>
                                <button class="btn btn-danger" @click="deleteTask(task)">Delete</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './nan.vue';

class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

export default {
    components: {
        Nav
    },
    data () {
        return {
            task: new Task(),
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
        },
        addTask () {
            fetch('/api/tasks',{
                method: 'POST',
                body: JSON.stringify(this.task),
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                this.getTasks();
            });

            this.task = new Task();
        },
        deleteTask (task) {
            fetch(`/api/tasks/${task._id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.getTasks();
            });
        }
    }
}
</script>