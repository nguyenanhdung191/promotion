//INIT SERVER
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.static('./web/public'));

//INIT CONTROLLER
const OfferController = require("./server/controller/OfferController");
const oc = new OfferController();
app.all('/api/offers', (req, res) => {
    oc.service(req, res);
});
//



app.listen(7777);