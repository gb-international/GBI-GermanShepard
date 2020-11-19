<template>
  <!--************************************************
      Author:@Ajay
      ****************************************************-->

  <div id="imagegallery">
    <div class="howwework_banner text_on_image banner_bg">
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-sm-8 gallery-search">
            <div class="outer">
              <input
                type="search"
                class="form-control search-field"
                :placeholder="`Search`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-12 col-sm-8 col-md-6 col-lg-4 fullimagecard" v-for="i in 10" :key="i">
            <router-link :to="{ name: 'domestic-images', params:{slug:'img-slug'}}">
              <div class="card">
                <img
                class="card-img card-image"
                src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg"
                alt="Bologna"
                />
                <div
                class="card-img-overlay text-white d-flex align-content-end flex-wrap p-0">
                    <div class="card-text-data p-3 bg-transparent-card">
                        <h6 class="card-subtitle mb-2">Emilia-Romagna Region, Italy</h6>
                        <p class="card-text">
                            It is the seventh most populous city in Italy, at the heart of a
                            metropolitan area of about one million people.
                        </p>
                    </div>
                </div>
              </div>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowWework",
  metaInfo: {
    title: "How We Work",
    meta: [
      {
        name: "description",
        content:
          "@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one",
      },
      {
        name: "keywords",
        content:
          "@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs",
      },
      {
        name: "url",
        content: "https://www.gowithgbi.com/about-us/how-we-work",
      },
      { name: "type", content: "website" },
    ],
  },

  data() {
    return {
      gallery:[],
    };
  },
  created(){
    this.domestic();
  },
  methods:{
    domestic(){
      this.$axios.get('/api/galleries/domestic').then(res=>{
        console.log(res);
      })
    }
  }
};
</script>
