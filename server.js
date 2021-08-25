const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({}); 

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

