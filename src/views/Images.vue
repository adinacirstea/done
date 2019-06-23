<template>
  <div class="about">
    <h1>Images </h1>
    <ul>
        <!-- we use the getLoadingTestData and getTestData getters to extract the value of the states inside our modules -->
        <b-loading :active.sync="getLoadingTestData"></b-loading>
        <li>
        <img v-for="(user, index) in getTestData" :src="user.url" :key="index" >
        </li>
    </ul>
  </div>
</template>

<script>
/* the mapGetters, mapActions, mapState and mapMutations functions are special helper functions provided to us
by the Vuex library. The functions extract the functions we wrote inside the store module to be used inside our component */ 
import { mapGetters, mapActions } from 'vuex' 
export default {
    data() {
        return {
        }
    },
    computed: {
        /* the first parameter of the function is the module we want to extract the getter from. in this case testModule.
        the next parameter is an array with the name of the getters we want.
        The function returns an object with the two getters as properties. Using the spread operator we inject them inside
        our computed object. Now we can use them as if we declared them here */

        // !!!! aici nu stiu de ce nu merge sa folosesc modulul meu, asa ca am folosit modulul test

        ...mapGetters('testModule', ['getTestData', 'getLoadingTestData'])
    },
    methods: {
        /* the same as above only with the actions of our module */
        ...mapActions('testModule', ['requestTestData'])
    },
    /* When the component is created we dispatch the requestTestData action */
    mounted() {
        console.log("lifecycle hook fires up!");
        this.requestTestData();
    }
}
</script>