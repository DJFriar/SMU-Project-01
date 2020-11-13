var cityLat = '32.77';
var cityLong = '-96.78';

  // Calling census api , with lay long get county
    var queryCityInfo =  "https://geo.fcc.gov/api/census/area?lat=" + cityLat + "&lon=" + cityLong + "&format=json";

    $.ajax({
        url: queryCityInfo,
        method: 'GET'
    }).then(function (queryCityInfo) {
        console.log(queryCityInfo.results[0].county_name);
        console.log(queryCityInfo.results[0].state_code);
        console.log(queryCityInfo.results[0].state_name);

        var state = queryCityInfo.results[0].state_code;
        var county = queryCityInfo.results[0].county_name;

        // Call to FEMA API
        var queryFemaInfo = "https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=state%20eq%20%27" + state + "%27";

        $.ajax({
            url: queryFemaInfo,
            method: 'GET'
        }).then(function (femaInfo) {
            console.log('fema: ' + queryFemaInfo);

            for (var b in femaInfo.DisasterDeclarationsSummaries) {


                if (femaInfo.DisasterDeclarationsSummaries[b].state === state && femaInfo.DisasterDeclarationsSummaries[b].designatedArea.match(county)
                && femaInfo.DisasterDeclarationsSummaries[b].fyDeclared === 1990) {

                  console.log(femaInfo.DisasterDeclarationsSummaries[b].state)
                    console.log('Designated Area:' + femaInfo.DisasterDeclarationsSummaries[b].designatedArea)
                    console.log('Incident Type:' + femaInfo.DisasterDeclarationsSummaries[b].incidentType)
                    console.log(femaInfo.DisasterDeclarationsSummaries[b].declarationTitle)
                    console.log(femaInfo.DisasterDeclarationsSummaries[b].declarationDate)
                    console.log(femaInfo.DisasterDeclarationsSummaries[b].incidentBeginDate)
                    console.log('Year: ' + femaInfo.DisasterDeclarationsSummaries[b].fyDeclared)

                    $('.1').append('Year: ' + femaInfo.DisasterDeclarationsSummaries[b].fyDeclared);
                    $('.2').append('Incident Type: ' + femaInfo.DisasterDeclarationsSummaries[b].incidentType);
                    $('.3').append('Designated Area: ' + femaInfo.DisasterDeclarationsSummaries[b].designatedArea);

            }

        }

    }); 

});



