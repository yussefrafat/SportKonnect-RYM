const path = require("path");
const express = require("express");
const session = require("express-session");
// const exphbs = require("express-handlebars");
// const helpers = require('./utils/helpers');
const routes = require('./controllers/api')
const app = express();
const PORT = process.env.PORT || 80;

// const sequelize = require("./config/connection");
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const hbs = exphbs.create({helpers});
app.use(express.json());
app.use(routes);


// app.listen(PORT, () => console.log('Now listening'));


// const path = require('path');


const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');




const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));



const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers/api/'));
app.use(require('./controllers/'))
sequelize.sync({ force: false }).then(() => {
  app.listen(80, () => {
    console.log(`API server now on port 80!`);
})
});
