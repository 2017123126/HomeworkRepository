fetch('product.json')
  .then( response => {
    if (!response.ok) {
      alert(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => initialize(json) )
  .catch( err => alert(`Fetch problem: ${err.message}`) );

