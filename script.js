mapboxgl.accessToken = 'pk.eyJ1Ijoic29tZXNoLWRlYm5hdGgiLCJhIjoiY2w1cXVqbWU0MTZuMzNpb2V6ZG5vNzBrYiJ9.wRpIfDlydWflqCIrpo3KGQ';

navigator.geolocation.getCurrentPosition(successLocaton, errorLocation,{
    enableHighAccuracy: true,
});


function successLocaton(position) {
    console.log(position);
    setMap([position.coords.longitude,position.coords.latitude])
}
function errorLocation(error) {
    console.log(error);
    setMap([-2.24,53.48])
}

function setMap(center){

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center:center, // starting position [lng, lat]
        zoom: 15, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });
    const nav=new mapboxgl.NavigationControl()
    map.addControl(nav)

var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  unit: 'metric',
  profile: 'mapbox/cycling'
});
map.addControl(directions, 'top-left');
}