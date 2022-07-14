const express = require("express");
const ejs = require("ejs");
const bodyParser = require('body-parser');          // body-parser 요청
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));  // urlencoded    
app.use(bodyParser.json());                         // json 타입으로 파싱하게 설정
app.use(express.static(__dirname + '/'));

app.get("/", function(req, res){
    
    res.render("test", {num : 1});
    
});

app.get("/hello/:num", function(req, res){	// 동적 페이지 부분
    
    res.render("test", {num : req.params.num });	// 페이지로 파라미터 값 넘겨줌
    
});

app.post("/postTest", function(req, res){   // postTest라는 주소로 POST요청이 들어오면 실행
   
    console.log(req.body);      // body에 있는 정보를 콘솔창에 출력.
    res.json({ok:true, name:req.body.name});        // 클라이언트에 성공했다고 신호를 보냄.
    
});

app.listen(3000, function(){
    console.log("실행중..."); 
});
