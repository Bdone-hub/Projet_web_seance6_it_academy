let express = require('express');
let app = express();
let routes = require('./routes');


app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
let session = require('express-session');

app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized : true
}));

app.use('/', routes);

app.listen(8000, function(){
    console.log('server is listening on port 8000')  
});
