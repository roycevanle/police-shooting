// Function to draw your map
var drawMap = function() {
  	// Create map and set view
	var map = L.map('map').setView([36, -100], 4, 0);
	// create vars to make map look pretty
	var mapColor = "mapbox.dark";
	var mapboxToken = 'pk.eyJ1Ijoicm95Y2V2YW5sZSIsImEiOiJjaWZ5cnFlcDI1YnVxdHRseTgzZWhxNmZwIn0.XxDZj0hFumbpRN0O6pWF0g';
  	// Create a tile layer variable using the appropriate url
	var layer = L.tileLayer('https://api.tiles.mapbox.com/v4/'+mapColor+'/{z}/{x}/{y}.png?access_token='+mapboxToken);
  	// Add the layer to your map
 	layer.addTo(map);
 	// Execute your function to get data
  	getData(map);
}

// Function for getting data
var getData = function(map) {
  	// Execute an AJAX request to get the data in data/response.js
  	var data;
	$.ajax({
		url:'./data/response.json',
	  	dataType: "json",
	// When your request is successful, call your customBuild function
	    success:function(dat) {
	    	data = dat;	 
	    	customBuild(data, map);
	    }, 
	});
}

// Custom builds my map
var customBuild = function(data, map) {
	// Creates new layers
	var dWhite = new L.LayerGroup();
	var dBlack = new L.LayerGroup();
	var dAsian = new L.LayerGroup();
	var dPacific = new L.LayerGroup();
	var dIndianNative = new L.LayerGroup();
	var dHawaiianPacific = new L.LayerGroup();
	var dUnknown = new L.LayerGroup();

	// Creates new variables (killed) for tabulation
	var WhiteKilled = 0;
	var BlackKilled = 0;
	var AsianKilled = 0;
	var PacificKilled = 0;
	var IndianNativeKilled = 0;
	var HawaiianPacificKilled = 0;
	var UnknownKilled = 0;

	// Creates new variables (hit) for tabulation
	var Whitehit = 0;
	var Blackhit = 0;
	var Asianhit = 0;
	var Pacifichit = 0;
	var IndianNativehit = 0;
	var HawaiianPacifichit = 0;
	var Unknownhit = 0;


	// Loop through your data and add the appropriate layers and points
	for (var key in data) {
		if (data.hasOwnProperty(key)) {
			// Marks "Killed" data
			if (data[key]["Hit or Killed?"] == "Killed") {
				// Unkown population
				if (data[key].Race == "Unknown") {
					UnknownKilled++;
					L.circleMarker([data[key].lat, data[key].lng], 
						{fillColor: 'blue', fillOpacity: 0.5, stroke: 0})
					.bindPopup(
						"<b>Name: </b>" + data[key]["Victim Name"] + "<br>" + 
						"<b>Age: </b>" + data[key]["Victim's Age"] + "<br>" + 
						"<b>Race: </b>" + data[key].Race + "<br>" + 
						"<b>Hit or Killed: </b>" + data[key]["Hit or Killed?"] + "<br>" +
						"<b>City & State: </b>" + data[key].City + ", " + data[key].State + "<br>" +
						"<b>Summary: </b><i>" + data[key].Summary +
						"</i><br><a href='" + data[key]["Source Link"] + "' target='_blank'>Source</a>").addTo(dUnknown);
				// White population
				} else if (data[key].Race == "White") {
					WhiteKilled++;
					L.circleMarker([data[key].lat, data[key].lng], 
						{fillColor: 'blue', fillOpacity: 0.5, stroke: 0})
					.bindPopup(
						"<b>Name: </b>" + data[key]["Victim Name"] + "<br>" + 
						"<b>Age: </b>" + data[key]["Victim's Age"] + "<br>" + 
						"<b>Race: </b>" + data[key].Race + "<br>" + 
						"<b>Hit or Killed: </b>" + data[key]["Hit or Killed?"] + "<br>" +
						"<b>City & State: </b>" + data[key].City + ", " + data[key].State + "<br>" +
						"<b>Summary: </b><i>" + data[key].Summary +
						"</i><br><a href='" + data[key]["Source Link"] + "' target='_blank'>Source</a>").addTo(dWhite);
				// Black or African American population
				} else if (data[key].Race == "Black or African American") {
					BlackKilled++;
					L.circleMarker([data[key].lat, data[key].lng],
						{fillColor: 'blue', fillOpacity: 0.5, stroke: 0})
					.bindPopup(
						"<b>Name: </b>" + data[key]["Victim Name"] + "<br>" + 
						"<b>Age: </b>" + data[key]["Victim's Age"] + "<br>" + 
						"<b>Race: </b>" + data[key].Race + "<br>" + 
						"<b>Hit or Killed: </b>" + data[key]["Hit or Killed?"] + "<br>" +
						"<b>City & State: </b>" + data[key].City + ", " + data[key].State + "<br>" +
						"<b>Summary: </b><i>" + data[key].Summary +
						"</i><br><a href='" + data[key]["Source Link"] + "' target='_blank'>Source</a>").addTo(dBlack);	
				// Asian population
				} else if (data[key].Race == "Asian") {
					AsianKilled++;
					L.circleMarker([data[key].lat, data[key].lng], 
						{fillColor: 'blue', fillOpacity: 0.5, stroke: 0})
					.bindPopup(
						"<b>Name: </b>" + data[key]["Victim Name"] + "<br>" + 
						"<b>Age: </b>" + data[key]["Victim's Age"] + "<br>" + 
						"<b>Race: </b>" + data[key].Race + "<br>" + 
						"<b>Hit or Killed: </b>" + data[key]["Hit or Killed?"] + "<br>" +
						"<b>City & State: </b>" + data[key].City + ", " + data[key].State + "<br>" +
						"<b>Summary: </b><i>" + data[key].Summary +
						"</i><br><a href='" + data[key]["Source Link"] + "' target='_blank'>Source</a>").addTo(dAsian);	
				// American Indian or Alaska Native population
				} else if (data[key].Race == "American Indian or Alaska Native") {
					IndianNativeKilled++;
					L.circleMarker([data[key].lat, data[key].lng], 
						{fillColor: 'blue', fillOpacity: 0.5, stroke: 0})
					.bindPopup(
						"<b>Name: </b>" + data[key]["Victim Name"] + "<br>" + 
						"<b>Age: </b>" + data[key]["Victim's Age"] + "<br>" + 
						"<b>Race: </b>" + data[key].Race + "<br>" + 
						"<b>Hit or Killed: </b>" + data[key]["Hit or Killed?"] + "<br>" +
						"<b>City & State: </b>" + data[key].City + ", " + data[key].State + "<br>" +
						"<b>Summary: </b><i>" + data[key].Summary +
						"</i><br><a href='" + data[key]["Source Link"] + "' target='_blank'>Source</a>").addTo(dIndianNative);	
				// Native Hawaiian or Other Pacific Islander population
				} else if (data[key].Race == "Native Hawaiian or Other Pacific Islander") {
					HawaiianPacificKilled++;
					L.circleMarker([data[key].lat, data[key].lng], 
						{fillColor: 'blue', fillOpacity: 0.5, stroke: 0})
					.bindPopup(
						"<b>Name: </b>" + data[key]["Victim Name"] + "<br>" + 
						"<b>Age: </b>" + data[key]["Victim's Age"] + "<br>" + 
						"<b>Race: </b>" + data[key].Race + "<br>" + 
						"<b>Hit or Killed: </b>" + data[key]["Hit or Killed?"] + "<br>" +
						"<b>City & State: </b>" + data[key].City + ", " + data[key].State + "<br>" +
						"<b>Summary: </b><i>" + data[key].Summary +
						"</i><br><a href='" + data[key]["Source Link"] + "' target='_blank'>Source</a>").addTo(dHawaiianPacific);
				}
			}
			// Marks "Hit" data
			if (data[key]["Hit or Killed?"] == "Hit") {
				// Unkown population
				if (data[key].Race == "Unknown") {
					Unknownhit++;
					L.circleMarker([data[key].lat, data[key].lng], 
						{fillColor: 'grey', fillOpacity: 0.3, stroke: 0})
					.bindPopup(
						"<b>Name: </b>" + data[key]["Victim Name"] + "<br>" + 
						"<b>Age: </b>" + data[key]["Victim's Age"] + "<br>" + 
						"<b>Race: </b>" + data[key].Race + "<br>" + 
						"<b>Hit or Killed: </b>" + data[key]["Hit or Killed?"] + "<br>" +
						"<b>City & State: </b>" + data[key].City + ", " + data[key].State + "<br>" +
						"<b>Summary: </b><i>" + data[key].Summary +
						"</i><br><a href='" + data[key]["Source Link"] + "' target='_blank'>Source</a>").addTo(dUnknown);
				// White population	
				} else if (data[key].Race == "White") {
					Whitehit++;
					L.circleMarker([data[key].lat, data[key].lng], 
						{fillColor: 'grey', fillOpacity: 0.3, stroke: 0})
					.bindPopup(
						"<b>Name: </b>" + data[key]["Victim Name"] + "<br>" + 
						"<b>Age: </b>" + data[key]["Victim's Age"] + "<br>" + 
						"<b>Race: </b>" + data[key].Race + "<br>" + 
						"<b>Hit or Killed: </b>" + data[key]["Hit or Killed?"] + "<br>" +
						"<b>City & State: </b>" + data[key].City + ", " + data[key].State + "<br>" +
						"<b>Summary: </b><i>" + data[key].Summary +
						"</i><br><a href='" + data[key]["Source Link"] + "' target='_blank'>Source</a>").addTo(dWhite);
				// Black or African American population	
				} else if (data[key].Race == "Black or African American") {
					Blackhit++;
					L.circleMarker([data[key].lat, data[key].lng], 
						{fillColor: 'grey', fillOpacity: 0.3, stroke: 0})
					.bindPopup(
						"<b>Name: </b>" + data[key]["Victim Name"] + "<br>" + 
						"<b>Age: </b>" + data[key]["Victim's Age"] + "<br>" + 
						"<b>Race: </b>" + data[key].Race + "<br>" + 
						"<b>Hit or Killed: </b>" + data[key]["Hit or Killed?"] + "<br>" +
						"<b>City & State: </b>" + data[key].City + ", " + data[key].State + "<br>" +
						"<b>Summary: </b><i>" + data[key].Summary +
						"</i><br><a href='" + data[key]["Source Link"] + "' target='_blank'>Source</a>").addTo(dBlack);
				// Asian population	
				} else if (data[key].Race == "Asian") {
					Asianhit++;
					L.circleMarker([data[key].lat, data[key].lng], 
						{fillColor: 'grey', fillOpacity: 0.3, stroke: 0})
					.bindPopup(
						"<b>Name: </b>" + data[key]["Victim Name"] + "<br>" + 
						"<b>Age: </b>" + data[key]["Victim's Age"] + "<br>" + 
						"<b>Race: </b>" + data[key].Race + "<br>" + 
						"<b>Hit or Killed: </b>" + data[key]["Hit or Killed?"] + "<br>" +
						"<b>City & State: </b>" + data[key].City + ", " + data[key].State + "<br>" +
						"<b>Summary: </b><i>" + data[key].Summary +
						"</i><br><a href='" + data[key]["Source Link"] + "' target='_blank'>Source</a>").addTo(dAsian);	
				// American Indian or Alaska Native population
				} else if (data[key].Race == "American Indian or Alaska Native") {
					IndianNativehit++;
					L.circleMarker([data[key].lat, data[key].lng], 
						{fillColor: 'grey', fillOpacity: 0.3, stroke: 0})
					.bindPopup(
						"<b>Name: </b>" + data[key]["Victim Name"] + "<br>" + 
						"<b>Age: </b>" + data[key]["Victim's Age"] + "<br>" + 
						"<b>Race: </b>" + data[key].Race + "<br>" + 
						"<b>Hit or Killed: </b>" + data[key]["Hit or Killed?"] + "<br>" +
						"<b>City & State: </b>" + data[key].City + ", " + data[key].State + "<br>" +
						"<b>Summary: </b><i>" + data[key].Summary +
						"</i><br><a href='" + data[key]["Source Link"] + "' target='_blank'>Source</a>").addTo(dIndianNative);	
				// Native Hawaiian or Other Pacific Islander population
				} else if (data[key].Race == "Native Hawaiian or Other Pacific Islander") {
					HawaiianPacifichit++;
					L.circleMarker([data[key].lat, data[key].lng], 
						{fillColor: 'grey', fillOpacity: 0.3, stroke: 0})
					.bindPopup(
						"<b>Name: </b>" + data[key]["Victim Name"] + "<br>" + 
						"<b>Age: </b>" + data[key]["Victim's Age"] + "<br>" + 
						"<b>Race: </b>" + data[key].Race + "<br>" + 
						"<b>Hit or Killed: </b>" + data[key]["Hit or Killed?"] + "<br>" +
						"<b>City & State: </b>" + data[key].City + ", " + data[key].State + "<br>" +
						"<b>Summary: </b><i>" + data[key].Summary +
						"</i><br><a href='" + data[key]["Source Link"] + "' target='_blank'>Source</a>").addTo(dHawaiianPacific);	
				}
			}
		}
	}

	// Once layers are on the map, add a leaflet controller that shows/hides layers
	var overlayMaps = {
		"White population": dWhite,
		"Asian population": dAsian,
		"Unknown population": dUnknown,
		"Black or African American population": dBlack,
		"American Indian or Alaska Native population": dIndianNative,
		"Native Hawaiian or Other Pacific Islander population": dHawaiianPacific
	};

	// Creates a table with tabulations of #killed and #hit of different races
	var table = document.getElementById("table");
	var column = document.getElementById("table");
	for (i = 0; i < 8; i++) {
		$("#table").append("<tr id=" + "\"tr" + i + "\"" + ">" + "</tr>");
		$("#tr" + i).append("<div " + "class=\"col-xs-4\" id=\"" + "col" + i + "\"" + "></div>");
		$("#tr" + i).append("<div " + "class=\"col-xs-4\" id=\"" + "coll" + i + "\"" + "></div>");

	}
	
	//Manually insert and populate cells
    $("#col0").append("<h3>Data</h3>");
    $("#col1").append("White");
    $("#col2").append("Asian");
    $("#col3").append("Unkown");
    $("#col4").append("Black or African American");
    $("#col5").append("American Indian or Alska Native");
    $("#col6").append("Native Hawaiian or Other Pacific Islander");

    $("#tr0").append("<h3>Hit</h3>");
    $("#tr1").append(Whitehit);
    $("#tr2").append(Asianhit);
    $("#tr3").append(Unknownhit);
    $("#tr4").append(Blackhit);
    $("#tr5").append(IndianNativehit);
    $("#tr6").append(HawaiianPacifichit);


    $("#coll0").append("<h3>Killed</h3>");
    $("#coll1").append(WhiteKilled);
    $("#coll2").append(AsianKilled);
    $("#coll3").append(UnknownKilled);
    $("#coll4").append(BlackKilled);
    $("#coll5").append(IndianNativeKilled);
    $("#coll6").append(HawaiianPacificKilled);

	// Be sure to add each layer to the map
	L.control.layers(null, overlayMaps).addTo(map);
}


