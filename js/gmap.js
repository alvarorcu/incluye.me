      var map, map1, map2;

function initialize(condition) {
    // create the maps
    var myOptions = {
        zoom: 14,
        center: new google.maps.LatLng(-12.0765916, -77.0398371),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map"), myOptions);

    map1 = new google.maps.Map(document.getElementById("map1"), myOptions);

    map2 = new google.maps.Map(document.getElementById("map2"), myOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
