/* -----------------------------------------------------------------------------
 * @index.js
 *
 * Main code, contains the endpoints and respective connectivity functions
 *
 * Authors: 
 *     Alejandra Nissan Leizorek
 *     Carlos Garcia Gonzalez
 *     Fernando Garrotre de la Macorra
 *     Yann Le Lorier Barcena
 ---------------------------------------------------------------------------- */
const express = require('express')
const app = express();
const port = 3000;

// Set public dir
app.use(express.static('public'))

// Pass values from URL
app.use(express.urlencoded({extended: true}));

// Set the engine as ejs for the views
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("home.ejs");
});


// Simple print to know which port the app is running on
app.listen(port, () => {
    console.log(`Running on localhost:${port}`)
});
