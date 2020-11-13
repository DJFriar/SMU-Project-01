var inputtedCity = "";
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
    $("#cityList").prepend(historyListItem);
};

function buildCity() {
    var cityDiv = $("<div>").attr("class", "uk-child-width-expand@s uk-text-center");
    cityDiv.data("cid",cityIndex);
    cityDiv.text(inputtedCity);
    $("#mainContent").append(cityDiv);
    cityIndex++;
    buildCityCard();
};

function buildCityCard() {
    var emptyDiv = $("<div>");
    var cardDiv = $("<div>").attr("class", "uk-card uk-card-body");
    var cardTitle = $("<h3>").attr("class", "uk-card-title");
    $(cardDiv).append(emptyDiv);
    $(emptyDiv).append(cardDiv);
};