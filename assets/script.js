var inputtedCity = "";
var lat = "";
var long = "";
var cityIndex = 0;

// Handle Search Button
$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    // capture the user's input
    var rawInputtedCity = $("#searchField").val();
    // make everything title case and pretty
    inputtedCity = rawInputtedCity.toLowerCase().replace(/\b[a-z]/g, function(txtVal) {
        return txtVal.toUpperCase();
    });
    // add city to the search history
    logCityToHistoryArea();
    // fetch the weather data
    buildCity();
});

function logCityToHistoryArea() {
    var historyListItem = $("<li>").attr("class","list-group-item");
    historyListItem.text(inputtedCity);
    $("#cityList").append(historyListItem);
};

function buildCity() {
    // create the section for each city
    var cityDiv = $("<div>").attr("class", "uk-child-width-expand@s uk-text-center");
    var dataGrid = $("<div uk-grid>").attr("class", "uk-child-width-expand@s uk-text-center");
    cityDiv.text(inputtedCity);
    cityDiv.append(dataGrid);
    // add the new city section to the main content area
    $("#mainContent").append(cityDiv);
    // add the first data card to the city row
    buildWeatherCard(dataGrid);
};

function buildWeatherCard(dataGrid) {
    // create an empty div and add it to the city row
    var emptyDiv = $("<div>").attr("class", "dataCard");
    // create a card to hold the data returned by the API
    var cardDiv = $("<div>").attr("class", "uk-card uk-card-body");
    // set the card title
    var cardTitle = $("<h3>").attr("class", "uk-card-title");
    // add the new data card to the city row
    cardTitle.text("Weather");
    cardDiv.append(cardTitle);
    emptyDiv.append(cardDiv);
    dataGrid.append(emptyDiv);
    // call next function
    buildFEMACard(dataGrid);
};

function buildFEMACard(dataGrid) {
    // create an empty div and add it to the city row
    var emptyDiv = $("<div>").attr("class", "dataCard");
    // create a card to hold the data returned by the API
    var cardDiv = $("<div>").attr("class", "uk-card uk-card-body");
    // set the card title
    var cardTitle = $("<h3>").attr("class", "uk-card-title");
    // add the new data card to the city row
    cardTitle.text("FEMA");
    cardDiv.append(cardTitle);
    emptyDiv.append(cardDiv);
    dataGrid.append(emptyDiv);
    // call next function
    buildAQICard(dataGrid);
};

function buildAQICard(dataGrid) {
    var queryAQ = "http://api.airvisual.com/v2/nearest_city?lat=" + lat + "&lon=" + long + "&key=63323cdc-630f-4452-800d-08e31dcbc6e1";

    $.ajax({
        url: queryAQ,
        method: "GET"
    }).then(function(AQinfo) {
        var AQ = (AQinfo.data.current.pollution.aquis);
        var Rating;
        if (AQ < 50) {
            Rating = "Good";
        }else if (AQ > 50 && AQ < 100) {
            Rating = "Moderate";
        }else if (AQ > 100 && AQ < 150) {
            Rating = "Unhealthy for sensitive groups";
        }else if (AQ > 150 && AQ < 200) {
            Rating = "Unhealthy";
        }else {
            Rating = "Very Unhealthy";
        }
            
    // create an empty div
    var emptyDiv = $("<div>").attr("class", "dataCard");
    // create a card to hold the data returned by the API
    var cardDiv = $("<div>").attr("class", "uk-card uk-card-body");
    // set the card title
    var cardTitle = $("<h3>").attr("class", "uk-card-title");
    // add the new data card to the city row
    cardTitle.text("Air Quality");
    cardDiv.append('<ul style="list-style-type:none;text-align: left;"><li> AQ Level: ' + AQ + '</li><li> Rating: ' + Rating + '</li></ul>');
    emptyDiv.append(cardDiv);
    dataGrid.append(emptyDiv);
    })
}