document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#search_button').onclick = pageUpdateByKeyword;
    
    var spanElements = document.querySelectorAll('.title > ul > li > span')
    for (var i = 0; i < spanElements.length; i++){
        spanElements[i].onclick = pageUpdateByCategory;
    }
    
});


var httpRequest;
function pageUpdateByKeyword(){
    httpRequest = new XMLHttpRequest();
    if (!httpRequest){
        alert('Cannot create an XMLHTTP instance');
        return false;
    }
    
    const keyword = document.querySelector('#keyword').value;
    httpRequest.onreadystatechange = displayResult;
    httpRequest.open("GET", "http://localhost:3000/search?q=" + keyword);
    httpRequest.send();
}


function displayResult(){
    if (httpRequest.readyState === XMLHttpRequest.DONE){
       if (httpRequest.status === 200){
           var json_string = JSON.parse(httpRequest.responseText);
           var result = JSON.parse(json_string);
           
           var selling_item_html  = '';
           for (var i = 0; i < result.length; i++){
               selling_item_html += 
               `<div class="selling_item_area"><div class="selling_item">
                    <em>&nbsp;</em>
                        <a href = "http://localhost:3000/product/${result[i].product_id}">
                        <img src="${result[i].product_image}" alt="${result[i].product_name}" class="spin">
                        </a>
                        ${result[i].product_name}
                </div></div>
                `
           }

           document.getElementsByClassName('selling_item_flex_container')[0].innerHTML = selling_item_html;
       }
       else{
           alert("there was a problem with the request");
       }
    }
}


var httpRequest2;
function pageUpdateByCategory() {
    var spanElements = document.querySelectorAll('.title > ul > li > span');
    for (var i = 0; i < spanElements.length; i++){
        spanElements[i].classList.remove("selected");
    }
    this.classList.add("selected");
    
    httpRequest2 = new XMLHttpRequest();
    if (!httpRequest2){
        alert('Cannot create an XMLHTTP instance');
        return false;
    }
    
    var category = this.innerHTML;
    httpRequest2.onreadystatechange = displayItems;
    httpRequest2.open("GET", "http://localhost:3000/category?q=" + this.innerText);
    httpRequest2.send();
    
}

function displayItems(){
    if (httpRequest2.readyState === XMLHttpRequest.DONE){
        if (httpRequest2.status === 200){
            var result = JSON.parse(httpRequest2.responseText);

            var selling_item_html  = '';
           for (var i = 0; i < result.length; i++){
               selling_item_html += 
               `<div class="selling_item_area"><div class="selling_item">
                    <em>&nbsp;</em>
                        <a href = "http://localhost:3000/product/${result[i].product_id}">
                        <img src="${result[i].product_image}" alt="${result[i].product_title}" class="spin">
                        </a>
                        ${result[i].product_title}
                </div></div>
                `
           }

           document.getElementsByClassName('selling_item_flex_container')[0].innerHTML = selling_item_html;

        }else{
            alert("there was a problem with the request");
        }
    }
}