var myCenter=new google.maps.LatLng(25.0329562,121.5549477);

// 25.0332738,121.549429

    function initialize()
    {
        var mapProp = {
            center:myCenter,
            scrollwheel: false,
            zoom:17,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        var marker=new google.maps.Marker({
            position:myCenter,
            map: map
        });

        marker.setMap(map);

        var infowindow = new google.maps.InfoWindow({
    				content: "<div><h5>台北市大安區信義路四段415號12樓</h5></div>",
			  });

			  infowindow.open({
		      anchor: marker,
		      map,
		      shouldFocus: false,
		    });
    }
google.maps.event.addDomListener(window, 'load', initialize);


