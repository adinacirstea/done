<template>
  <div class="home">
    <h1> Titles </h1>
    <ul>
        <!-- we use the getLoadingTestData and getTestData getters to extract the value of the states inside our modules -->
        <li v-for="(user, index) in getTestData" :key="index">
          {{user.title}}
        </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex' 
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters('myTestModule', ['getTestData', 'getLoadingTestData'])
    },
    methods: {
        ...mapActions('myTestModule', ['requestTestData'])
    },
    mounted() {
        console.log("lifecycle hook fires up!");
        this.requestTestData();
    }
  
}
// dadea eroare de la asta, asa ca am scos-o :D 

// export default {
//   name: 'home',
//   components: {
    
//   }
// }
</script>
