var state = '';
var city = 'Little Elm';
var county = '';

// County Call local json file

$.getJSON("https://raw.githubusercontent.com/DJFriar/SMU-Project-01/Jose/assets/json/uscities.json", function (data) {

    // **** DON'T DELETE - Sample data for field mapping  
    //      console.log('county name: '+ data[0].county_name);
    //      console.log('city name: ' + data[0].city);
    //      console.log('state: ' + data[0].state_id);
    //      console.log('state name: ' + data[0].state_name)

    for (var i in data) {
        if (data[i].city === city) {
            // console.log('county name: ' + data[i].county_name);
            // console.log('city name: ' + data[i].city);
            // console.log('state: ' + data[i].state_id);
            // console.log('state name: ' + data[i].state_name)
            state = data[i].state_id;
            county = data[i].county_name;
        }
    }

    // Call to FEMA API
    var queryURL = "https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=state%20eq%20%27" + state + "%27";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        console.log(queryURL);

        for (var i in response) {

            // Sample data for field mapping
            console.log(response.metadata.filter);
            console.log(response.DisasterDeclarationsSummaries[i].declarationDate)
            console.log(response.DisasterDeclarationsSummaries[i].incidentBeginDate)
            console.log(response.DisasterDeclarationsSummaries[i].incidentEndDate)
            console.log(response.DisasterDeclarationsSummaries[i].incidentType)
            console.log(response.DisasterDeclarationsSummaries[i].declarationTitle)
            console.log(response.DisasterDeclarationsSummaries[i].fipsStateCode)
            console.log(response.DisasterDeclarationsSummaries[i].fipsCountyCode)
            console.log(response.DisasterDeclarationsSummaries[i].designatedArea)

        }


    });

});
