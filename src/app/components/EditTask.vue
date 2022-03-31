<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-body">
                        <form v-bind:id="this.$route.params.id">
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
                            <div class="d-grid gab-2 pt-2" >
                                <button class="btn btn-primary btn-lg">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
class Task {
    constructor(title, description) {
        // this.id = id;
        this.title = title;
        this.description = description;
    }
}

export default {
    data () {
        return {
            task: []
        }
    },
    created () {
        this.task = new Task(this.$route.params.Title, this.$route.params.Description);
    },
}
</script>
