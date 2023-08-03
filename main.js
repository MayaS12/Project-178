let latitude=22.7868542, longitude=88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';


var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
});   
map.addControl(
    new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true
	})
)


map.addControl(
	new MapboxDirections({
		accessToken: mapboxgl.accessToken
	}),
	'top-left'
);

var img1 = document.querySelector("#amber")

var marker1 = new mapboxgl.Marker({
	element: img1
}).setLngLat([75.85133, 26.98547]).addTo(map)

var img2 = document.querySelector("#gateway")

var marker2 = new mapboxgl.Marker({
	element: img2
}).setLngLat([18.9220, 72.8347]).addTo(map)

var img3 = document.querySelector("#lotus")

var marker3 = new mapboxgl.Marker({
	element: img3
}).setLngLat([28.5535, 77.2588]).addTo(map)