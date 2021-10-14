$(document).ready(function(){
	// Location detail area load map
	function initialize() {
		var myCenter = new google.maps.LatLng(-20.53273129816679, -47.39359849296807);
		var mapProp = {
			center : myCenter,
			zoom : 11,
			mapTypeId : google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
		};
		var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
		var marker = new google.maps.Marker({
			position : myCenter,
			icon : 'images/map_marker.svg'
		});
		marker.setMap(map);
	}
	
	if(document.getElementById('googleMap') != null ){
		google.maps.event.addDomListener(window, 'load', initialize);
	}
	
	// Proprty detail page get direction
	function initAutocomplete() {
	    
	    var directionsService = new google.maps.DirectionsService;
	    var directionsDisplay = new google.maps.DirectionsRenderer;
	    
	    var map = new google.maps.Map(document.getElementById('GoogleMapGetDirections'), {
	        center: {lat: -20.53273129816679, lng: -47.39359849296807},
	        zoom: 10,
	        mapTypeId : google.maps.MapTypeId.ROADMAP,
	        scrollwheel: false,
	        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
	    });
	
	    var marker = new google.maps.Marker({
	        position : {lat: 41.779092486865565, lng: -95.87621874843751},
	        icon : 'images/map_marker.svg'
	    });
	    marker.setMap(map);
	    
	    directionsDisplay.setMap(map);
	
	    var onChangeHandler = function() {
	        calculateAndDisplayRoute(directionsService, directionsDisplay, marker);
	    };
	
	    document.getElementById('GetDirections').addEventListener('click', onChangeHandler);
	
	    autocomplete = new google.maps.places.Autocomplete((document.getElementById('GetDirectionsAddress')),{types: ['geocode']});  
	}
	
	function calculateAndDisplayRoute(directionsService, directionsDisplay, marker) {
	    directionsService.route({
	        origin: "Centro Histórico de São Paulo",
	        destination: document.getElementById('GetDirectionsAddress').value,
	
	        travelMode: google.maps.TravelMode.DRIVING
	        }, function(response, status) {
	        if (status === google.maps.DirectionsStatus.OK) {
	            marker.setVisible(false);
	            directionsDisplay.setDirections(response);
	        } else {
	            window.alert('Directions request failed due to ' + status);
	        }
	    });
	}
	if(document.getElementById('GetDirectionsAddress') != null ){
		google.maps.event.addDomListener(window, 'load', initAutocomplete);
	}
	
	// Property listing map page load map
	function property_listing_map_initialize() {
	    var map;
	    var bounds = new google.maps.LatLngBounds();
	    var mapOptions = {
	        mapTypeId: 'roadmap',
	        scrollwheel: true,
			zoom:100,
			styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
	    };
	                    
	    // Display a map on the page
	    map = new google.maps.Map(document.getElementById("property-listing-map"), mapOptions);
	    map.setTilt(45);
	        
	    // Multiple Markers
	    var markers = [
			['Alameda Arminda Nogueira, Franca - SP', -20.540665254775487, -47.379467627490556],
			['Rua Antônio Figueiredo', -20.539442308157124, -47.40140282850369],
			['Piratininga - Franca, SP', -20.535488429932208, -47.37763570841391],
			['Parque dos Lima Franca - SP', -20.556001430370596, -47.404218880700505],

	    ];
	                        
	    // Info Window Content
	    var infoWindowContent = [
	        ['<div class="property-listing-map-info-window">' +
	            '<div class="image-with-label">' +
	                '<img src="../images/apartamento1.jpg" alt="featured-properties-1" class="img-responsive">' +
	            '</div>' + 
	            '<div class="featured-properties-detail"> ' +
	                '<a style="text-decoration:none;" href="#"><h4>Alameda Arminda Nogueira</h4></a> ' +
	                '<p class="featured-properties-address">Vila Santa Cruz - Franca, SP</p> ' +
	                '<h6>Quartos:2 Tamanhos:50 m²</h6>' +
					'<h6>Preço: R$ 250.000,00</h6>' +
	            '</div>'],
	        ['<div class="property-listing-map-info-window">' +
	            '<div class="image-with-label">' +
	                '<img src="../images/casa1.jpg" alt="featured-properties-1" class="img-responsive">' +
	            '</div>' + 
	            '<div class="featured-properties-detail"> ' +
	                '<a style="text-decoration:none;" href="#"><h4>Rua Antônio Figueiredo</h4></a> ' +
	                '<p class="featured-properties-address">Centro - Franca, SP</p> ' +
	                '<h6>Quartos:2 Tamanhos:72 m²</h6>' +
					'<h6>Preço: R$ 250.000,00</h6>' +
	            '</div>'],
	             ['<div class="property-listing-map-info-window">' +
	            '<div class="image-with-label">' +
	                '<img src="images/casa2.jpg" alt="featured-properties-1" class="img-responsive">' +
	            '</div>' + 
	            '<div class="featured-properties-detail"> ' +
	                '<a style="text-decoration:none;" href="#"><h4>Rua dos anjos</h4></a> ' +
	                '<p class="featured-properties-address">Piratininga - Franca, SP</p> ' +
	                '<h6>Quartos:2 Tamanhos:72 m²</h6>' +
					'<h6>Preço: R$ 250.000,00</h6>' +
	            '</div>'],
				['<div class="property-listing-map-info-window">' +
	            '<div class="image-with-label">' +
	                '<img src="images/casa3.jpg" alt="featured-properties-1" class="img-responsive">' +
	            '</div>' + 
	            '<div class="featured-properties-detail"> ' +
	                '<a style="text-decoration:none;" href="#"><h4>Rua Edna Vasques</h4></a> ' +
	                '<p class="featured-properties-address">Parque dos Lima - Franca, SP</p> ' +
	                '<h6>Quartos:2 Tamanhos:72 m²</h6>' +
					'<h6>Preço: R$ 250.000,00</h6>' +
	            '</div>'],
	    ];
	        
	    // Display multiple markers on a map
	    var infoWindow = new google.maps.InfoWindow({Width: 365,Height: 350}), marker, i;
	    
	    // Loop through our array of markers & place each one on the map  
	    for( i = 0; i < markers.length; i++ ) {
	        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
	        bounds.extend(position);
	        marker = new google.maps.Marker({
	            position: position,
	            map: map,
	            title: markers[i][0],
	            icon : 'images/map_marker.svg'
	        });
	        
	        // Allow each marker to have an info window    
	        google.maps.event.addListener(marker, 'click', (function(marker, i) {
	            return function() {                
	                infoWindow.setContent(infoWindowContent[i][0]);
	                infoWindow.open(map, marker);
	            }
	        })(marker, i));
	
	        // Automatically center the map fitting all markers on the screen
	        map.fitBounds(bounds);
	    }
	
	    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
	    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
	        google.maps.event.removeListener(boundsListener);
	    });
	}
	if(document.getElementById('property-listing-map') != null ){
		google.maps.event.addDomListener(window, 'load', property_listing_map_initialize);
	}	
});