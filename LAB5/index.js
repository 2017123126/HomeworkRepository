document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("search_button").addEventListener('click', makeRequest);
});

function makeRequest(){
    fetch("product.json")
    .then( response => {
        if (!response.ok) {
          alert(`HTTP error: ${response.status}`);
        }
        alert("Success");
        return response.json();
      })
      .then( response => response.json() )
      .then(processData)
      .catch( err => alert(`Fetch problem: ${err.message}`) );
}

function processData(data){
    //do nothing
}