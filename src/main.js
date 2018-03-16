import Vue from 'vue'
import App from './App.vue'
import { apolloProvider } from './vue-apollo'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
Vue.config.productionTip = false
Vue.use(Vuetify,{
  theme: {
    primary: colors.indigo.darken2,
    secondary: colors.blueGrey.darken2,
    accent: '#8c9eff',
    error: '#b71c1c'
  }
});
new Vue({
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount('#app')
