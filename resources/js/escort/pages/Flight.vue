<template>
    <div class="container p-4">
        <div class="back mb-1">
            <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
        </div>
        <h5 class="text-muted">
            Flight
        </h5>

        <div class="pt-4 font-weight-bolder pb-4 whitesomke">
            <div v-for="flight in flights" :key="flight.id">
                <div class="row m-0 pr-2 pl-2">
                    <div class="col-sm-6">
                        <label class="text-muted f-12">Flight Number & Name</label>
                        <p>{{ flight.flight.name }} {{ flight.flight_number}} </p>
                    </div>
                    <div class="col-sm-4">
                        <div class="row">
                            <div class="col">
                                <label class="text-muted f-12">Departure</label>
                                <p>{{ flight.departure }}</p>
                            </div>
                            
                            <div class="col">
                                <label class="text-muted f-12">Arrival</label>
                                <p>{{ flight.arrival }}</p>
                            </div>
                        </div>
                    </div>
                
                    <div class="col-sm-2">
                        <label class="text-muted f-12">Passengers</label>
                        <p>100</p>
                    </div>
                </div>
                <hr class="w-95" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            flights:''
        }
    },
    created(){
        this.flightsList();
    },
    methods:{
        flightsList(){
            axios.get('/escort/flights/'+this.$route.params.tour_code).then(res => {
                this.flights = res.data;
                console.log(this.flights);
            })
        }
    }
}
</script>