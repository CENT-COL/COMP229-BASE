import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    return res.render('index', {title:'Home'});
});

router.get('/home', (req, res) => {
    return res.render('index', {title:'Home'});
});

router.get('/about', (req, res) => {
    return res.render('index', {title:'About'});
});

router.get('/products', (req, res) => {
    return res.render('index', {title:'Products'});
});

router.get('/services', (req, res) => {
    return res.render('index', {title:'Services'});
});

router.get('/contact', (req, res) => {
    return res.render('index', {title:'Contact'});
});

export default router;





// router.post('/', (req, res) => {
//     return res.send('Received a POST HTTP method')
// });
// router.put('/', (req, res) => {
//     return res.send('Received a PUT HTTP method')
// });
// router.delete('/', (req, res) => {
//     return res.send('Received a DELETE HTTP method')
// });

// router.get('/session', (req, res) => {
//     return res.send(req.context.models.users[req.context.me.id]);
// } )