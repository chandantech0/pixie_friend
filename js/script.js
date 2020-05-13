// initialize the map on the "map" div with a given center and zoom
var mymap = L.map('map').setView([0.680839, 24.058990], 9);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=HxSbJ7S4DZ3rRDmvDors', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    // maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [100, 140],
        iconAnchor:   [22, 94],
        popupAnchor:  [-3, -76]
    }
});

var Houses = new LeafIcon({iconUrl: 'images/markers/Houses.svg'}),
Village = new LeafIcon({iconUrl: 'images/markers/Village.svg'}),
ArtGallery = new LeafIcon({iconUrl: 'images/markers/ArtGallery.svg'}),
Castle = new LeafIcon({iconUrl: 'images/markers/Castle.svg'})
// Mountain = new LeafIcon({iconUrl: 'images/markers/Mountain.svg'}),
// Playground = new LeafIcon({iconUrl: 'images/markers/Playground.svg'}),
// Shop = new LeafIcon({iconUrl: 'images/markers/Shop.svg'})

L.marker([0.680839, 24.057859], {icon: Houses}).addTo(mymap).bindPopup("I am a Houses");
L.marker([0.900819, 24.882300], {icon: Village}).addTo(mymap).bindPopup("I am a Village.");
L.marker([0.300819, 24.057300], {icon: ArtGallery}).addTo(mymap).bindPopup("I am a Art Gallery.");
L.marker([0.220819, 24.992300], {icon: Castle}).addTo(mymap).bindPopup("I am a Castle.");
// L.marker([3.500819, 27.052300], {icon: Mountain}).addTo(mymap).bindPopup("I am a Mountain.");


function toggleSidebar() {
    var element = document.getElementById('sidebar-wrapper');
    element.classList.toggle('show-sidebar');
}