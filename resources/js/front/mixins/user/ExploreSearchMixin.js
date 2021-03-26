import { ModelSelect } from "vue-search-select";
import { Form, HasError } from "vform";
import ItineraryList from "@/front/components/ItineraryList";
import _ from "lodash";
import SearchExplor from "@/front/components/SearchExplor.vue";
const ExploreSearchMixin = {
    components:{
        ModelSelect,
        Form,
        HasError,
        ItineraryList,
        'searchexplor': SearchExplor
    },
    data() {
        return {
            save_disable_btn: false,
            remove_disable_btn: true,
            multicity: false,
            region: "national",
            noofdays_option: 10,
            tourtype_option: [],
            options: [],
            destinationCities: [],
            sources: { value: "", text: "" },
            destinations: { value: "", text: "" },
            multi_source: { value: "", text: "" },
            multi_destination: { value: "", text: "" },
            rows: [
                {
                    source: { value: "", text: "" },
                    destination: { value: "", text: "" },
                },
            ],
            city_button: 1,
            counter: 2,
            customers: [],
            current_counter: 1,
            show: true,
            data: [],
            datas: [],
            search: "",
            searchs: "",
            isOpen: false,
            isOpens: false,
            arrowCounter: 0,
            arrowCounters: 0,
            allSearchdata: [],
            noofday: "",
            tourtype: "",
            loading: false,
            page: 1,
            items_list: [],
            modoals_show:false,
            tour_type_text:'',
            searchForm: new Form({
                source: [],
                destination: [],
                tourtype: [],
                noofday: [],
            }),
        };
    },

    computed: {
        // start filterdata source and destination
        filteredSource() {
            if (!this.search) return this.data;
            return this.data.filter((result) => {
                return result.source.toLowerCase().includes(this.search.toLowerCase());
            });
        },
        filteredData() {
            if (!this.searchs) return this.datas;
            return this.datas.filter((resultdata) => {
                return resultdata.destination
                    .toLowerCase()
                    .includes(this.searchs.toLowerCase());
            });
        },
        alldata() {
            return this.$store.getters.getAllData;
        },
    },
    created() {
        this.$axios.get("/api/search").then((res) => {
            this.data = res.data.data;
            this.datas = res.data.data;
        });
        this.tourTypeData();
        this.intersected();
        this.getCities();
    },

    methods: {
        getCities() {
            this.$axios.get(`/api/regional-cities/national`).then((res) => {
                for (var i = 0; i < res.data.length; i++) {
                    this.options.push({
                        value: res.data[i].name,
                        text: res.data[i].name,
                    });
                }
                this.destinationCities = this.options;
            });
        },

        getInternationalCities() {
            this.$axios.get(`/api/regional-cities/international`).then((res) => {
                this.destinationCities = [];
                for (var i = 0; i < res.data.length; i++) {
                    this.destinationCities.push({
                        value: res.data[i].name,
                        text: res.data[i].name,
                    });
                }
            });
        },
        async intersected() {
            if (this.loading == false) {
                this.loading = true;

                var url = `/api/itinerary-list?page=` + this.page;
                const res = await fetch(url);

                this.page++;
                var items = await res.json();
                if (items.data.length > 0) {
                    this.items_list = [...this.items_list, ...items.data];
                }
                items = [];
                this.loading = false;
            }
        },
        RealSearch: _.debounce(function () {
            this.$store.dispatch("SearchPost", this.keyword);
        }, 1000),

            tourTypeData() {
            this.$axios.get("/api/tourtype").then((res) => {
                this.tourtype_option = res.data;
            });
        },

        reset() {
            this.item = {};
        },
        selectFromParentComponent1() {
            // select option from parent component
            this.item = this.options[0];
        },
        reset2() {
            this.item2 = "";
        },
        selectFromParentComponent2() {
            // select option from parent component
            this.item2 = this.options2[0].value;
        },
        tourtypeOnChange(event) {
            this.tourtype = event.target.value;
            for (let i = 0; i < this.tourtype_option.length;i++){
                if(this.tourtype == this.tourtype_option[i].id){
                    this.tour_type_text = this.tourtype_option[i].name;
                }
            }
        },
        noofdaysOnChange(event) {
            this.noofday = event.target.value;
        },
        //add rows multiple location itinerary
        addRow: function () {
            var vm = this;
            var current = this.current_counter;
            var previous = current - 1;
            this.current_counter = this.current_counter + 1;
            this.city_button = this.city_button + 1;
            this.rows.push({
                source: { value: "", text: "" },
                destination: { value: "", text: "" },
            });
            // this.rows[current].source = this.rows[previous].destination;
            vm.rows[vm.current_counter - 1].destination = vm.multi_source;
        },
        //delete rows multiple location itinerary
        deleteRow: function (index) {
            this.current_counter = this.current_counter - 1;
            this.city_button = this.city_button - 1;
            this.rows.splice(index, 1);
        },
        //search autocompelete start
        onChange() {
            // Let's warn the parent that a change was made
            this.$emit("input", this.search);
            // Is the data given by an outside ajax request?
            if (this.isAsync) {
                this.isLoading = true;
            } else {
                // Let's search our flat array
                // this.filterResults();
                this.isOpen = true;
            }
        },
        onChanges() {
            this.$emit("input", this.searchs);
            // Let's search our flat array
            this.isOpens = true;
        },
        setResult(result) {
            this.search = result;
            this.isOpen = false;
        },
        setResults(resultdata) {
            this.searchs = resultdata;
            this.isOpens = false;
        },

        handleClickOutside(evt) {
            if (!this.$el.contains(evt.target)) {
                this.isOpen = false;
                this.arrowCounter = -1;
            }
        },
        handleClickOutsides(evt) {
            if (!this.$el.contains(evt.target)) {
                this.isOpens = false;
                this.arrowCounters = -1;
            }
        },

    },
    watch: {
        multi_source: function (value) {
            var self = this;
            if (self.rows[0]) {
                self.rows[this.current_counter - 1].destination = value;
            }
        },

        current_counter: function (value) {
            if (value == 1) {
                this.save_disable_btn = false;
                this.remove_disable_btn = true;
            }
            if (value == this.counter) {
                this.save_disable_btn = true;
                this.remove_disable_btn = false;
            }
        },

        region: function () {
            if (this.region == "national") {
                this.destinationCities = this.options;
            } else {
                this.getInternationalCities();
            }
        },
    },

    destroyed() {
        // search autocompelete start
        document.removeEventListener("click", this.handleClickOutside);
        document.removeEventListener("click", this.handleClickOutsides);
    },
}

export default ExploreSearchMixin;