import moment from 'moment'
import Vue from 'vue'

/*show date years */
Vue.filter('timeformat',(arg)=>{
    return moment(arg).format("MMM Do YYYY")
});

/*short length string*/
Vue.filter('sortlength',function (text,length,suffix) {
    return text.substring(0,length)+suffix;
});

/*show date years */
Vue.filter('firstUppercase', (value) => {
    if (!value) return ''
    return value.charAt(0).toUpperCase() + value.slice(1)
});

/* Add , in Amount */
Vue.filter('numberWithCommas',(value)=>{
    if(!value) return ''
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

// CapitalizeString Ititnerary title
Vue.filter('CapitalizeString',(s)=>{
    if (typeof s !== 'string') return ''
    let value = s.replace(/[-]/g, " ");
    value = value.replace(/\s(?=\s)/g, "");
    return value.toLowerCase().split(' - ').map(function (word) {
        return word;
    }).join(' ');
});



