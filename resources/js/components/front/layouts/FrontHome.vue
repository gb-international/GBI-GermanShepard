<template>
  <div id="fronthome">
      <!-- <div class="slidehome">
        <carousel :data="['Slide 1', 'Slide 2', 'Slide 3']"></carousel>
    </div> -->
      <div class="slidehome"><div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="img-fluid" id="bannerimg1" :src="`assets/front/images/banner.jpg`" alt="GBI slide">
        </div>
        <div class="carousel-item">
           <img class="img-fluid" id="bannerimg2" :src="`assets/front/images/banner1.jpg`" alt="GBI slide">
        </div>
        <div class="carousel-item">
           <img class="img-fluid" id="bannerimg3" :src="`assets/front/images/banner2.jpg`" alt="GBI slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <!-- End Slider area -->
  
  <div class="container">
    <!-- Start Services -->

       <div class="card-titles">
          <h1>Our Travel Programs</h1>
          <h4>Immerge in a Riveting Journey</h4>
       </div> 
       <div class="row">
         <div class="col-sm-4" v-for="program in travel_programs">
           <div class="card card-1">
             <router-link :to="`/explore-destination`">
               <img class="" :src="`/images/tourprogram/`+program.image">
                <div class="card-body">
                  <h5 class="card-title">{{ program.title }}</h5>
                  <p class="card-text" v-html="program.description"></p>
                </div>
              </router-link>
           </div>
         </div>
       </div>

      
    <!-- End Services -->

    <!-- Start Video -->

    <section class="content-video">
      <!-- class="video-section" -->
      <article class="card-titles">
        <h1>Join our adventures at GB International</h1>
        <!-- <h4>GB International!!</h4> -->
      </article>      
      <div class="content mt-35">  
        <div class="rwd-media">
          <!-- <iframe src="https://player.vimeo.com/video/60814695?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="448" height="200" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> -->
           <video width="400" controls controlsList="nodownload">
            <source src="/assets/front/youtube-video.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
        </div>       
      </div>
    </section>
  </div>

    </div>
</template>

<script>

export default {
    name: "FrontHome",
    data(){
      return {
        travel_programs:[],
      }
    },
    created(){
      this.TravelPorgrams();
    },
    methods:{
      TravelPorgrams(){
        axios.get('/api/travel-programs').then((response)=>{
          this.travel_programs = response.data;
        })
      }
    }
}
</script>

<style scoped>

</style>