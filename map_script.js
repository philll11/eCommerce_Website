var hawkesBayMap;
/* Initializes Hawkes Bay map */
function initMap() {
    var myLatLng = {lat: -39.640542, lng: 176.846165};
    
    /* Sets the location and aerial zoom level */
    hawkesBayMap = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng, 
        zoom: 17
    });
    
    /* Set location of marker */
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: hawkesBayMap,
        title: 'Sahara Clothing Outlet Hastings'
    });
    
    /* Ties info box to marker and activates when marker is clicked */
    var contentString = '<p><b>Sahara Clothing Outlet Hastings</b></p>' + '<p>The Plaza St Aubyn Street East<br> & Karamu Road<br>Hastings<br>4122<br>New Zealand</p>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener('click', function() {
        infowindow.open(hawkesBayMap, marker);
    });
}