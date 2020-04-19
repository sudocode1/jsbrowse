const fs = require("fs");
const request = require("request");

class browse {
    constructor(site) {
        this.site = site;
    }
    browse(file) {
        request(this.site, function(error, response, body) {
            console.error('error:', error);
            console.log("statusCode:", response && response.statusCode);
            console.log("body", body);
            fs.writeFile(file, body, (err) => {
                if (err) throw err;
                console.log("HTML Saved in " + file);
            });
        });
    }

    status() {
        request(this.site, function(error, response, body) {
            console.error('error:', error);
            console.log("statusCode:", response && response.statusCode);
        });
    }
}

module.exports = { browse };