<template>
    <div class="container p-4">
        <h5 class="text-muted">
            Tour
        </h5>
        <div class="mt-4">
            <router-link to="/dashboard" class="decoration-none">
                <div class="pt-3 text-white border-radius-7 mb-3 bg-red font-weight-bolder pb-2">
                    <div class="row m-0 pr-2 pl-2">
                        <div class="col-sm-8">
                            <label class="f-12">Tour</label>
                            <p>06 days Tour To Ahmedabad, statue of Unity, lothel-indus Valley Civilization, anand, amul Dairy, Mt. Abu & Udaipur </p>
                        </div>
                        <div class="col-sm-4">
                            <div class="row">
                                <div class="col">
                                    <label class="f-12">Date</label>
                                    <p>27/10/2020</p>
                                </div>
                                
                                <div class="col text-sm-right">
                                    <label class="f-12">Status</label>
                                    <p>Ended</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>

            <router-link to="/dashboard" class="decoration-none">
                <div class="pt-3 text-white border-radius-7 mb-3 bg-green font-weight-bolder pb-2">
                    <div class="row m-0 pr-2 pl-2">
                        <div class="col-sm-8">
                            <label class="f-12">Tour</label>
                            <p>06 days Tour To Ahmedabad, statue of Unity, lothel-indus Valley Civilization, anand, amul Dairy, Mt. Abu & Udaipur </p>
                        </div>
                        <div class="col-sm-4">
                            <div class="row">
                                <div class="col">
                                    <label class="f-12">Date</label>
                                    <p>27/10/2020</p>
                                </div>
                                
                                <div class="col text-sm-right">
                                    <label class="f-12">Status</label>
                                    <p>Ended</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>

            <router-link to="/dashboard" class="decoration-none">
                <div class="pt-3 text-white border-radius-7 mb-3 bg-yellow font-weight-bolder pb-2">
                    <div class="row m-0 pr-2 pl-2">
                        <div class="col-sm-8">
                            <label class="f-12">Tour</label>
                            <p>06 days Tour To Ahmedabad, statue of Unity, lothel-indus Valley Civilization, anand, amul Dairy, Mt. Abu & Udaipur </p>
                        </div>
                        <div class="col-sm-4">
                            <div class="row">
                                <div class="col">
                                    <label class="f-12">Date</label>
                                    <p>27/10/2020</p>
                                </div>
                                
                                <div class="col text-sm-right">
                                    <label class="f-12">Status</label>
                                    <p>Ended</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>


        </div>
    </div>
</template>

<script>
export default {
    name:"TourList",
    data(){
        return{

        }
    },
    created(){
        if(this.$cookies.get('escort_id') == undefined){
            this.$router.push('/');
        }
        // this.$cookies.remove('escort_id');
    }
}
</script>