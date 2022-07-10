(() => {
    fetch('https://ffxivcollect.com/api/mounts?limit=10')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            // console.log(data);
            let myHTMLOutput = "";

            myHTMLOutput += "<table>"; // ST

            for (let i = 0; i < 5; i++) {

                myHTMLOutput += "<tr>";
                myHTMLOutput += "<td>" + data.results[i].id;  + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].name + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].description + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].enhanced_description + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].tooltip + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].movement + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].seats + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].order + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].order_group + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].patch + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].item_id + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].owned + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].image + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].icon + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].sources[0].type + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].sources[0].text + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].sources[0].related_type + "</td>"; // ST
                myHTMLOutput += "<td>" + data.results[i].sources[0].related_id + "</td>"; // ST
                myHTMLOutput += "</tr>";
            }
            myHTMLOutput += "</table>"; // ST
    
            document.querySelector("#myData").innerHTML = myHTMLOutput; // ST
        });
        

    
})();