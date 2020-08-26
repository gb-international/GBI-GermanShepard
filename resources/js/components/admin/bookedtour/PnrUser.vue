<template>
    <div class="pnrstudent">
        <h3 class="p-3 text-center">Assign PNRs with Users</h3>
        <hr class="pb-2">
        <div class="row">
            <div class="col-sm-1 text-center pt-1">
                <span>1</span>
            </div>
            <div class="col-sm-5">
                <select class="form-control">
                    <option>Ram singh</option>
                </select>
            </div>
            <div class="col-sm-5">
                <select class="form-control">
                    <option v-for="pnr in pnrList" :key="pnr.pnr_number" :value="pnr.id">{{ pnr.pnr_number }}</option>
                </select>
            </div>
            <div class="col-sm-1"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pnrList:{},
            userList:{}
        }
    },
    mounted(){
        this.getPnr();
        this.getUser();
    },
    methods:{
        getPnr() {
            var api = "/api/touruser-list";
            var data = { tour_code : this.$route.params.tour_id };
            axios.post(api, data).then((response) => {
                    this.userList = response.data;
                    console.log(this.userList);
                })
                .catch((error) => {
                this.handleError(error);
            });
        },
        
        getUser() {
            var api = "/api/pnrs/students";
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
        
    }
}
</script>