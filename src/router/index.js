import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const PortfolioView = () => import("@/pages/PortfolioView")

export default new Router({
	routes: [
		{
			path: "/",
			component: PortfolioView
    }
  ]
})
