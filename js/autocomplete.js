var map = new google.maps.Map(document.getElementById('map-single'), { 
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        center: new google.maps.LatLng(-23.541203538173285, -46.63366284184033),
        zoom: 6
     });

     var geocoder = new google.maps.Geocoder();

     function geocode () {
        geocoder.geocode({
           'address': document.getElementById('search').value
        }, 
        function(results, status) {
           if(status == google.maps.GeocoderStatus.OK) {
              new google.maps.Marker({
                 position: results[0].geometry.location,
                 map: map
              });
              map.setCenter(results[0].geometry.location);
           }
        });
     }   