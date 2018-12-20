<template>
	<v-content>
		<welcome />
		<v-divider class="mx-5 pa-2"></v-divider>
		<projects />
		<contact />
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
