<template>
    <section id="contact" class="light">
		<v-container fill-height>
			<v-layout
				fill-height
				align-center
				justify-center
				row
				wrap
				text-xs-center
			>
				<v-flex xs10 ma-3>
					<v-layout row pa-2>
					    <!--Title-->
						<v-flex xs6 class="mx-4">
							<h1 xs class="display-2 py-2">
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

									<v-btn color="primary">submit</v-btn>
									<v-btn color="primary">clear</v-btn>
								</form>
							</h1>
						</v-flex>
						<v-layout column>							
							<v-flex xs6 class="mx-4">
								<contact-location />
							</v-flex>
							<v-flex xs1>	
								<social />
							</v-flex>
						</v-layout>

					</v-layout>
				</v-flex>
			</v-layout>
		</v-container>
	</section>
</template>

<script>

import ContactLocation from '@/components/home/contact/ContactLocation'
import Social from '@/components/home/contact/Social'
export default {
	components: {
		ContactLocation,
		Social,
	}
}
</script>

<style>

</style>
