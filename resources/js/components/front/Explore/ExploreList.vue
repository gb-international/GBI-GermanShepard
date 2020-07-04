<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <!-- start banner area display image for itinerary listing -->
  
  <div id="explorelist">
    <section class="banner-block explore_list_search mb-20">
      <div class="col-lg-12">
        <div class="container">
          <div class="row">
            <div class="col-10 search-p-top">
              <div class="input-group">
                <input
                  class="form-control border-secondary py-2 h-45 explo-list-search"
                  v-model="keyword"
                  @keyup="RealSearch"
                  type="search"
                  placeholder="Search your itinerary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            
            <itinerary-list :list="items"></itinerary-list>

            <Observer @intersect="intersected" />
          </div>
        </div>
        <div class="loadingspinner" v-if="loading"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Observer from "../../partials/Observer";
import ItineraryList from "../../partials/ItineraryList";
import _ from "lodash";
export default {
  name: "ExploreList",
  components: {
    Observer,
    ItineraryList
  },
  data() {
    return {
      keyword: "",
      page: 1,
      items: [],
      itineraryData: {},
      loading: false
    };
  },
  // get api data itinerary data
  mounted() {
    this.$store.dispatch("getAllData", "/api/itinerary");
    this.intersected();
  },
  //fetch all data function itinerary
  computed: {
    alldata() {
      return this.$store.getters.getAllData;
    }
  },
  methods: {
    async intersected() {
      this.loading = true;
      var url = `/api/itinerary-list?page=` + this.page;
      const res = await fetch(url);

      this.page++;
      const items = await res.json();
      this.items = [...this.items, ...items.data];
      this.loading = false;
    },
    RealSearch: _.debounce(function() {
      this.$store.dispatch("SearchPost", this.keyword);
    }, 1000)
  }
};
</script>
