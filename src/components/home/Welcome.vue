<template>
    <section id="welcome" light>
		<v-container fill-height>
			<v-layout
				fill-height
				align-start
				row
				wrap
				justify-center
			>
				<v-flex xs12>
					<v-layout row wrap class="justify-center align-center">						
							<!--Title-->
							<v-flex xs12 lg6 text-xs-left mx-5>
								<h1 class="display-1">
									Hello there.
								</h1>
								<h1 class="display-1">
									Alan here.
								</h1>
								<h2 class="body-1">
									I'm a Full-Stack developer.<br>
									Obsessed about contribute to society by solving problems, I dream, eat and breath technology.<br>
									My skills: HTML5, CSS, PHP, JavaScript, Vue.js, Node.js, Laravel, Linux, SQL, MySQL, Elasticsearch, Git.
								</h2>
								<v-flex xs12 py-4>
									<v-btn 
										class="ma-0 white--text"
										color="#75ccac"
										depressed
									>
										GET IN TOUCH
									</v-btn>								
								</v-flex>
							</v-flex>

							<!--SubTitle-->
							<v-flex xs12 sm5 md4 lg4>
									<img 
										src="https://goo.gl/cYMgW4" 
										alt="avatar"
										width="100%"
										>
							</v-flex>

					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>
	</section>
</template>

<script>
export default {

}
</script>

<style>

</style>
