<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="UpdateBus()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="company_name">Bus Company name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.company_name"
                :class="{ 'is-invalid': form.errors.has('company_name') }"
                placeholder="Enter name"
              />
              <has-error :form="form" field="company_name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="seater">Seater</label>
              <dropdown-filter class="mb-2" :itemList="seater" @update:option="UpdateSeater" :selectedId="form.seater"/>
              <has-error :form="form" field="seater"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="seat_type">Seat type</label>
              
              <dropdown-filter class="mb-2" :itemList="seat_type" @update:option="updateSeatType" :selectedId="form.seat_type"/>

              <has-error :form="form" field="seat_type"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="price">Price</label>
              <input
                type="number"
                class="form-control"
                placeholder="Enter price"
                rows="5"
                v-model="form.price"
                :class="{ 'is-invalid': form.errors.has('price') }"
              />
              <has-error :form="form" field="price"></has-error>
            </div>
          </div>
        </div>

        <form-buttons />
      </form>
    </template>
  </form-layout>
</template>

<script>
import { Form, HasError } from "vform";
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownFilter from "@/admin/components/form/DropdownFilter.vue";
export default {
  name: "NewBus",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-filter": DropdownFilter,
  },
  data() {
    return {
      // Create a new form instance
      seater: [
        {name:'10',id:'10'},
        {name:'20',id:'20'},
        {name:'30',id:'30'},
        {name:'35',id:'35'},
        {name:'40',id:'40'},
        {name:'45',id:'45'},
        {name:'50',id:'50'}
      ],
      
      seat_type: [
        {name:'2*2',id:'2*2'},
        {name:'3*2',id:'3*2'},
        {name:'Sigle seater',id:'Sigle seater'},
        {name:'Multi seater',id:'Multi seater'},
      ],
      form: new Form({
        company_name: "",
        seater: "",
        seat_type: "",
        price: "",
      }),
    };
  },
  created() {
    this.editBus();
  },
  methods: {
    UpdateSeater(v){ this.form.seater = v.name },    
    updateSeatType(v){ this.form.seat_type = v.name },
    editBus() {
      axios.get(`/api/bus/${this.$route.params.id}/edit`).then((response) => {
        setTimeout(() => $("#example").DataTable(), 1000);
        this.form.fill(response.data);
      });
    },
    UpdateBus() {
      this.form
        .put(`/api/bus/${this.$route.params.id}`)
        .then((response) => {

          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated",
          });
        })
        .catch(() => {});
    },
  },
};
</script>
