//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//Google maps
 
      function init_map() {
        var var_location = new google.maps.LatLng(-36.851597,174.765117);
 
        var var_mapoptions = {
          center: var_location,
          zoom: 15
        };
 
        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title:"Academy-Cinemas"});
 
        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);
 
        var_marker.setMap(var_map);    
 
      }
 
      google.maps.event.addDomListener(window, 'load', init_map);

