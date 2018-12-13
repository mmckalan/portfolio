import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(Vuetify)


Vue.use(Vuetify, {
	iconfont: 'fa'
   })
   
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyBQ5RWZ_1--POjRTpycSsVRvtPCoBAr-lU',
		libraries: 'places', // necessary for places input
	},
})
  
Vue.use(Vuetify, {
	theme: {
		primary: '#75ccac',
	},
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App),
})
