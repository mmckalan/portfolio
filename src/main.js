import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueImg from 'v-img'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitterSquare,
  faFacebookSquare,
  faGooglePlusSquare,
  faYoutubeSquare,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'


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
	iconfont: 'fa'

})
Vue.use(VueImg)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App),
})

Vue.component('fa-icon', FontAwesomeIcon) // Register component globally
library.add(fas) // Include needed icons.
library.add(
  faTwitterSquare,
  faFacebookSquare,
  faGooglePlusSquare,
  faLinkedin,
  faInstagram,
  faYoutubeSquare,
)
