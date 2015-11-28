/*var map, map1, map2;*/
//function initialize() {
  //      var mapCanvas = document.getElementById('map');
    //    var mapOptions = {
      //    center: new google.maps.LatLng(44.5403, -78.5463),
        //  zoom: 8,
          //mapTypeId: google.maps.MapTypeId.ROADMAP
        //}

        //var map = new google.maps.Map(mapCanvas, mapOptions)
        /*map = new google.maps.Map(document.getElementById("map"), myOptions);
        map1 = new google.maps.Map(document.getElementById("map1"), myOptions);
        map2 = new google.maps.Map(document.getElementById("map2"), myOptions);*/
      //}
      //google.maps.event.addDomListener(window, 'load', initialize);




      var map, map1, map2;

function initialize(condition) {
    // create the maps
    var myOptions = {
        zoom: 14,
        center: new google.maps.LatLng(0.0, 0.0),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map"), myOptions);

    map1 = new google.maps.Map(document.getElementById("map1"), myOptions);

    map2 = new google.maps.Map(document.getElementById("map2"), myOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
