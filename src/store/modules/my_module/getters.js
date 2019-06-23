export default {
    getTestData: (state) => {
        console.log(state.testData);
        return state.testData;
    },
    getLoadingTestData: (state) => {
        return state.loadingTestData;
    }
}