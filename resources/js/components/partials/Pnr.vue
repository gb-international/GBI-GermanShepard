<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
<div id="PNR">
    <p>Enter {{ label }} Number </p>

        <form class="form simple-form">
            <div class="row">
                <div class="col-sm-1 pt-1">1</div>
                <div class="col-sm-5">
                    <input class="form-control" type="text" value="Jane">
                </div>
                <div class="col-sm-1">1</div>
                <div class="col-sm-5">
                    <input class="form-control" type="text" value="Jane">
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-sm-5">
                    <button type="button" class="btn">SAVE</button>
                </div>
                <div class="col-sm-4 pt-2">Number of {{ label }} :</div>
                
                <div class="col-sm-3"><input type="number" v-model="count" class="form-control"></div>

            </div>
        </form>

  </div>
</template>
<script>
export default {
  props: ["transport_type","transport_id"],
  data() {
    return {
        label:'PNRs',
        count:2,
    };
  },
  mounted(){
        this.labelChange();
  },
    watch:{
      transport_type:function(){
         this.labelChange(); 
      }
    },
    methods:{
        labelChange(){
            if(this.transport_type == 'bus'){
              this.label = 'Buses';
            }else{
                this.label = 'PNRs';
            }
        }
    }
};
</script>