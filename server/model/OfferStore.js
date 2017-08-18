const Database = require("./Database");
const db = new Database();

class OfferStore {
    constructor() {
    }

    getOfferByRange(from) {
        let query = `SELECT * FROM offer ORDER BY offerid DESC LIMIT 20 OFFSET ${from}`;
        return db.runMultipleResultQuery(query);
    };

    getOfferById(id) {
        let query = `SELECT * FROM offer WHERE offerid='${id}'`;
        return db.runOneResultQuery(query);
    };

    getOfferByType(from, type) {
        let query = `SELECT * FROM (SELECT * FROM offer WHERE offertype='${type}') AS results ORDER BY offerid DESC LIMIT 20 OFFSET ${from}`;
        return db.runMultipleResultQuery(query);
    };

    addOffer(offer) {
        let crud = `INSERT INTO offer(
                   offeruid, offertitle, offertype, offercontent, offerimage, 
                   offerlink, offerstarttime, offerendtime, offerview, offerowner)
                   VALUES ('${offer.offeruid}',
                   '${offer.offertitle}',
                   '${offer.offertype}',
                   '${offer.offercontent}',
                   '${offer.offerimage}',
                   '${offer.offerlink}',
                   '${offer.offerstarttime}',
                   '${offer.offerendtime}',
                   '${offer.offerview}',
                   '${offer.offerowner}');`;
        return db.runCRUD(crud);
    };
}

module.exports = OfferStore;
