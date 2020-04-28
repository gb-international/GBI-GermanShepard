<template>
  
    <div class="container">
      <div id="itinerary_detail_list" v-if="alldata">
          <div class="row" v-for="item in alldata">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
                  <!-- start listing -->
                  <div v-if="item.tour_status == '1'">
                    <div class="list active">
                      <div class="row">
                        <div class="list_text">
                          <h2>{{item.source}} To {{item.destination}} <span>( {{item.tour_start_date}} To {{item.tour_end_date}} )</span></h2>
                          <p>{{item.title}}</p>
                        </div>

                        <div class="list_img">
                          <img src="https://thumbs.dreamstime.com/z/gambling-cards-hand-1652609.jpg">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else-if="item.tour_status == '0'">
                    <div class="list inactive">
                      <div class="row">
                        <div class="list_text">
                          <h2>{{item.source}} To {{item.destination}} <span>( {{item.tour_start_date}} To {{item.tour_end_date}} )</span></h2>
                          <p>{{item.title}}</p>
                        </div>

                        <div class="list_img">
                          <img src="https://thumbs.dreamstime.com/z/gambling-cards-hand-1652609.jpg">
                        </div>
                      </div>
                    </div>
                  </div>
                  <br>

            </div>
            <div class="col-sm-2"></div>
          </div>
      </div>
      <div class="text-center" v-else>
          <h1>You Don't Have Active Tour</h1>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Tour-detail",
        data(){
          return{
            oddclass:false,
            evenclass:true,
            itineraryData:{}
          }
        },
        created(){
          if(localStorage.getItem('login') == '0'){
            this.$router.push('/login')
          }
        },
       mounted(){
         var api = "/api/tour-list/"+this.$session.get('user_id');
          this.$store.dispatch("getEditData",api)
        },
        computed:{

          alldata(){
            return this.$store.getters.getEditData
          }
        },
       methods:
       {
         
       } 
    }

</script>
