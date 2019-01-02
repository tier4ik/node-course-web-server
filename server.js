const express = require('express');
const pug = require('pug');

var app = express();
// PUG будет использоваться EXPRESSом для создаия шаблонов
app.set('view engine', 'pug');

app.use(function(request, response, next) {
    console.log(`${new Date().toString()}: ${request.method} : ${request.url}`);
    // при использовании ".use"
    // без вызова next() последующие методы не вызовутся !!!
    next();
});
// app.use(function(request, response, next) {
//     response.render('maintenance');
// });
// определяем папку как статический каталог, в нем могут нахдиться hтml, css
// img, js файлы и мы будем иметь к ним доступ, например localhost:3000/help.html
app.use(express.static(__dirname + '/public-server'));
// при обращении к корневому каталогу "/" будет получен ответ
app.get('/', function(request, response) {
    response.render('main');
});
// при обращении к каталогу about "/about" будет получен ответ
app.get('/about', function(request, response) {
    //ф-ция render компилирует pug в html
    response.render('header', {title: 'Это сделал ПУГ', subTitle: 'Да да это PUG'});
});

app.listen(3000);