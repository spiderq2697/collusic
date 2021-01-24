const express = require("express");
const app = express();
const fs = require("fs");
var bodyParser = require("body-parser");
var mysql = require("./mysql");
var portfolioRouter = require('./routes/portfolio');
var collaboratingRouter = require('./routes/collaborating');
var waitingCollaborationRouter = require('./routes/waitingCollaboration');

mysql.db.connect();

app.use('/', portfolioRouter);
app.use('/', collaboratingRouter);
app.use('/', waitingCollaborationRouter);

const port = 3000;

app.use(express.static("Follow"));
app.use(express.static("image"));
app.use(express.static("Unfollow"));
app.use(express.static("project"));




app.get("/", (req, res) => {
  var page1 = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Collusic</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" rel="stylesheet">
  </head>
  <body>
    <div style="height: auto; width: 100%;">
     <h1>COLLUSIC</h1>
     <style>
        h1{
          position: relative;  
          font-size : 100px;
            left: 70px;
            top: 150px;
            color:bisque;
        }
  
        fieldset{
          padding-top: 0.85em;
          margin-left: 90px;
          margin-top: 160px;
          color:aliceblue;
          
          
        }
        img{
          float: right;
          margin-right: 60px;
          margin-top: 100px;
        }
        body {
          background-image: linear-gradient(.25turn, white, 10%, blue);
          background-image: url("sky-clouds-summer.jpg");
          background-repeat: no-repeat;
          background-size: cover;
        }
     </style>
      <img src="drum-set.png" alt="drum" width="150" height="150">
      <img src="guitar.png" alt="guitar" width="150" height="150">
      <img src="piano.png" alt="piano" width="150" height="150">
      <img src="singer.png" alt="singer" width="150" height="150">
      <html>
        <title>login</title>
        <style>
        </style>
    </head>
    <a href="/choose">
    <body>
        <fieldset style="width:250px;">
            <legend>login</legend>
                <form method='post' action='login_ck.php'>
                    <p>id : <input name='id' type='text'> </p>
                    <p>pw : <input name='pw' type='password'> </p>
                    <input type='submit' value='login'>
                    <input type='reset' value='google'> 
                    <input type='reset' value='Facebook'>
                </form>
        </fieldset>
        
      
  
    </body>
    </a>
      </html>
      
  </body>
  </html>
  `;
  res.send(page1);
});

app.get("/choose", (req, res) => {
  var html = `
    <!DOCTYPE html>
    <html lang="ko">
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- 위 3개의 메타 태그는 *반드시* head 태그의 처음에 와야합니다; 어떤 다른 콘텐츠들은 반드시 이 태그들 *다음에* 와야 합니다 -->
        <title>Collusic</title>
    
        <!-- 부트스트랩 -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
    
        <!-- IE8 에서 HTML5 요소와 미디어 쿼리를 위한 HTML5 shim 와 Respond.js -->
        <!-- WARNING: Respond.js 는 당신이 file:// 을 통해 페이지를 볼 때는 동작하지 않습니다. -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        <style>
            body {
                background-image: url("sky-clouds-summer.jpg");
                background-size: cover;
            }
    
            .row {
                position: relative;
                display: flex;
            }
    
            .row .col-md-4 {
                font-size: 50px;
                font-weight: bold;
                background-color: whitesmoke;
                padding-bottom: 50%;
                flex: 1;
                text-align: center;
                width: 33%;
                height: 100%;
                margin-top: 100px;
    
    
                -webkit-transform: scale(1);
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                -webkit-transition: .3s;
                -moz-transition: .3s;
                -ms-transition: .3s;
                -o-transition: .3s;
                transition: .3s;
            }
    
            .row .col-md-4:hover {
                font-size: 50px;
                font-weight: bold;
                background-color: mediumseagreen;
                padding-bottom: 45%;
                flex: 1;
                text-align: center;
                width: 33%;
                height: 100%;
                margin-top: 100px;
                color: white;
    
                -webkit-transform: scale(1.05);
                -moz-transform: scale(1.05);
                -ms-transform: scale(1.05);
                -o-transform: scale(1.05);
                transform: scale(1.05);
            }
    
            .left {
                background-color: beige;
                margin-top: 50px;
                margin-left: 30px;
                margin-right: 30px;
                position: relative;
                width: 100%;
                height: 100%;
                box-shadow: 5px 5px 5px black;
            }
    
            .center {
                background-color: aqua;
                margin-top: 50px;
                margin-left: 30px;
                margin-right: 30px;
                position: relative;
                width: 100%;
                height: 100%;
                box-shadow: 5px 5px 5px black;
            }
    
            .right {
                background-color: burlywood;
                margin-top: 50px;
                margin-left: 30px;
                margin-right: 30px;
                position: relative;
                width: 100%;
                height: 100%;
                box-shadow: 5px 5px 5px black;
            }
    
            .left-text {
                color: darkslategrey;
                margin-top: 50px;
                text-shadow: 1px 1px 1px grey;
            }
    
            .center-text {
                color: darkslategrey;
                margin-top: 50px;
                text-shadow: 1px 1px 1px grey;
            }
    
            .right-text {
                color: darkslategrey;
                margin-top: 50px;
                text-shadow: 3px 3px 5px grey;
            }
    
            img {
                display: table;
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                border-radius: 30%;
                overflow: hidden;
                max-width: 50%;
            }
    
            .imformation {
                font-size: large;
            }
    
            .left:hover {
                color: white;
            }
    
            .img2 {
                display: table;
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                border-radius: 30%;
                overflow: hidden;
                max-width: 50%;
            }
    
            .imformation2 {
                font-size: large;
            }
    
            .img3 {
                display: table;
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                border-radius: 30%;
                overflow: hidden;
                max-width: 50%;
            }
    
            .imformation3 {
                font-size: large;
            }
    
        </style>
    </head>
    
    <body>
    
        <!-- jQuery (부트스트랩의 자바스크립트 플러그인을 위해 필요합니다) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <!-- 모든 컴파일된 플러그인을 포함합니다 (아래), 원하지 않는다면 필요한 각각의 파일을 포함하세요 -->
        <script src="js/bootstrap.min.js"></script>
        <div class="row">
        <a href="/portfolio">
            <div class="col-md-4 left">
                <div class="left-text">
                    Portfolio
                </div>
                <div class="img">
                    <img src="그림1.png">
                </div>
                <div class="imformation">
                    <p>
                        이름 : 박재현
                    </p>
                    <p>
                        전화번호 : 010-4814-2697
                    </p>
                    <p>
                        대표곡 : Music is my Life
                    </p>
                </div>  
            </div>
            </a>
            <a href="/collaborating">
            <div class="col-md-4 center">
                <div class="center-text">
                    Collaborating
                </div>
                <div class="img2">
                    <img src="band.png">
                </div>
                <div class="imformation2">
                    <p>
                        .....
                    </p>
                    
                </div>
            </div>
            </a>
            <a href="/waitingCollaboration">
            <div class="col-md-4 right">
                <div class="right-text">
                    Waiting collaboration
                </div>
                <div class="img3">
                    <img src="united.png">
                </div>
                <div class="imformation3">
                    <p>
                        .....
                    </p>
                </div>
            </div>
            </a>
        </div>
    </body>
    
    </html>
    `;
  res.send(html);
});

app.get("/create1", (req, res) => {
  var title = req.query.id;
  var create = `
  <a href="/create">create</a> <a href="/update?id=${req.query.id}">update</a>
  <form action="/delete_process" method="post">
    <input type="hidden" name="id" value="${title}">
    <input type="submit" value="delete">
  </form>
    `;
  res.send(create);
});

app.get("/create", function (req, res) {
  mysql.db.query(`SELECT * FROM project;`, function (error, projects) {
    if (error) {
      throw error;
    }
    var template = `
  <form action="/create_process" method="post">
    <p><input type="text" name="title" placeholder="title"></p>
    <p>
      <textarea name="description" placeholder="description"></textarea>
      </p>
      <p>
        <input type="submit">
      </p>
    </form>
    `;
    res.writeHead(200);
    res.send(template);
  });
});
app.post("/create_process", function (req, res) {
  //   var title = req.body.title;
  //   var description = req.body.description;
  mysql.db.query(
    `
            INSERT INTO project (key, u_key, path, title, description) 
              VALUES(1, 2, dfdfdf, ?, ?)`,
    [post.title, post.description],
    function (error, result) {
      res.writeHead(302, { Location: `/?id=${result.insertId}` });
      res.end();
    }
  );
});

app.get("/update", function (req, res) {
  fs.readFile(`Active/${req.query.id}`, "utf-8", function (err, description) {
    var jaemook = req.query.id;
    var template = `
      <form action="/update_process" method="post">
        <input type="hidden" name="id" value="${jaemook}">
        <p><input type="text" name="title" placeholder="title" value="${jaemook}"></p>
        <p>
          <textarea name="description" placeholder="description">${description}</textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
        <a href="/create">create</a> <a href="/update?id=${jaemook}">update</a>`;
    res.send(template);
  });
});
app.post("/update_process", function (req, res) {
  var id = req.body.id;
  var title = req.body.title;
  var description = req.body.description;

  fs.rename(`Active/${id}`, `Active/${title}`, function (err) {
    fs.writeFile(`Active/${title}`, description, "utf-8", function (err) {
      res.writeHead(302, { Location: `/?id=${title}` });
      res.end();
    });
  });
});

app.post("/delete_process", function (req, res) {
  var id = req.body.id;
  fs.unlink(`Active/${id}`, function (err) {
    res.writeHead(302, { Location: `/` });
    res.end();
  });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
