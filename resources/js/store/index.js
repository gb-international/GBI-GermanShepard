export default {
    state:{
        singlepost:[],
        alldata:[], // All data from the api
    },
    // Getters help to fetch the data from the templates 
    getters:{
        // Return All the data related to the api
        getAllData(state){
            return state.alldata
        },

    },
    //getAllTableData();
    actions:{
        // Get all the data from the api
        getAllData(context,api){
            axios.get(api)
                .then((response)=>{
                    context.commit('alldata',response.data.data)
                })
            },
        getPostById(context,payload){
            axios.get('/singlepost/'+payload)
                .then((response)=>{
                    context.commit('siglePost',response.data.post)
                })
        },
       
    },
    mutations:{
        // Return alll the data related to the api call
        alldata(state,data){
            return state.alldata = data
        },
        siglePost(state,payload){
            return state.singlepost = payload
        },
    }
}