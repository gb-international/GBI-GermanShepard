<template>
  <div class="container pt-3 imageslist">
    <div v-if="gallery">
      <p class="p-0 m-0"><b>{{ gallery.school.school_name}}</b></p>
      <p class="p-0 m-0">{{ gallery.title }}</p>
    </div>

    <div class="mt-3">
      <div class="images">
        <div class="row">
          <div class="col-sm-4 mb-4 pb-1 blog-list" v-for="(data,index) in gallery.images" :key="data.id">
            <div class="card p-3 border-radius-0" @click="show(index)" data-toggle="modal"
            data-target="#ImagePreviewModal">
              <img
                class="card-img border-radius-0 cardimage"
                :src="data.path"
                :alt="data.alt"
                :title="data.alt"
                />
              <div class="shera-img"></div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="modal fade bg-faded fade-flip" id="ImagePreviewModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-radius-0">
          <div class="modal-body">
            <div class="img-preview">
              <img :src="preview_img" :class="`main-img ${imgclass}`" >              
              <div class="shera-img shera-img-modal"></div>
              <div class="img-preview-bottom">
                <div class="row text-center">
                  <div class="col"><img src="/images/icons/back.png" @click="LeftImage()" class="w-35"/></div>
                  <div class="col"><img src="/images/icons/zoom-out.png" @click="zoomOut()" class="w-20"/></div>
                  <div class="col"><img src="/images/icons/zoom-in.png" @click="zoomIn()" class="w-20"/></div>
                  <div class="col"><img src="/images/icons/forward.png" @click="RightImage()" class="w-35"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Image Preview Modal -->

  </div>
</template>
<script>

export default {

  data() {
    return {
      gallery:'',
      preview_img:'',
      preview_img_index:'',
      img_length:'',
      active:'',
      imgclass:'w-100',
      zoomclass:['w-100','zoom1','zoom2','zoom3'],
      zoom_level:0,
    };
  },
  mounted(){
    this.getGallery();
  },
  methods: {
    getGallery(){
      this.$axios.get(`/api/get-gallery/${this.$route.params.slug}`).then(res=>{
        this.gallery = res.data;
        this.img_length = res.data.images.length-1;
      })
    },
    show (i) {
      this.preview_img_index = i;
      this.preview_img = this.gallery.images[i].path;
    },
    LeftImage(){
      if((this.preview_img_index <= this.img_length)&&(this.preview_img_index != 0)){
        this.preview_img_index--;
         this.show(this.preview_img_index);
      }
    },
    RightImage(){
      if(this.preview_img_index < this.img_length){
        this.preview_img_index++;
         this.show(this.preview_img_index);
      }
    },
    zoomOut(){
      if(this.zoom_level > 0 ){
        this.zoom_level--;
        this.imgclass = this.zoomclass[this.zoom_level];
      }
    },
    zoomIn(){
      if(this.zoom_level < this.zoomclass.length-1){
        this.zoom_level++;
        this.imgclass = this.zoomclass[this.zoom_level];
      }
    }
  },
};
</script>