const pgp = require("pg-promise")({});
const db = pgp(require("./config.json").db);

class Database {
    constructor() {
        this.db = db;
    }

    runMultipleResultQuery(query) {
        return db.manyOrNone(query)
            .then(rows => {
                return rows;
            })
            .catch(err => {
                console.log(err);
                return false;
            });
    };

    runOneResultQuery(query) {
        return db.one(query)
            .then(row => {
                return row;
            })
            .catch(err => {
                console.log(err);
                return false;
            });
    }

    runCRUD(crud) {
        return db.result(crud)
            .then(result => {
                return result.rowCount;
            })
            .catch(err => {
                console.log(err);
                return false;
            });
    };


}

module.exports = Database;
