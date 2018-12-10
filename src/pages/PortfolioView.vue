<template>
	<v-content>
		<welcome />
		<social />
		<projects />
		<contact />
	</v-content>
</template>

<script>

import Welcome from '@/components/home/Welcome'
import Social from'@/components/home/Social'
import Projects from '@/components/home/Projects'
import Contact from '@/components/home/Contact'

export default {
components: {
		Welcome,
		Projects,
		Contact,
		Social
	}
}
</script>

<style>

</style>
