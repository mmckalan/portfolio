<template>
	<v-content>
		<welcome />
		<v-container grid-list-xs >			
			<projects />
			<contact />
		</v-container>
	</v-content>
</template>

<script>

import Welcome from '@/components/home/Welcome'
import Projects from '@/components/home/Projects'
import Contact from '@/components/home/Contact'

export default {
components: {
		Welcome,
		Projects,
		Contact,
	}
}
</script>

<style>

</style>
