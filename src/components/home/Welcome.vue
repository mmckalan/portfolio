<template>
	<section
		id="welcome"
		class="welcome-banner"
  	>
    <v-layout
      row
      wrap
      class="justify-center"
      text-xs-center
      align-center
    >

      <v-flex
        xs12
        class="pa-2"
      >
        <h1
          :class="{
            'display-1': $vuetify.breakpoint.smAndDown,
            'display-2': $vuetify.breakpoint.mdAndUp,
          }"
          class="ma-4"
        >
            Hello there! <br>
            Alan here
        </h1>
        <h2
          :class="{'display-1 ma-4': $vuetify.breakpoint.mdAndUp}"
        >
			Full-Stack developer obsessed about contribute to society by solving daily problems.<br>
			I dream, eat and breath technology.<br>
        </h2>

					<social />
			

      </v-flex>
      <v-flex xs12>
        
        <v-btn 
          class="white--text"
          color="#75ccac"
          depressed
          large
        >
          <fa-icon 
            :icon="['fas', 'paper-plane']"
            color="white"
            class="mr-2"
          />
          COPY MY E-MAIL
        </v-btn>								
      </v-flex>
    </v-layout>

  </section>
</template>

<script>
import Social from '@/components/home/contact/Social'

export default {
	components: {
		Social,
	}
}
</script>

<style>
</style>
