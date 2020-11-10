var state = 'TX'; // testing


//var myCities = JSON.parse(uscities);


// Get County based on city input using local json file

// Call to FEMA API
var queryURL = "https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=state%20eq%20%27"+state+"%27";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        console.log(queryURL);

          console.log(response.declarationTitle);
    });


