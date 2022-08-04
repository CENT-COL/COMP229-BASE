
export const displayLoginPage = (req, res) => {
    return res.render('index', {title:'Home', displayName: req.user ? req.user.displayName : ''});
}

export const displayAboutPage = (req, res) => {
    return res.render('index', {title:'About', displayName: req.user ? req.user.displayName : ''});
}

export const displayProductsPage = (req, res) => {
    return res.render('index', {title:'Products', displayName: req.user ? req.user.displayName : ''});
}

export const displayServicesPage =  (req, res) => {
    return res.render('index', {title:'Services', displayName: req.user ? req.user.displayName : ''});
}

export const displayContactPage = (req, res) => {
    return res.render('index', {title:'Contact', displayName: req.user ? req.user.displayName : ''});
}