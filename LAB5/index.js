var httpRequest;

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("search_button").addEventListener('click', makeRequest);
});


function makeRequest(){
    fetch('product.json')
    .then(response => {
        return response.json();
    })
    .catch(function(err){
        alert("Fetch problem: " + err.message);
    });
}

function processData(){
    //do nothing
}
