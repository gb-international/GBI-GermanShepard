<template>
  <div class="container pt-3 imageslist">
    <p class="p-0 m-0"><b>Ramanujan Public School,Delhi</b></p>
    <p class="p-0 m-0">
      06 Days Tour To Ahm Statue Of Unity Amul Mt. Abu Udaipur
    </p>



    <div class="mt-3">
      <div class="images"  v-viewer.rebuild="{movable: true}">
        <div class="row">
          <div class="col-sm-4 mb-4 pb-1 blog-list" v-for="data in gallery.images" :key="data.id">
            <div class="card p-3 border-radius-0" @click="show">
              <img
                class="card-img border-radius-0 cardimage"
                :src="`/images/gallery/${data.path}`"
                :alt="data.alt"
                :title="data.alt"
                />
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
      options: { "inline": true, "button": false, "navbar": true, "title": false, "toolbar": true, "tooltip": false, "movable": false, "zoomable": true, "rotatable": false, "scalable": false, "transition": true, "fullscreen": true, "keyboard": false, "url": "data-source" },
      gallery:'',
    };
  },
  mounted(){
    this.getGallery();
  },
  methods: {
    getGallery(){
      console.log(this.$route.params.slug);
      this.$axios.get(`/api/get-gallery/${this.$route.params.slug}`).then(res=>{
        this.gallery = res.data;
      })
    },
    show () {
      const viewer = this.$el.querySelector('.images').$viewer
      viewer.show()
    }
  },
};
</script>