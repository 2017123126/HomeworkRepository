document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("search_button").addEventListener('click', makeRequest);
});

function makeRequest(){
    fetch("product.json")
    .then(checkStatus)
    .then(response => response.json())
    .then(processData)
    .catch(function(err){
        alert("fetch problem: " + err.message);
    });
}

function processData(data){
    //do nothing
}