$.fn.tooltip.Constructor.VERSION // => "4.0.0"

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -27.0285169, lng: -48.6641287 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }