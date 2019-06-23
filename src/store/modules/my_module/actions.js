import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export default {
    requestTestData: (context) => {
        if (context.state.testData.length === 0) {
            console.log("request sent!");
            Vue.http.get('https://jsonplaceholder.typicode.com/posts').then(response => {
                // we send only the first 10 objects to the mutation for the sake of simplicity
                context.commit("setTestData", response.data.slice(0, 10));
                context.commit("delete");
            },
            error => {
                console.log(error);
            })
        }
    }
}
