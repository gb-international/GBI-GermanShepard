<template>
    <div class="pnrstudent simple-form">
        <h3 class="p-3 text-center">Assign PNRs with Users</h3>
        <hr class="pb-2">
        <div class="row mb-1" v-for="(user,index) in total_row" :key="user.id">
            <div class="col-sm-1 text-center pt-1">
                <span>{{ ++index }}</span>
            </div>
            <div class="col-sm-5 pt-1">
                <input type="text" :value="user.name" readonly class="pl-2">
            </div>
            <div class="col-sm-5">
                <select class="form-control" v-model="user.pnr_id">
                    <option v-for="pnr in pnrList" :key="pnr.pnr_number" :value="pnr.id">{{ pnr.pnr_number }}</option>
                </select>
            </div>
            <div class="col-sm-1">
                <img
                v-if="update_task == true"
                class="edit"
                :src="`/assets/front/icons/update.png`"
                @click="update_row($route.params.transport,index,user.id)"
              />
            </div>
        </div>
        <div class="row justify-content-center mt-2 mb-2">
            <div class="col-sm-4" v-if="update_task == false">
                <button type="button" class="btn text-white p-1" 
                @click="addData()">Submit</button>
            </div>
        

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pnrList:{},
            userList:{},
            total_row:[],
            update_task:false
        }
    },
    mounted(){
        this.getPnr();
        this.getPnrUser();
    },
    methods:{
        getPnr() {
            var api = "/api/pnrs/get";
            var data = {
                transport_id:this.$route.params.id,
                tour_code : this.$route.params.tour_id,
                transport_type: this.$route.params.transport
            };
            axios.post(api, data).then((response) => {
                    this.pnrList = response.data;
                })
                .catch((error) => {
                this.handleError(error);
            });
        },
        
        getPnrUser() {
            var api = "/api/pnruser/get";
            var data = {
                transport_id:this.$route.params.id,
                tour_code : this.$route.params.tour_id,
                transport_type: this.$route.params.transport
            };
            axios.post(api, data).then((response) => {
                    if(response.data.length>0){
                        this.update_task = true;
                        this.total_row = [];
                        
                        this.total_row = response.data; 
                        console.log(this.total_row);
                    }else{
                        this.getUser();
                    }
                })
                .catch((error) => {
                this.handleError(error);
            });
        },

        
        getUser() {
            var api = "/api/touruser-list";
            var data = {tour_id : this.$route.params.tour_id };
            axios.post(api, data).then((response) => {
                    this.formate(response.data);
                })
                .catch((error) => {
                this.handleError(error);
            });
        },

        formate(data){
            data.forEach(user => {
                this.total_row.push({
                    'user_id': user.user.id,
                    'name' : user.user.name,
                    'email' : user.user.email,
                    'pnr_id' : 0,
                    'tour_id' : this.$route.params.tour_id,
                    'transport_id': this.$route.params.id,
                    'transport_type': this.$route.params.transport,
                });
            });
        },

        addData(){
            var err = 0;
            console.log(this.total_row);
            this.total_row.forEach(row => {
                if(row.pnr_id == 0){
                    this.$swal.fire({
                        icon: "error",
                        title: "Try again",
                        text: "Please Select PNR For Every Student !",
                    });
                    err = 1;
                    return false;
                }
            });
            if(err == 1){ return false; }

            var api = "/api/add-pnr-user";
            axios.post(api, this.total_row).then((response) => {
                    this.$swal.fire({
                        icon: "success",
                        title: "Submited",
                        text: "PNRs have been assigned to each student !",
                    });
                })
                .catch((error) => {
                this.handleError(error);
            });
        },

        update_row(transport,index,id){
            // code for the update query id == userpnr table()
            console.log(transport + ' ' + index + ' ' + id );
        }
        
    }
}
</script>