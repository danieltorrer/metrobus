var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
showLeftPush = document.getElementById( 'showLeftPush' ),
body = document.body;
var map ;
var user_latitude;
var user_longitude;
var i = 0;


path = [
[19.033803, -98.26146],
[19.035466, -98.25704],
[19.036156, -98.25180],
[19.036602, -98.24865],
[19.038894, -98.24230],
[19.042221, -98.23732],
[19.043965, -98.23575],
[19.046237, -98.23429],
[19.048955, -98.23195],
[19.050922, -98.22731],
[19.057960, -98.21946],
[19.059380, -98.21835],
[19.056682, -98.21305],
[19.058913, -98.20848],
[19.060455, -98.20554],
[19.062260, -98.20148],
[19.063223, -98.19781],
[19.064156, -98.19452],
[19.064694, -98.19169],
[19.064957, -98.18822],
[19.064744, -98.18348],
[19.064329, -98.17886],
[19.063771, -98.17469],
[19.063375, -98.17160],
[19.062711, -98.16772],
[19.061935, -98.15923],
[19.061023, -98.15402],
[19.060222, -98.14906],
[19.059806, -98.14694],
[19.056906, -98.14169],
[19.056591, -98.13987],
[19.055019, -98.13127],
[19.054596, -98.12781],
[19.054086, -98.12384],
[19.053833, -98.11839],
[19.053863, -98.11482]
]

$(document).ready(function(){

	$(".estacion-item").click(function(){
		var lat = $(this).data('lat')
		var lng = $(this).data('lng')
		centerMap(lat,lng)
	})

	map = new GMaps({
		div: '#pony',
		lat: 19.064795,
		lng: -98.213911,
		zoomControl : true,
		panControl : false
	});

	map.drawPolyline({
		path: path,
		strokeColor: '#131540',
		strokeOpacity: 0.6,
		strokeWeight: 6
	});

	map.addMarker({
		lat: 19.033803,
		lng: -98.261461,
		infoWindow: {
			content: '<p><span>Emiliano Zapata</span></p>'
		},
		title: 'Emiliano Zapata',
	})

	map.addMarker({
		lat: 19.035466,
		lng: -98.257041,
		infoWindow: {
			content: '<p><span>Casa de Ángeles</span></p>'
		},
		title: "",
	})

	map.addMarker({
		lat: 19.036156,
		lng: -98.251805,
		infoWindow: {
			content: '<p><span>Carmen Serdán</span></p>'
		},
		title: ""
	})

	map.addMarker({
		lat: 19.036602,
		lng: -98.248651,
		infoWindow: {
			content: '<p><span>Hospital para el niño poblano</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.038894,
		lng: -98.242300,
		infoWindow: {
			content: '<p><span>Estrellas del sur</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.042221,
		lng: -98.23732,
		infoWindow: {
			content: '<p><span>Las Ánimas</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.043965,
		lng: -98.235755,
		infoWindow: {
			content: '<p><span>25 poniente</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.046237,
		lng: -98.234296,
		infoWindow: {
			content: '<p><span>Matamoros</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.048955,
		lng: -98.231957,
		infoWindow: {
			content: '<p><span>Juarez - Serdán</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.050922,
		lng: -98.227317,
		infoWindow: {
			content: '<p><span>Hermanos Serdán</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.057960,
		lng: -98.219469,
		infoWindow: {
			content: '<p><span>San Alejandro</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.059380,
		lng: -98.218353,
		infoWindow: {
			content: '<p><span>Defensores de la Republica</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.056682,
		lng: -98.213053,
		infoWindow: {
			content: '<p><span>18 Poniente</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.058913,
		lng: -98.208482,
		infoWindow: {
			content: '<p><span>Pestalozzi</span></p>'
		},
		title: ''
	})

	map.addMarker({
		lat: 19.060455,
		lng: -98.205543,
		infoWindow: {
			content: '<p><span>Santa Anita</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.062260,
		lng: -98.201487,
		infoWindow: {
			content: '<p><span>Constitución de 1917 - 11 Norte</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.063223,
		lng: -98.197818,
		infoWindow: {
			content: '<p><span>El rayito</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.064156,
		lng: -98.194524,
		infoWindow: {
			content: '<p><span>China Poblana</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.064694,
		lng: -98.191692,
		infoWindow: {
			content: '<p><span>Los lavaderos</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.064957,
		lng: -98.188226,
		infoWindow: {
			content: '<p><span>Puente Zaragoza</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.064744,
		lng: -98.183484,
		infoWindow: {
			content: '<p><span>Ignacio Zaragoza</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.064329,
		lng: -98.178860,
		infoWindow: {
			content: '<p><span>Los fuertes</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.063771,
		lng: -98.174697,
		infoWindow: {
			content: '<p><span>Tecnologico</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.063375,
		lng: -98.171607,
		infoWindow: {
			content: '<p><span>La Cienega</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.062711,
		lng: -98.167723,
		infoWindow: {
			content: '<p><span>La rosa</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.061935,
		lng: -98.159237,
		infoWindow: {
			content: '<p><span>18 de Noviembre</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.061023,
		lng: -98.154023,
		infoWindow: {
			content: '<p><span>La resurreción</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.060222,
		lng: -98.149066,
		infoWindow: {
			content: '<p><span>Universidad Tecnológica</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.059806,
		lng: -98.146947,
		infoWindow: {
			content: '<p><span>Rivera Anaya</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.056906,
		lng: -98.141695,
		infoWindow: {
			content: '<p><span>Amalucan</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.056591,
		lng: -98.139871,
		infoWindow: {
			content: '<p><span>Bosques</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.055019,
		lng: -98.131278,
		infoWindow: {
			content: '<p><span>Galaxia</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.054596,
		lng: -98.127815,
		infoWindow: {
			content: '<p><span>El pilar</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.054086,
		lng: -98.123842,
		infoWindow: {
			content: '<p><span>Mitlaxac</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.053833,
		lng: -98.118392,
		infoWindow: {
			content: '<p><span>Santa Mago</span></p>'
		},
		title: ''

	})

	map.addMarker({
		lat: 19.053863,
		lng: -98.114820,
		infoWindow: {
			content: '<p><span>Chachapa</span></p>'
		},
		title: ''

	})

	$("#position-button").click(geoFindMe)
})

function geoFindMe() {
	//var output = document.getElementById("out");
	
	if (i == 0) {
		i = 1
		if (!navigator.geolocation){
			alert("Tu dispositivo no soporta geolocalizacion o esta desactiva. Revisa tu configuración", "Aviso")
			return;
		}

		function success(position) {
			user_latitude  = position.coords.latitude;
			user_longitude = position.coords.longitude;

			map.addMarker({
				lat: user_latitude,
				lng: user_longitude,
				title: 'Estas aqui',
				click: function(e) {
					alert('Estas aqui');
				}
			});
		};

		function error() {
			alert ("No podemos determinar tu posición, intentalo mas tarde ");
		};

		//output.innerHTML = "<p>Locating…</p>";
		navigator.geolocation.getCurrentPosition(success, error);
		map.setCenter(user_latitude,user_longitude);
	}


}

function centerMap(lat,longi){
	map.setCenter(lat,longi)
}

function ruta(lat,longi){
	map.travelRoute({
		origin: [ user_latitude, user_longitude ],
		destination: [ lat, long ],
		travelMode: 'walking',
		step: function(e) {
			$("#instructions").removeClass("hide-element")
			$('#instructions').append('<li>'+e.instructions+'</li>');
			$('#instructions li:eq(' + e.step_number + ')').delay(450 * e.step_number).fadeIn(200, function() {
				map.drawPolyline({
					path: e.path,
					strokeColor: '#131540',
					strokeOpacity: 0.6,
					strokeWeight: 6
				});  
			});
		}
	});
}

showLeftPush.onclick = function() {
	$(this).toggleClass('active');
	$(body).toggleClass('cbp-spmenu-push-toright' );
	$(menuLeft).toggleClass( 'cbp-spmenu-open' );
	disableOther( 'showLeftPush' );
};

function disableOther( button ) {
	if( button !== 'showLeftPush' ) {
		$("#showLeftPush").toggleClass('disabled');
	}
}