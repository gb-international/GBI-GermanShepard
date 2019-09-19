export default {
    state:{
        singlepost:[],
        alldata:[], // All data from the api
        editdata:[],// Get Edit data 
        SearchAll:[],
    },
    // Getters help to fetch the data from the templates 
    getters:{
        // Return All the data related to the api
        getAllData(state){
            return state.alldata
        },
        getAllSearchData(state){
            return state.SearchAll
        },
        getEditData(state){
            return state.editdata
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
        getEditData(context,api){
            axios.get(api)
            .then((response)=>{
                context.commit('editdata',response.data)
            })
        },
        getPostById(context,payload){
            axios.get('/singlepost/'+payload)
                .then((response)=>{
                    context.commit('siglePost',response.data.post)
                })
        },
        SearchPost(context,payload){
            axios.get('api/search?s='+payload)
                .then((response)=>{
                    context.commit('getSearchPost',response.data.data)
                })

        },

         SearchAlldata(context,payload){
            axios.get('api/search-all?s='+payload.s+'&d='+payload.d)
                .then((response)=>{
                    console.log(response.data.data);
                    context.commit('getSearchPostAll',response.data.data)

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
        },
        siglePost(state,payload){
            return state.singlepost = payload
        },
        getSearchPost(state,payload){
            state.alldata = payload
        },
         getSearchPostAll(state,payload){
            state.SearchAll = payload
        },
    }
}