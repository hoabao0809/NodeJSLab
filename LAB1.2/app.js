const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs({layoutDir: 'view/layouts', defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });

  // res.sendFile(path.join(__dirname, 'views', '404.html'));
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
