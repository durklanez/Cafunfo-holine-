function pegarLocalizacao() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(pos) {
        document.getElementById("localizacao").innerText =
          "Latitude: " + pos.coords.latitude +
          " | Longitude: " + pos.coords.longitude;
      },
      function() {
        alert("Localização negada");
      }
    );
  } else {
    alert("Geolocalização não suportada");
  }
}
