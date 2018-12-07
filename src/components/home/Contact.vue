<template>
    <section id="contact">
		<v-container fill-height>
			<v-layout
				fill-height
				align-center
				justify-center
				row
				wrap
				text-xs-center
			>
				<v-flex xs6>
					<v-layout column wrap>
					    <!--Title-->
						<v-flex xs6>
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
