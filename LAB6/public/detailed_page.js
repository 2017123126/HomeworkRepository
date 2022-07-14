//댓글 띄우기
document.addEventListener('DOMContentLoaded', requestComments);

var httpRequest;
function requestComments(){
    httpRequest = new XMLHttpRequest();
    if (!httpRequest){
        alert('Cannot create an XMLHTTP instance');
        return false;
    }

    var product_id = document.querySelector('#product_id').innerText;
    product_id *= 1;
    httpRequest.onreadystatechange = displayResult;
    httpRequest.open("GET", "http://localhost:3000/comments?q=" + product_id);
    httpRequest.send();
}

function displayResult(){
    if (httpRequest.readyState === XMLHttpRequest.DONE){
        if (httpRequest.status === 200){
            result = JSON.parse(httpRequest.responseText);
            var comments_html = '<div class="title"> 댓글 </div>';

            for (i = 0; i<result.comments.length; i++){
                comments_html+=
                `<div> ${result.comments[i].comment}
                </div>`
            }

            document.querySelector('aside').innerHTML = comments_html;
        }
        else{
            alert("there was a problem with the request");
        }
    }
}


//댓글 입력하기
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#comment_button').onclick = commentRegister;
});

var httpRequest2;
function commentRegister(){
    httpRequest2 = new XMLHttpRequest();
    if (!httpRequest){
        alert('Cannot create an XMLHTTP instance');
        return false;
    }
    var new_comment = document.querySelector('#new_comment').value; 
    var product_id = document.querySelector('#product_id').innerText;
    product_id *= 1;
    
    httpRequest2.onreadystatechange = somefunction;
    httpRequest2.open("GET", "http://localhost:3000/addComment?newComment="+new_comment+"&product_id="+product_id);
    httpRequest2.send();
}



function somefunction(){
}