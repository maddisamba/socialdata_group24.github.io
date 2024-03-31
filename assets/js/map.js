var crimeTypes = ['WEAPON LAWS', 'PROSTITUTION', 'DRIVING UNDER THE INFLUENCE', 'ROBBERY', 'BURGLARY', 'ASSAULT', 'DRUNKENNESS', 'DRUG/NARCOTIC', 'TRESPASS', 'LARCENY/THEFT', 'VANDALISM', 'VEHICLE THEFT', 'STOLEN PROPERTY', 'DISORDERLY CONDUCT'];

var dropdown = document.getElementById('crimeType');
for (var i = 0; i < crimeTypes.length; i++) {
    var option = document.createElement('option');
    option.text = crimeTypes[i];
    option.value = crimeTypes[i];
    dropdown.appendChild(option);
}

document.getElementById('crimeType').addEventListener('change', function() {
    var selectedCrimeType = this.value;
    // var newData = getCrimeData(selectedCrimeType);
    // updateMapPlot(newData);
});

// function updateMapPlot(newData) {
//     var plot = document.getElementById('map-visualization');
//     Plotly.react(plot, newData, layout);
// }

// function getCrimeData(crimeType) {
//     if (crimeType === 'WEAPON LAWS') {
//         return weaponLawsData;
//     } else if (crimeType === 'PROSTITUTION') {
//         return prostitutionData;
//     }
// }

// var layout = {
//     title: 'San Francisco Crime Map',
//     mapbox: {
//         style: 'carto-positron',
//         center: { lat: 37.7749, lon: -122.4194 },
//         zoom: 10
//     }
// };
// var weaponLawsData = {
// };

// var prostitutionData = {
// };

// updateMapPlot(getCrimeData('WEAPON LAWS'));