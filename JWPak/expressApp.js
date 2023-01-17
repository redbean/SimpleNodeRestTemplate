const express = require('express');
const http = require('http');


class API {
    constructor() {
        this.app = express();
        this.router = express.Router();
        this.port = process.env.PORT || 8486;
        this.constructor_Internal();
    }

    constructor_Internal() {}

    StartServer() {
        
        this.app.listen(this.port, () => {
            console.log(`server is   Listening at :${this.port}`)
        })
    }
}

module.exports = API