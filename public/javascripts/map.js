console.log("Hola mundo")
let map = L.map('main_map').setView([-12.04591,-77.03047],18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map); 


L.marker([-12.045798,-77.029766]).addTo(map);
L.marker([-12.046708,-77.030415]).addTo(map);
L.marker([-12.046118,-77.031378]).addTo(map);