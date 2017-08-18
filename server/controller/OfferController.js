const OfferStore = require("../model/OfferStore");
const os = new OfferStore();

class OfferController {
    constructor() {
    }

    service(req, res) {
        switch (req.method) {
            case "GET":
                this.handleGET(req, res);
                break;
            case "POST":
                this.handlePOST(req, res);
                break;
        }
    };

    handleGET(req, res) {
        let from = 0;
        if (req.query.hasOwnProperty("id") === false) {
            if (req.query.page !== "1") {
                from = parseInt(req.query.page - 1) * 20;
            }
            if (req.query.type !== "all") {
                os.getOfferByType(from, req.query.type)
                    .then(rows => res.json(rows));
            } else {
                os.getOfferByRange(from)
                    .then(rows => res.json(rows));
            }
        } else {
            os.getOfferById(req.query.id)
                .then(row => res.json(row));
        }
    };

    handlePOST(req, res) {
        os.addOffer(req.body)
            .then(result => {
                if (result === false) {
                    res.status(400);
                    res.json({message: "error"})
                } else {
                    res.status(200);
                    res.json({message: `${result} row(s) affected`})
                }
            })
    };
}


module.exports = OfferController;
