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
        
        <div class="card-deck text-center">
          <div class="card card-1">
            <router-link :to="`/upcoming-tour`">
               <img class="card-imgs" :src="`assets/front/images/upcoming.png`">
                <div class="card-body">
                  <h5 class="card-title">Upcoming Tours</h5>
                  <p class="card-text">Stimulate the craze within you and gear up for more excitement. Get ready to embrace fun and adventure as part of your next getaway.</p>
                  <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                </div>
              </router-link>
          </div>
          <div class="card card-1 text-center">
            <router-link :to="`/adventure-tour`">
             <img class="card-imgs" :src="`assets/front/images/Adventure_tours.png`">
              <div class="card-body">
                <h5 class="card-title">Adventure Tours</h5>
                <p class="card-text">Shake up your routine and challenge the adventure within. Ramp up your personal fun quotient and experience a rugged new fitness challenge.</p>
                <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
              </div>
            </router-link>
          </div>
          <div class="card card-1 text-center">
            <router-link :to="`/popular-tour`">
              <img class="card-imgs" :src="`assets/front/images/populartour.png`">
              <div class="card-body">
                <h5 class="card-title">Popular Tours</h5>
                <p class="card-text">Gear up to be awe-stuck by the land of fantasy, contrast and fascinating splendor. There is no dearth of stunning beaches, deserts or mountain ranges.</p>
                <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
              </div>
            </router-link>
          </div>
          </div>
         <div class="card-deck text-center">
          <div class="card card-1">
            <router-link :to="`/europe-tour`">
              <img class="card-imgs" :src="`assets/front/images/europe.png`">
              <div class="card-body">
                <h5 class="card-title">Europe</h5>
                <p class="card-text">From the serenity of Switzerland to the stunning Eiffel tower in Paris, get connected to the histories and cultures of Europe for a lifetime.</p>
                <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
              </div>
            </router-link>
          </div>
          <div class="card card-1 text-center">
            <router-link :to="`/asia-tour`">
              <img class="card-imgs" :src="`assets/front/images/asia.png`">
              <div class="card-body">
                <h5 class="card-title">Asia</h5>
                <p class="card-text">Explore the desert ruins and mega-malls of the Middle East to the magnificent monuments in South Asia and technology capitals of East Asia.</p>
                <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
              </div>
            </router-link>
          </div>
           <div class="card card-1 text-center">
            <router-link :to="`/usa-tour`">
              <img class="card-imgs" :src="`assets/front/images/usa.png`">
              <div class="card-body">
                <h5 class="card-title">USA</h5>
                <p class="card-text">Traverse the arid deserts in the south, the beautiful pacific coastline in the west, the stunning rocky mountains in the north and spectacular cities in the east.</p>
                <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
              </div>
            </router-link>
          </div>
        </div>
      
    <!-- End Services -->

    <!-- Start Video -->

    <section class="content-video">
      <!-- class="video-section" -->
      <article class="card-titles">
        <h1>Hola!! Come Let's Explore</h1>
        <h4>GB International!!</h4>
      </article>      
      <div class="content">  
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

   <!-- <section class="video">
      
     </section>-->
    <!-- End Video -->
      

    <!-- Start Client Testimonials -->
    <!-- <section class="testimonials" id="testimonials">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card-titles">
              <h1>Client Appreciation</h1>
              <div class="testimonials-block">
                <ul class="testimonial-slide">
                  <li>
                    <img class="rt-img" :src="`assets/front/images/img-2.jpg`" alt="img">
                    <p>Often the dates for the trips and the number of students fluctuated but you patiently take everything in your stride. Your smooth organization skills always render hassle free transport from picking to drop. Added to this, the hotels you select are very good, comfortable and secure. </p>
                    <h5 class="rt-name"><strong>Headmistress</strong></h5>
                    <span class="rt-title">Rosary Convent High School, Hyderabad</span>
                  </li>
                  <li>
                    <img class="rt-img" :src="`assets/front/images/img-2.jpg`" alt="img">
                    <p>The quality of food, accommodation provided to us in all the places to our students and staff, we appreciate the care taken by Mr. Rikhi and his team. We all felt at home throughout the tour. We look forward to many more such tours in the future.</p>
                    <h5 class="rt-name"><strong>Principal</strong></h5>
                    <span class="rt-title">Little Flower School, Uppal, Hyderabad</span>
                  </li>
                  <li>
                    <img class="rt-img" :src="`assets/front/images/img-2.jpg`" alt="img">
                    <p>We are grateful to Mr. Rikhi for making our tours a memorable one. He personally took great care to see that meals were served on time. We express our sincere thanks and appreciation to every member of the team who accompanied us on our trips and a special thanks to Mr. Rikhi who managed the programme excellently </p>
                    <h5 class="rt-name"><strong>Principal</strong></h5>
                    <span class="rt-title">St. Martin’s High School, Chintal, Hyderabad </span>
                  </li>

                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- End Client Testimonials -->
    <!-- Start Portfolio -->
    
    </div>
</template>

<script>

    export default {
        name: "FrontHome",
    }
</script>

<style scoped>

</style>