const express = require('express')
const app = express()
const scraper = require ("./scraper")
const bodyParser = require('body-parser');

app.listen(8000, () => {
  console.log('server running')
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.post('/scrapedata', async (req, res) => {
const searchQuery = `${req.body.year} ${req.body.make} ${req.body.model} ${req.body.engine} ${req.body.part}`
console.log(searchQuery);
const data = await scraper.scrape(searchQuery);
res.send(data);
})

