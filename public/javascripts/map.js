let map = L.map('main_map').setView([-12.04591,-77.03047],18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map); 

// L.marker([-12.045798,-77.029766]).addTo(map);
// L.marker([-12.046708,-77.030415]).addTo(map);
// L.marker([-12.046118,-77.031378]).addTo(map);

/*
$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success:function(result){
        console.log(result);
        result.bicicletas.forEach( function(bici){
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        })
    }
})*/

const fetchApi = async() => {
    try{
        const resp = await fetch("api/bicicletas");
        const data = await resp.json();
        data.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        })
    }catch(error){
        console.log(error)
    }
    
}

fetchApi();