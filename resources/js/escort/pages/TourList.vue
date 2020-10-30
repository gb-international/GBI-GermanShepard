<template>
    <div class="container p-4">
        <h5 class="text-muted">
            Tour
        </h5>
        <div class="mt-4">
            <div v-for="tour in tours" :key="tour.id">
                <router-link :to="`/dashboard/${tour.tour_code}`" class="decoration-none">
                    <div :class="[tour.class_name]" class="pt-3 text-white border-radius-7 mb-3 font-weight-bolder pb-2">
                        <div class="row m-0 pr-2 pl-2">
                            <div class="col-sm-8">
                                <label class="f-12">Tour</label>
                                <p>{{ tour.tour.itinerary.title }}</p>
                            </div>
                            <div class="col-sm-4">
                                <div class="row">
                                    <div class="col">
                                        <label class="f-12">Date</label>
                                        <p>{{ tour.tour.tour_start_date }}</p>
                                    </div>
                                    
                                    <div class="col text-sm-right">
                                        <label class="f-12">Status</label>
                                        <p>{{ tour.tour.status }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:"TourList",
    data(){
        return{
            tours:'',
        }
    },
    created(){
        if(this.$cookies.get('escort_id') == undefined){
            this.$router.push('/');
        }
        // this.$cookies.remove('escort_id');
        this.tourList();
    },
    methods:{
        tourList(){
            var api = `/escort/tour-list/${this.$cookies.get('escort_id')}`;
            axios.get(api).then(response=>{
                this.tours = response.data;
                for(var i=0;i<this.tours.length;i++){
                    var today = new Date();

                    var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    
                    var start_date = this.tours[i].tour.tour_start_date;
                    var end_date = this.tours[i].tour.tour_end_date;

                    if(today_date <= end_date && today_date >= start_date){
                        this.tours[i].tour.status = 'Current';
                        this.tours[i].class_name = 'bg-green';
                    }
                    else if (today_date < start_date){
                        this.tours[i].tour.status = 'Upcomming';
                        this.tours[i].class_name = 'bg-yellow';
                    }else{
                        this.tours[i].tour.status = 'Ended';
                        this.tours[i].class_name = 'bg-red';
                    }
                }
            })
        }
    }
}
</script>