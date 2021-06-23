'use strict';

if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
        function(position){
            const {latitude} = position.coords;
            const {longitude} = position.coords;
            // Link to Google Map of user location
            console.log(`https://www.google.com/maps/@${latitude},${longitude}`);


            const coords = [latitude, longitude]

            const map = L.map('map').setView(coords, 10);

            L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker(coords).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
        }, 
        function() {
            alert('Could not get position');
        }
    );