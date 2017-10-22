function googleMap() {
        var location = {lat: -20.1650583, lng: 57.5016656};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: location
        });

        var content = '<div id="content">'+
            '<h6 id="firstHeading" class="pointerhead">Cim Finance Head Office</h6>'+
            '<div id="pointercontent">'+
            '<p></p>'+
            '</div>'+
            '</div>';

        var infopane = new google.maps.InfoWindow({
          content: content
        });

        var marker = new google.maps.Marker({
          position: location,
          map: map,
          title: 'Cim Finance Head Office'
        });
        marker.addListener('click', function() {
          infopane.open(map, marker);
        });
      }
