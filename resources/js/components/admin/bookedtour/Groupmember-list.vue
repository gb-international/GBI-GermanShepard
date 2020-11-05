<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
  <div class="container">
    <div class="AddGroup p-t-15">
      <div class="row mb-10">
        <div class="col pt-5">
          <div class="input-group">
            <input
              class="form-control py-2 border-right-0 border"
              type="search"
              value="search"
              id="example-search-input"
              v-model="searchQuery"
              placeholder="Search .."
            />
            <span class="input-group-append">
              <button class="btn btn-outline-secondary border-left-0 border" type="button">
                <i class="fa fa-search"></i>
              </button>
            </span>
          </div>
        </div>
        <div class="col pt-5 text-center">
          <a class="text-dark" :href="`/assets/sample-group-list.xlsx`" download>
            <i class="fas fa-download"></i> GBI name list formate
          </a>
        </div>
        <div class="col-sm-4">
          <form method="POST">
            <div class="row">
              <div class="col-lg-12">
                <label>Student List (Excel)</label>
                <div class="form-group">
                  <div class="input-group">
                    <div class="custom-file-uploader">
                      <input
                        type="file"
                        name="file"
                        accept=".xlsx"
                        @change="changeExcelFile($event)"
                      />Browse
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="row group_list simple-form">
        <table class="table table-hover add_group_table text-dark">
          <thead>
            <th>Sr.No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Contact No.</th>
          </thead>
          <tbody>
            <tr v-for="(data,index) in resultQuery" :key="data.id" class="hidden">
              <td>{{ index+1 }}</td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.first_name"
                  :readonly="index != edit_index"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.last_name"
                  :readonly="index != edit_index"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.email"
                  :readonly="index != edit_index"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.gender"
                  :readonly="index != edit_index"
                />
              </td>
              <td>
                <input
                  type="number"
                  class="form-control"
                  v-model="data.age"
                  :readonly="index != edit_index"
                />
              </td>
              <td>
                <div class="row">
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      v-model="data.mobile"
                      :readonly="index != edit_index"
                    />
                  </div>
                  <div class="col-4 justify-content-end">
                    <div class="form-group action_item">
                      <img
                        v-if="index != edit_index"
                        class="edit mr-1"
                        :src="`/assets/front/icons/edit.png`"
                        @click="edit_row(index)"
                      />
                      <img
                        v-else
                        class="edit mr-1"
                        :src="`/assets/front/icons/update.png`"
                        @click="update_row(index)"
                      />
                      <img
                        class="delete"
                        :src="`/assets/front/icons/delete.png`"
                        @click="delete_row(index,data.id)"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr v-for="(data,index) in new_row" :key="index">
              <td>{{ index+1 }}</td>
              <td>
                <input type="text" class="form-control" v-model="data.first_name" />
              </td>
              <td>
                <input type="text" class="form-control" v-model="data.last_name" />
              </td>
              <td>
                <input type="text" class="form-control" v-model="data.email" />
              </td>
              <td>
                <input type="text" class="form-control" v-model="data.gender" />
              </td>              
              <td>
                <input type="text" class="form-control" v-model="data.age" />
              </td>
              <td>
                <input type="text" class="form-control" v-model="data.mobile" />
              </td>
              <td>
                <img
                  class="delete"
                  :src="`/assets/front/icons/delete.png`"
                  @click="delete_new_row(index)"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Buttons -->
        <div class="row reservation_bottom w-100 mt-5 mb-5 justify-content-center text-center">
          <div class="col-sm-4">
            <button
              type="button"
              class="btn btn-default itrn_add_btn"
              @click="demoFromHTML()"
            >DOWNLOAD PDF</button>
          </div>

          <div class="col-sm-5">
            <button
              type="button"
              class="btn btn-default itrn_add_btn"
              @click="UserGroupSave()"
              v-if="new_row_add"
            >SAVE</button>

            <button
              v-else
              type="button"
              class="btn btn-default itrn_add_btn"
              @click="sendLoginDetails()"
            >SEND LOGIN CREDENTIALS</button>
          </div>
          <div class="col-sm-3">
            <div class="input-group">
              <input
                type="number"
                class="form-control"
                placeholder="Add New Row.."
                v-model="row_input"
              />
              <div class="input-group-append">
                <button class="btn text-white" type="button" @click="add_row()">
                  <i class="fas fa-plus-circle"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add Row Modal -->
    <div class="modal fade" id="AddRowModal">
      <div class="modal-dialog modal-md">
        <div class="modal-content modal-color">
          <div class="modal-body">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <p>Add Number of Persion</p>
            <div class="form-group">
              <label for="no_row">Enter Number</label>
              <input type="number" class="form-control p-20" v-model="row_input" />
            </div>
            <p class="text-center">
              <button type="button" class="btn btn-info" @click="add_row">ADD</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, HasError, AlertError } from "vform";
import jsPDF from "jspdf";
import XLSX from "xlsx";
export default {
  name: "AddGroup",
  components: {
    "has-error": HasError,
  },
  data() {
    return {
      searchQuery: null,
      new_row_add: false,
      row_input: "",
      edit_index: -1,
      new_row: [],
      modal_auto: false,
      preivew: false,
      excel_form: new Form({
        excel_file: "",
      }),

      total_row: [
        {
          first_name: "",
          last_name: "",
          email: "",
          gender: "",
          age: "",
          mobile: "",
          tour_id: this.$route.params.id,
          school_id: this.$route.params.school_id,
        },
      ],
    };
  },

  mounted() {
    this.groupMember();

  },

  watch: {
    new_row: function () {
      if (this.new_row.length > 0) {
        this.new_row_add = true;
      } else {
        this.new_row_add = false;
      }
    },
  },

  methods: {
    add_row() {
      for (var i = 0; i < this.row_input; i++) {
        this.new_row.push({
          first_name: "",
          last_name: "",
          email: "",
          gender: "",
          age: "",
          mobile: "",
          tour_id: this.$route.params.id,
          school_id: this.$route.params.school_id,
        });
      }
      this.row_input = "";
    },
    groupMember() {
      axios.get(`/api/groupmembers/${this.$route.params.id}`)
        .then((response) => {
          if (response.data) {
            this.total_row = response.data;
          }
        });

    },
    // Delete Row
    delete_row(index, id) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.value) {
            var data = { id: id };
            axios.post("/api/groupmember/destroy", data)
              .then((response) => {
                this.$swal.fire(
                  "Deleted!",
                  "Member Deleted deleted.",
                  "success"
                );
                this.total_row.splice(index, 1);
              })
              .catch((error) => {
                this.handleError(error);
              });
          }
        });
    },
    delete_new_row(index) {
      this.new_row.splice(index, 1);
    },
    edit_row(index) {
      this.edit_index = index;
    },
    update_row(index) {
      this.UserTourUpdate(this.total_row[index]);
      this.edit_index = "";
    },
    UserTourUpdate(data) {
      axios.post("/api/groupmembers/update", data)
        .then((response) => {
          if (response.data == "error") {
            this.$swal.fire({
              icon: "error",
              title: "Try again",
              text: "Please enter valid travel code!",
            });
          } else {
            this.edit_index = -1;
            this.$swal.fire("Success", "Member updated !!!", "success");
          }
        })
        .catch((error) => {
          this.$swal.fire({
            icon: "error",
            title: "Try again",
            text: error.data,
          });
          this.handleError(error);
        });
    },

    sendLoginDetails() {
      axios.post("/api/groupmembers/addlogindetail", this.total_row)
        .then((response) => {
          if (response.data == "error") {
            this.$swal.fire({
              icon: "error",
              title: "Try again",
              text: "Please enter valid travel code!",
            });
          } else {
            this.$swal.fire("Success", "Students saved and notifications has been sent !!!", "success");
            // this.tourListData();
          }
        })
        .catch((error) => {
          this.$swal.fire({
            icon: "error",
            title: "Try again",
            text: error.data,
          });
          this.handleError(error);
        });
    },

    UserGroupSave() {
      for (var i = this.new_row.length - 1; i >= 0; i--) {
        if (this.new_row[i]["first_name"] == "") {
          this.new_row.splice(i, 1);
        }
      }
      axios.post("/api/groupmember/add", this.new_row)
        .then((response) => {
          if (response.data == "error") {
            this.$swal.fire({
              icon: "error",
              title: "Try again",
              text: "Please enter valid travel code!",
            });
          } else {
            this.$swal.fire("Success", "Group data has added", "success");
            
            this.new_row = [];
            this.new_row_add = false;
            this.groupMember();
          }
        })
        .catch((error) => {
          this.handleError(error);
        });
    },

    demoFromHTML() {
      var doc = new jsPDF();
      doc.setFont("courier");
      doc.setFontStyle("normal");
      doc.setFontSize(10);
      var string = "";
      for (var i = 0; i <= this.total_row.length - 1; i++) {
        let current = this.total_row[i];
        string +=
          "first_name : " +
          current.first_name +
          " , last_name : " +
          current.last_name +
          " , Gender :" +
          current.gender +
          " , Age : " + 
          current.age +
          " , Contact : " +
          current.mobile +
          "\n";
      }
      doc.text(string, 10, 10);
      doc.save("sample.pdf");
    },

    changeExcelFile(event) {
      var vm = this;
      let file = event.target.files[0];
      let filename = file.name;
      let ext = filename.split(".").pop();
      if (ext == "xlsx") {
        var files = event.target.files,
          f = files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
          var data = new Uint8Array(event.target.result);
          var workbook = XLSX.read(data, { type: "array" });
          let sheetName = workbook.SheetNames[0];
          /* DO SOMETHING WITH workbook HERE */
          let worksheet = workbook.Sheets[sheetName];
          var main_data = XLSX.utils.sheet_to_json(worksheet);
          for (var i = 0; i < main_data.length; i++) {
            // if one row consist 5 columns
            if (Object.keys(main_data[i]).length == 6) {
              //this.total_row.push({first_name:'',last_name:'',gender:'',phoneno:''});
              var store = [];
              for (var j in main_data[i]) {
                store.push(main_data[i][j]);
              }
              let row = {
                first_name: store[0],
                last_name: store[1],
                email: store[2],
                gender: store[3],
                age: store[4],
                mobile: store[5],
                tour_id: vm.$route.params.id,
                school_id: vm.$route.params.school_id,
              };
              vm.new_row.push(row);
            }
          }
        };
        reader.readAsArrayBuffer(f);
      } else {
        this.$swal.fire("Alert!", "Please Select .xlsx file", "error");
        return false;
      }
    },
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.total_row.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.first_name.toLowerCase().includes(v));
        });
      } else {
        return this.total_row;
      }
    },
  },
};
</script>

<style scoped>
.delete_icon {
  float: right;
  padding-top: 20px;
  cursor: pointer;
}
.delete_icon:hover {
  color: red;
}
</style>
