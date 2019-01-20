<template>
    <section id="contact" class="dark-background">
		<v-container fill-height>
			<v-layout
				row
				wrap
			>
				<v-divider class="ma-4"></v-divider>
				<v-flex xs12 class="text-xs-center">

					<v-flex xs12  px-4 py-2>
						<span class="display-1">Contact me</span>
					</v-flex>
				
					<v-flex xs12 px-4 py-2>
						<span class="title">You can throw me an e-mail or follow me on my social networks</span>
					</v-flex>

					<v-layout row pa-2 class="justify-center">
						<v-flex xs6 class="mx-4">
							<v-flex>	
								<social />
							</v-flex>
								<form>
									<v-text-field
										label="Name"
										required
									></v-text-field>
									<v-text-field
										label="E-mail"
										required
									></v-text-field>
									<v-text-field
										label="Subject"
									></v-text-field>
									<v-textarea
										label="Message"
										no-resize
									></v-textarea>

									<v-btn color="success" large class="px-3"><v-icon small class="mr-2">fa-paper-plane</v-icon> submit</v-btn>
									<v-btn color="error" large class="px-3"><v-icon small class="mr-2">fa-trash-alt</v-icon>clear</v-btn>
								</form>
						</v-flex>


					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>
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
