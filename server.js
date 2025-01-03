const express = require("express");
const path = require('path');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');

// Routes
const indexRoutes = require('./backend/routes/index.routes');
const projectsRoutes = require('./backend/routes/projects.routes');

// Link resolver
const {linkPageResolver, linkProjectResolver} = require('./backend/services/link-resolver');

//On require dotenv et recupère notre port dans config/.env
require("dotenv").config({ path: "./.env" });

// Server config
const app = express();
const port = process.env.PORT || 8004;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to make prismicLinkResolver available in all templates
app.use((req, res, next) => {
  res.locals.prismicLinkPageResolver = linkPageResolver; // Makes the link resolver available in all templates
  res.locals.prismicLinkProjectResolver = linkProjectResolver; // Makes the link resolver available in all templates
  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(errorHandler());
app.use(express.static(path.join(__dirname, 'public')));


// routes
app.use("/", indexRoutes);
app.use("/project", projectsRoutes);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});