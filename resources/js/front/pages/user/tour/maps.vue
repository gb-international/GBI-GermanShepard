<template>
  <div>
    <!-- <button @click="generate">Generate and Bound to Lat Lngs</button> -->

    <GmapMap v-if="end" style="width: 100%; height: 500px;" :zoom="8" :center="{ lat: end.latLng.lat, lng: end.latLng.lng }"
        ref="map">
      <GmapMarker v-if="start" :position="start.latLng"/>
      <GmapMarker v-if="end" :position="end.latLng"/>
      <GmapMarker v-if="end2" :position="end2.latLng"/>
      <GmapMarker v-if="end3" :position="end3.latLng"/>
      <GmapMarker v-if="end4" :position="end4.latLng"/>
      <GmapPolyline v-if="curvedPath" :path="curvedPath" />
    </GmapMap>
  </div>
</template>

<script>
import {range} from 'lodash'

export default {
  name: "Maps",
  data () {
    return {
      //markers: [],
      place: null,
    }
  },
  props: [ 'start', 'end', 'end2', 'end3', 'end4' ],
  mounted() {
    //console.log(this.end);
  },

  computed: {
    curvedPath () {
      /*
        FIXME: This formula will work for short distances away from
          the poles. It will not work once the curvature of the earth is
          too great
      */
      if (this.start && this.end) {
        return range(100)
          .map(i => {
            const tick = i / 99
            /* Bezier curve -- set up the control points */
            const dlat = this.end.latLng.lat - this.start.latLng.lat
            const dlng = this.end.latLng.lng - this.start.latLng.lng
            /*const cp1 = {
              lat: this.start.latLng.lat + 0.33 * dlat + 0.33 * dlng,
              lng: this.start.latLng.lng - 0.33 * dlat + 0.33 * dlng,
            }
            const cp2 = {
              lat: this.end.latLng.lat - 0.33 * dlat + 0.33 * dlng,
              lng: this.end.latLng.lng - 0.33 * dlat - 0.33 * dlng,
            }*/

            const cp1 = {
              lat: this.start.latLng.lat,
              lng: this.start.latLng.lng,
            }
            const cp2 = {
              lat: this.end.latLng.lat,
              lng: this.end.latLng.lng,
            }
            const cp3 = {
              lat: this.end2.latLng.lat,
              lng: this.end2.latLng.lng,
            }
            /* Bezier curve formula */
            return {
              lat:
                (tick * tick * tick) * this.start.latLng.lat +
                3 * ((1 - tick) * tick * tick) * cp1.lat +
                3 * ((1 - tick) * (1 - tick) * tick) * cp2.lat +
                ((1 - tick) * (1 - tick) * (1 - tick)) * this.end.latLng.lat,
              lng:
                (tick * tick * tick) * this.start.latLng.lng +
                3 * ((1 - tick) * tick * tick) * cp1.lng +
                3 * ((1 - tick) * (1 - tick) * tick) * cp2.lng +
                ((1 - tick) * (1 - tick) * (1 - tick)) * this.end.latLng.lng,

              /*lat:
                this.start.latLng.lat +
                3 * ((1 - tick) * tick * tick) +
                3 * ((1 - tick) * (1 - tick) * tick) +
                ((1 - tick) * (1 - tick) * (1 - tick)) * this.end.latLng.lat,
              lng:
                this.start.latLng.lng +
                3 * ((1 - tick) * tick * tick) +
                3 * ((1 - tick) * (1 - tick) * tick)  +
                ((1 - tick) * (1 - tick) * (1 - tick)) * this.end.latLng.lng,*/
            }
          })
      }
    }
  },
}
</script>