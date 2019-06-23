export default {
    setTestData: (state, data) => {
        console.log(state.testData);
        state.testData = data;
        state.loadingTestData = false;
    },
    delete: (state) => {
        state.testData.pop();
    }
}