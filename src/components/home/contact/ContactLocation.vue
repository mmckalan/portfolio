<template>
    <div>
    <gmap-map
        :center="center"
        :zoom="14"
        :options="mapOptions"
        style="width:100%;  height: 350px;"
    >
        <gmap-marker
          :position="center"
        ></gmap-marker>
    </gmap-map>
    </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
			mapOptions: {
				minZoom: 12,
				maxZoom: 16,
				streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false
			},
      center: { lat: 41.4065863, lng: 2.1740137 },
    };
  },
};
</script>
