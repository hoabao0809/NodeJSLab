const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
// const expressHbs = require('express-handlebars');

const app = express();

// app.engine('hbs', expressHbs({layoutDir: 'view/layouts', defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.router);
app.use(shopRoutes);

app.use(errorController.get404);

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
