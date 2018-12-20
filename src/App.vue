<template>
	<v-app id="inspire">
	<v-toolbar
		flat
		color="white"
	>
		<v-toolbar-title class="caption">Alan Mac Cormack - Portfolio</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn
			v-for="item in menu"
			:key="item.icon"
			:to="item.link"
			flat
			class="caption"
		>{{ item.title }}</v-btn>
		</v-toolbar-items>
		<v-menu class="hidden-md-and-up">
		<v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
		<v-list>
			<v-list-tile v-for="item in menu" :key="item.icon">
			<v-list-tile-content>
				<v-list-tile-title>{{ item.title }}</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>   
		</v-list>
		</v-menu>
	</v-toolbar>
	<router-view></router-view>
	</v-app>
</template>

<script>
import '@/assets/stylus/main.styl'

export default {
  data () {
    return {
      menu: [
        { icon: 'home', title: 'Home' },
        { icon: 'info', title: 'About' },
        { icon: 'warning', title: 'Projects' },
        { icon: 'warning', title: 'Contact me' }
      ]
    }
  },
  
  methods: {
    menuItems () {
      return this.menu
    }
  }
}
</script>
