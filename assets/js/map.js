function loadSelectedMap() {
    var mapSelection = document.getElementById("map-selection");
    var selectedMap = mapSelection.value;

    var mapContainer = document.getElementById("map-container");
    mapContainer.innerHTML = "";

    var iframe = document.createElement("iframe");
    iframe.src = "https://maddisamba.github.io/socialdata_group24.github.io/assets/plots/maps/" + selectedMap + ".html";
    console.log(iframe.src)
    iframe.style.width = "100%";
    iframe.style.height = "500px";
    mapContainer.appendChild(iframe);
}

document.getElementById("map-selection").addEventListener("change", loadSelectedMap);