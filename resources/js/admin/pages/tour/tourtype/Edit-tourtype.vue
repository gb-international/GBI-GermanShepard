<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="updateTourtype()"
      >
        <div class="row">
          <div class="col-sm-8">
            <div class="form-group">
              <label for="name">tourtype Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter tourtype Name"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-4">
            <back-button url="/tourtype"></back-button>
          </div>
          <div class="col-sm-4">
            <div class="form-group text-center">
              <submit-button />
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
      </form>
    </template>
  </form-layout>
</template>

<script>
import { Form, HasError } from "vform";
import BackButton from "@/admin/components/buttons/BackButton.vue";
import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
export default {
  name: "EditTourType",
  components: { 
    Form,
   "has-error": HasError,
   "back-button": BackButton,
    "submit-button": SubmitButton,
    "form-layout": FormLayout,
  },
  data() {
    return {
      form: new Form({
        name: "",
      }),
    };
  },
  created() {
    this.TourtypeData();
  },
  methods: {
    TourtypeData() {
      axios
        .get(`/api/tourtype/${this.$route.params.id}/edit`)
        .then((response) => {
          this.form.fill(response.data);
        });
    },
    updateTourtype() {
      this.form
        .put(`/api/tourtype/${this.$route.params.id}`)
        .then((response) => {
          this.$router.push("/tourtype");
          this.$toast.fire({
            icon: "success",
            title: "Tourtype Updated successfully",
          });
        })
        .catch(() => {});
    }
  },
};
</script>

<style scoped>
</style>