<!-- 
This template helps us to create a new Category it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <section class="content">
    <div class="container-fluid">
      <!--************************************************
        Template Type: Adding New Category
        Author:@Ajay
        ****************************************************-->
      <div class="row justify-content-around">
        <div class="col-md-12">
          <form
            role="form"
            enctype="multipart/form-data"
            @submit.prevent="AddCategory()"
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
                <router-link
                  :to="`/tags`"
                  class="btn btn-primary itrn_add_btn back_btn"
                  >Back</router-link
                >
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
  methods: {
    AddCategory() {
      this.form
        .post("/api/tags")
        .then((response) => {
            this.form.reset();
            this.$toast.fire({
              icon: "success",
              title: "Category Added successfully",
            });
        })
        .catch(() => {});
    },
  },
}
</script>