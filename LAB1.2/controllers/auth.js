exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.get('Cookie').split('=')[1] === 'true';
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader('Set-Cookie', 'loggedIn=true; Max-Age=10');
  // Some pair keys: 
  // ['Expires= '; 
    // 'Max-Age= number in seconds'; 
    // 'Domain= to which cookies should be sent; 'Secure (cookie only be set if page is served via Https); 
    // HttpOnly: cookie values cant be accessed via client side JS script => avoiding cross-site scripting attacks]
  res.redirect('/');
};
