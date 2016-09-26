var data = [{
    "id": 1,
    "lat": 46.630669,
    "lng": 24.195469,
    "name": "numero 1",
	"address":" str. O strada, nr. 1, in fata blocului"
}, {
    "id": 2,
    "lat": 46.777788,
    "lng": 23.605099,
    "name": "numero 2",
	"address":" str. O strada, nr. 2, in fata blocului"
}, {
    "id": 3,
    "lat": 46.778435,
    "lng": 23.644152,
    "name": "numero 3",
	"address":" str. O strada, nr. 3, in fata blocului"
}, {
    "id": 4,
    "lat": 46.785370,
    "lng": 23.598662,
    "name": "numero 4",
	"address":" str. O strada, nr. 4, in fata blocului"
}, {
    "id": 5,
    "lat": 46.768095,
    "lng": 23.589978,
    "name": "numero 5",
	"address":" str. O strada, nr. 5, in fata blocului"
}, {
    "id": 6,
    "lat": 46.557981,
    "lng": 23.893286,
    "name": "numero 6",
	"address":" str. O strada, nr. 6, in fata blocului"
}, {
    "id": 7,
    "lat": 45.735837,
    "lng": 25.527807,
    "name": "numero 7",
	"address":" str. O strada, nr. 7, in fata blocului"
}, {
    "id": 7,
    "lat": 44.438295,
    "lng": 26.050691,
    "name": "numero 8",
	"address":" str. O strada, nr. 8 in fata blocului"
}, {
    "id": 7,
    "lat": 44.426282,
    "lng": 26.147164,
    "name": "numero 9",
	"address":" str. O strada, nr. 9, in fata blocului"
},

]

var iconPaths = {
    "pin": "images/tent.png",
    "cluster": "images/cluster.png",
};


var mapCanvas = document.getElementById('map');
var center = new google.maps.LatLng(data.lat, data.lng);
var map_options = {
    center: {
        lat: 46.50609,
        lng: 24.93207
    },
    zoom: 7,
    panControl: false,
    zoomControl: true,
    streetViewControl: false,
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROAD,
    disableDefaultUI: false,
    streetViewControl: false,
    styles: [
					{
			        "elementType": "geometry",
			        "stylers": [{
			            "color": "#f5f5f5"
			        }]
			    }, {
			        "elementType": "labels.icon",
			        "stylers": [{
			            "visibility": "off"
			        }]
			    }, {
			        "elementType": "labels.text.fill",
			        "stylers": [{
			            "color": "#616161"
			        }]
			    }, {
			        "elementType": "labels.text.stroke",
			        "stylers": [{
			            "color": "#f5f5f5"
			        }]
			    }, {
			        "featureType": "administrative",
			        "stylers": [{
			            "visibility": "on"
			        }]
			    }, {
			        "featureType": "administrative.land_parcel",
			        "elementType": "labels.text.fill",
			        "stylers": [{
			            "color": "#bdbdbd"
			        }]
			    }, {
			        "featureType": "administrative.province",
			        "stylers": [{
			            "visibility": "on"
			        }]
			    }, {
			        "featureType": "administrative.province",
			        "elementType": "geometry",
			        "stylers": [{
			            "visibility": "on"
			        }]
			    }, {
			        "featureType": "administrative.province",
			        "elementType": "labels",
			        "stylers": [{
			            "visibility": "on"
			        }]
			    }, {
			        "featureType": "poi",
			        "elementType": "geometry",
			        "stylers": [{
			            "color": "#eeeeee"
			        }]
			    }, {
			        "featureType": "poi",
			        "elementType": "labels.text.fill",
			        "stylers": [{
			            "color": "#757575"
			        }]
			    }, {
			        "featureType": "poi.park",
			        "elementType": "geometry",
			        "stylers": [{
			            "color": "#e5e5e5"
			        }]
			    }, {
			        "featureType": "poi.park",
			        "elementType": "labels.text.fill",
			        "stylers": [{
			            "color": "#9e9e9e"
			        }]
			    }, {
			        "featureType": "road",
			        "elementType": "geometry",
			        "stylers": [{
			            "color": "#ffffff"
			        }]
			    }, {
			        "featureType": "road.arterial",
			        "elementType": "labels.text.fill",
			        "stylers": [{
			            "color": "#757575"
			        }]
			    }, {
			        "featureType": "road.highway",
			        "elementType": "geometry",
			        "stylers": [{
			            "color": "#dadada"
			        }]
			    }, {
			        "featureType": "road.highway",
			        "elementType": "labels.text.fill",
			        "stylers": [{
			            "color": "#616161"
			        }]
			    }, {
			        "featureType": "road.local",
			        "elementType": "labels.text.fill",
			        "stylers": [{
			            "color": "#9e9e9e"
			        }]
			    }, {
			        "featureType": "transit.line",
			        "elementType": "geometry",
			        "stylers": [{
			            "color": "#e5e5e5"
			        }]
			    }, {
			        "featureType": "transit.station",
			        "elementType": "geometry",
			        "stylers": [{
			            "color": "#eeeeee"
			        }]
			    }, {
			        "featureType": "water",
			        "elementType": "geometry",
			        "stylers": [{
			            "color": "#c9c9c9"
			        }]
			    }, {
			        "featureType": "water",
			        "elementType": "labels.text.fill",
			        "stylers": [{
			            "color": "#9e9e9e"
			        }]
			    }
			]

};

initMap(mapCanvas, map_options, data, iconPaths);

function initMap(mapCanvas, map_options, data, iconPaths) {
	var infoWindowContent;
    var map = new google.maps.Map(mapCanvas, map_options);
    var markers = [];
    for (var i = 0; i < data.length; ++i) {
        var project = data[i];
        if (!project.lat || !project.lng) {
            continue;
        }
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(project.lat, project.lng),
            map: map,
            title: project.name,
            id: project.id,
            icon: iconPaths.pin,
			address: project.address
        });
		var infoWindow = new google.maps.InfoWindow();

        marker.addListener('mouseover', function(){
			infoWindowContent = "<div class='info-window'><div class='info-window-name'>Descriere: "+ this.title +"</div><div class='info-window-address'>Adresa: "+ this.address + "</div></div>";
			infoWindow.setContent(infoWindowContent);
            infoWindow.open(map, this);
        });
        marker.addListener('mouseout', function(){
           infoWindow.close(map, this);
        });

        markers.push(marker);
    }
    var cluster = new MarkerClusterer(map, markers, {
        styles: [{
            url: iconPaths.cluster,
            backgroundRepeat: 'no-repeat',
            height: 50,
            width: 50,
            textColor: '#fff',
            fontFamily: 'Open Sans',
            textSize: 13
        }]
    });

}
