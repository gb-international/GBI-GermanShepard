<template>
  <div id="pnrList">
    <h3 class="text-center pt-2">PNR History</h3>
    <hr />
    <h5>Flight PNR</h5>
    <div class="flight-detail" v-if="flights">
      <div class="row">
        <div class="col-sm-6" v-for="(flight,index) in flights" :key="flight.id">
            <span class="d-none" >{{ index = index+'flight' }}</span>
          <div class="row">
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                v-model="flight.pnr_number"
                :readonly="index != edit_index"
              />
            </div>
            <div class="col-sm-2">
              <img
                v-if="index != edit_index"
                class="edit"
                :src="`/assets/front/icons/edit.png`"
                @click="edit_row(index)"
              />
              <img
                v-else
                class="edit"
                :src="`/assets/front/icons/update.png`"
                @click="update_row('flight',index)"
              />
              <img class="delete" :src="`/assets/front/icons/delete.png`" @click="delete_row('flight',index,flight.id)">
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr>
    <h5 class="pb-3">Train PNR</h5>
    <div class="flight-detail" v-if="trains">
      <div class="row">
        <div class="col-sm-6" v-for="(train,index) in trains" :key="train.id">
            <span class="d-none" >{{ index = index+'train' }}</span>
          <div class="row">
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                v-model="train.pnr_number"
                :readonly="index != edit_index"
              />
            </div>
            <div class="col-sm-2">
              <img
                v-if="index != edit_index"
                class="edit"
                :src="`/assets/front/icons/edit.png`"
                @click="edit_row(index)"
              />
              <img
                v-else
                class="edit"
                :src="`/assets/front/icons/update.png`"
                @click="update_row('train',index)"
              />
              <img class="delete" :src="`/assets/front/icons/delete.png`" @click="delete_row('train',index,train.id)">
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr>
    <h5 class="pb-3">Bus Numbers</h5>
    <div class="flight-detail" v-if="buses">
      <div class="row">
        <div class="col-sm-6" v-for="(bus,index) in buses" :key="bus.id">
            <span class="d-none" >{{ index = index+'bus' }}</span>
          <div class="row">
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                v-model="bus.pnr_number"
                :readonly="index != edit_index"
              />
            </div>
            <div class="col-sm-2">
              <img
                v-if="index != edit_index"
                class="edit"
                :src="`/assets/front/icons/edit.png`"
                @click="edit_row(index)"
              />
              <img
                v-else
                class="edit"
                :src="`/assets/front/icons/update.png`"
                @click="update_row('bus',index)"
              />
              <img class="delete" :src="`/assets/front/icons/delete.png`" @click="delete_row('bus',index,bus.id)">
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
export default {
  name: "PnrList",
  data() {
    return {
      trains: "",
      flights: "",
      buses: "",
      edit_index: -1,
    };
  },
  mounted() {
    this.getPnr();
  },
  methods: {
    getPnr() {
      var api = "/api/pnrs/" + this.$route.params.id;
      axios.get(api).then((response) => {
        this.trains = response.data.trains;
        this.flights = response.data.flights;
        this.buses = response.data.buses;
      });
    },
    edit_row(index) {
      this.edit_index = index;
    },
    update_row(type,index) {
        var index = index[0];
        if(type == 'flight'){
            this.UserTourUpdate(this.flights[index]);
        }else if(type=='train'){
            this.UserTourUpdate(this.trains[index]);
        }else{
            this.UserTourUpdate(this.buses[index]);
        }
      this.edit_index = "";
    },

    UserTourUpdate(data) {
        var api = '/api/pnrs/'+data.id;
        axios.patch(api, data, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
            console.log(response);
            if (response.data == "error") {
                this.$swal.fire({
                icon: "error",
                title: "Try again",
                text: "Please enter valid travel code!",
                });
            } else {
                this.edit_index = -1;
                this.$swal.fire("Success", "PNR updated !!!", "success");
                // this.tourListData();
            }
        })
        .catch((error) => {
          this.handleError(error);
        });
    },
    delete_row(type,index,id) {
        var index = index[0];
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.value) {
            var api = '/api/pnrs/'+id;
            var data = {id:id};
            axios.delete(api,data, {
              headers: { Authorization: `Bearer ${localStorage.token}` }
            })
            .then(response => {

                if(type == 'flight'){
                    this.flights.splice(index, 1);
                }else if(type=='train'){
                    this.trains.splice(index, 1);
                }else if(type=='bus'){
                    this.buses.splice(index, 1);
                }else{
                    console.log('something wrong');
                }
            })
            .catch(error => {
              this.handleError(error);
            });
            this.$swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });

    },
  },
};
</script>