const newsRouter = require('./news');


function route(app) {

    app.get('/', (req, res) => { 
        res.render('home')
      })
      
    //   app.get('/news', (req, res) => { 
    //     res.render('news')
    //     console.log(req.query);
    //   })
    app.use('/news', newsRouter);
      
      app.get('/search', (req, res) => { 
        res.render('search')
      })
      
      app.post('/search', (req, res) => {
        res.render('search');
        console.log(req.query.search);
      })
}

module.exports = route;