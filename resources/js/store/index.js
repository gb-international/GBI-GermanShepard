export default {
    state:{
        singlepost:[],
        editdata:[],
        alldata:[], // All data from the api
    },
    // Getters help to fetch the data from the templates 
    getters:{
        // Return All the data related to the api
        getAllData(state){
            return state.alldata
        },
        getEditData(state){
            return state.editdata
        }
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

        getEditData(context,api){
            axios.get(api)
                .then((response)=>{
                    context.commit('editdata',response.data)
                })
        }       
    },
    mutations:{
        // Return alll the data related to the api call
        alldata(state,data){
            return state.alldata = data
        },
        editdata(state,payload){
            return state.editdata = payload
        }
    }
}