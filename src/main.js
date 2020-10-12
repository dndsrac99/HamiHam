import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$money = Vue.observable({moneybag: 0,saidyes: false, essays: 0, soldiers:0});
Vue.prototype.$battle= Vue.observable({show: false,})
Vue.prototype.$eventBus = new Vue()
// Vue.prototype.$getmoney = function()
// {
//   return this.$money++;
// }
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')



