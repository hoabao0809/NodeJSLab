const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('Cookie').split('=')[1] === 'true';

  const isLoggedIn = req.session.isLoggedIn;
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('62ef3645c0c4d3fc645dffe0')
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.redirect('/');
    })
    .catch((err) => console.log(err));

  // res.setHeader('Set-Cookie', 'loggedIn=true; Max-Age=10');

  // Some pair keys:
  // ['Expires= ';
  // 'Max-Age= number in seconds';
  // 'Domain= to which cookies should be sent; 'Secure (cookie only be set if page is served via Https);
  // HttpOnly: cookie values cant be accessed via client side JS script => avoiding cross-site scripting attacks]
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect('/');
  });
};
