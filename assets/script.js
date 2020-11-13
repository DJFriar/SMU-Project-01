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
    // create an empty div
    var emptyDiv = $("<div>").attr("class", "dataCard");
    // create a card to hold the data returned by the API
    var cardDiv = $("<div>").attr("class", "uk-card uk-card-body");
    // set the card title
    var cardTitle = $("<h3>").attr("class", "uk-card-title");
    // add the new data card to the city row
    cardTitle.text("Air Quality");
    cardDiv.append(cardTitle);
    emptyDiv.append(cardDiv);
    dataGrid.append(emptyDiv);
};