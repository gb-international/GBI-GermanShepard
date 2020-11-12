<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <section class="content">
    <div class="container-fluid">
      <!--************************************************
        Template Type: Adding New Hotel
        Author:@Ajay

        ****************************************************-->
      <div class="row justify-content-around">
        <!-- left column -->
        <div class="col-md-12">
          <form
            role="form"
            enctype="multipart/form-data"
            @submit.prevent="UpdateBus()"
          >
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.title"
                    :class="{ 'is-invalid': form.errors.has('title') }"
                    placeholder="Enter title"
                  />
                  <has-error :form="form" field="title"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-2"></div>
              <div class="col-sm-4">
                <button
                  type="button"
                  @click="back()"
                  class="btn btn-primary itrn_add_btn back_btn"
                >
                  Back
                </button>
              </div>
              <div class="col-sm-4">
                <div class="form-group text-center">
                  <button
                    type="submit"
                    class="btn btn-primary btn-block itrn_add_btn"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
              <div class="col-sm-2"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Form, HasError } from "vform";

export default {
  name: "New",
  components: {
    Form,
    "has-error": HasError,
  },
  data() {
    return {
      form: new Form({
        title: "",
      }),
    };
  },
  created() {
    this.editBus();
  },
  methods: {
    editBus() {
      axios.get(`/api/tags/${this.$route.params.id}/edit`).then((response) => {
        setTimeout(() => $("#example").DataTable(), 1000);
        this.form.fill(response.data);
      });
    },
    UpdateBus() {
      this.form
        .put(`/api/tags/${this.$route.params.id}`)
        .then((response) => {
          console.log(response);
          //   this.$router.go(-1);
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated",
          });
        })
        .catch(() => {});
    },
    back() {
      this.$router.push("/tags");
    },
  },
};
</script> 