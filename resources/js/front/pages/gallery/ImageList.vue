<template>
  <div class="container pt-3 imageslist">
    <p class="p-0 m-0"><b>Ramanujan Public School,Delhi</b></p>
    <p class="p-0 m-0">
      06 Days Tour To Ahm Statue Of Unity Amul Mt. Abu Udaipur
    </p>



    <div class="mt-3">
      <div class="images"  v-viewer.rebuild="{movable: true}">
        <div class="row">
          <div class="col-sm-4 mb-4 pb-1 blog-list" v-for="img in Images" :key="img.path">
            <div class="card p-3 border-radius-0" @click="show">
              <img
                class="card-img border-radius-0 cardimage"
                :src="img.path"
                alt="Bologna"/>
              <div
                class="card-img-overlay d-flex align-content-end flex-wrap p-0"
              >
                <div class="card-text-data p-3 shera-img">
                  <!-- <img :src="`/icons/Mascot_Chita.png`" class="shera-img-size" /> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

  </div>
</template>
<script>
export default {
  data() {
    return {
      Images : [
        {path:'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg'},
        {path:'https://images.unsplash.com/photo-1605461645229-f6fa66264133?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'},
        {path:'https://images.unsplash.com/photo-1588622056559-ea32476c6ec4?ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80'},
        {path:'https://images.unsplash.com/photo-1583738235590-79f909dd2c72?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'},
        {path:'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-3.jpg'},
      ],
      options: { "inline": true, "button": false, "navbar": true, "title": false, "toolbar": true, "tooltip": false, "movable": false, "zoomable": true, "rotatable": false, "scalable": false, "transition": true, "fullscreen": true, "keyboard": false, "url": "data-source" }
    };
  },
  methods: {
    show () {
      const viewer = this.$el.querySelector('.images').$viewer
      viewer.show()
    }
  },
};
</script>