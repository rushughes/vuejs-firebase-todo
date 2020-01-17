<template>
  <section>
    <navigation />
    <h5
      class="center-align"
    >
      To-Dos
    </h5>
    <ul class="collection with-header">
      <li class="collection-header">
        <div class="row">
          <div class="input-field col s10">
            <input
              id="new_todo"
              v-model="todo.title"
              type="text"
              class="validate"
            >
          </div>
          <div class="input-field col s2">
            <button
              class="btn"
              @click="addTodo"
            >
              Add
            </button>
          </div>
        </div>
      </li>
      <li class="collection-item" v-for="todo in todos" :key="todo.id" :class="{ fade: todo.isCompleted }">
        {{todo.title}}
        <span class="secondary-content">
            <label>
                <input type="checkbox" class="filled-in" :checked="todo.isCompleted"
                    @change="updateTodoItem(todo.id, $event)" />
                <span></span>
            </label>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
  import navigation from "@/components/NavBar.vue";
  import firebase from "firebase";

  export default {
    components: {
      navigation,
    },
    data() {
      return {
        todos: [],
        todo: {
          title: "",
        }
      }
    },
    created() {
      this.getTodos();
    },
    methods: {
      async getTodos() {
        var todosRef = await firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("todos");
        todosRef.onSnapshot(snap => {
            this.todos = [];
            snap.forEach(doc => {
                var todo = doc.data();
                todo.id = doc.id;
                this.todos.push(todo);
            });
        });
      },
      addTodo() {
        firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("todos")
        .add({
            title: this.todo.title,
            createdAt: new Date(),
            isCompleted: false,
        });
      }
    },
  }

</script>

<style>
.collection.with-header {
    max-width: 500px;
    margin: 0 auto;
}
</style>
