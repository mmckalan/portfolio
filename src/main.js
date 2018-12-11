import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyBQ5RWZ_1--POjRTpycSsVRvtPCoBAr-lU',
		libraries: 'places', // necessary for places input
	},
  })
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App),
})

