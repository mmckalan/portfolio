<template>
	<section id="projects">
		<v-container fill-height>
			<v-layout
				row
				wrap
				text-xs-center
			>
				<v-divider class="ma-4" />
				
				<v-flex xs12> 
					<v-flex 
						xs12 
						class="text-xs-center" 
						px-4 
						py-2
					>
						<span class="display-1">Projects</span>
					</v-flex>
				
					<v-flex 
						xs12 
						class="text-xs-center" 
						px-4 
						py-2
					>
						<span class="title">My skills: HTML5, CSS, PHP, JavaScript, Vue.js, Node.js, Laravel, Linux, SQL, MySQL, Elasticsearch, Git.</span>
					</v-flex>
					
					<v-layout 
						row 
						wrap
					>
						
						<v-flex xs6 md4 pa-4>
							<v-card flat>
								<v-img
									class="white--text"
									height="40vh"
									src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
								>
								<v-container fill-height fluid>
									<v-layout fill-height column>
									<v-flex xs12 class="align-end">
										<span class="headline">{{ project3 }}</span>
									</v-flex>
									<v-layout row wrap justify-center>
										<v-flex xs4>											
											<v-dialog
												v-model="dialog"
												width="500"
											>
												<v-btn
													slot="activator"
													class="white--text"
													color="#75ccac"
													dark
												>
													See More
												</v-btn>
										
												<v-card>
												<v-card-title
													class="headline grey lighten-2"
													primary-title
												>
													{{ project3 }}
												</v-card-title>
										
												<v-card-text>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
												</v-card-text>
										
												<v-divider></v-divider>
										
												<v-card-actions>
													<v-spacer></v-spacer>
													<v-btn
													color="primary"
													flat
													@click="dialog = false"
													>
													I accept
													</v-btn>
												</v-card-actions>
												</v-card>
											</v-dialog>
										</v-flex>
									</v-layout>
									</v-layout>
								</v-container>
								</v-img>
							</v-card>
						</v-flex>

						<v-flex xs6 md4 pa-4>
							<v-card flat>
								<v-img
									class="white--text"
									height="40vh"
									src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
								>
								<v-container fill-height fluid>
									<v-layout fill-height column>
									<v-flex xs12 class="align-end">
										<span class="headline">{{ project2 }}</span>
									</v-flex>
									<v-layout row wrap justify-center>
										<v-flex xs4>											
											<v-dialog
												v-model="dialog"
												width="500"
											>
												<v-btn
													slot="activator"
													class="white--text"
													color="#75ccac"
													dark
												>
													See More
												</v-btn>
										
												<v-card>
												<v-card-title
													class="headline grey lighten-2"
													primary-title
												>
													{{ project2 }}
												</v-card-title>
										
												<v-card-text>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
												</v-card-text>
										
												<v-divider></v-divider>
										
												<v-card-actions>
													<v-spacer></v-spacer>
													<v-btn
													color="primary"
													flat
													@click="dialog = false"
													>
													I accept
													</v-btn>
												</v-card-actions>
												</v-card>
											</v-dialog>
										</v-flex>
									</v-layout>
									</v-layout>
								</v-container>
								</v-img>
							</v-card>
						</v-flex>

						<v-flex xs6 md4 pa-4>
							<v-card flat>
								<v-img
									class="white--text"
									height="40vh"
									src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
								>
								<v-container fill-height fluid>
									<v-layout fill-height column>
									<v-flex xs12 class="align-end">
										<span class="headline">{{ project1 }}</span>
									</v-flex>
									<v-layout row wrap justify-center>
										<v-flex xs4>											
											<v-dialog
												v-model="dialog"
												width="500"
											>
												<v-btn
													slot="activator"
													class="white--text"
													color="#75ccac"
													dark
												>
													See More
												</v-btn>
										
												<v-card>
												<v-card-title
													class="headline grey lighten-2"
													primary-title
												>
													{{ project1 }}
												</v-card-title>
										
												<v-card-text>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
												</v-card-text>
										
												<v-divider></v-divider>
										
													<v-card-actions>
														<v-spacer></v-spacer>
														<v-layout row wrap>														
															<v-btn
																color="primary"
																flat
																@click="dialog = false"
															>
																Github
															</v-btn>
															<v-btn
																color="primary"
																flat
																@click="dialog = false" 
															>
																Live
															</v-btn>
														</v-layout>
													</v-card-actions>
												</v-card>
											</v-dialog>
										</v-flex>
									</v-layout>
									</v-layout>
								</v-container>
								</v-img>
							</v-card>
						</v-flex>

					</v-layout>
					
				</v-flex>
			</v-layout>
		</v-container>
	</section>
</template>

<script>
export default {
	data() {
		return {
			dialog: false,
			project1: 'Weather Application',
			project2: 'Wikipedia Article Finder',
			project3: 'Github Profile Viewer'
		}
	}
}
</script>

<style>

</style>
