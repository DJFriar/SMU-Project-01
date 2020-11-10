var state = 'TX'; // testing


// County Call local json file

$.getJSON("https://raw.githubusercontent.com/DJFriar/SMU-Project-01/Jose/assets/json/uscities.json", function (data) {

    // Sample data for field mapping
    console.log('county name: '+ data[0].county_name);
    console.log('city name: ' + data[0].city);
    console.log('state: ' + data[0].state_id);
    console.log('state name: ' + data[0].state_name)
})



// Call to FEMA API
var queryURL = "https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=state%20eq%20%27" + state + "%27";

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    console.log(response);
    console.log(queryURL);

    // Sample data for field mapping
    console.log(response.metadata.filter);
    console.log(response.DisasterDeclarationsSummaries[0].declarationDate)
    console.log(response.DisasterDeclarationsSummaries[0].incidentBeginDate)
    console.log(response.DisasterDeclarationsSummaries[0].incidentEndDate)
    console.log(response.DisasterDeclarationsSummaries[0].incidentType)
    console.log(response.DisasterDeclarationsSummaries[0].declarationTitle)
    console.log(response.DisasterDeclarationsSummaries[0].fipsStateCode)
    console.log(response.DisasterDeclarationsSummaries[0].fipsCountyCode)
    console.log(response.DisasterDeclarationsSummaries[0].designatedArea)
});


