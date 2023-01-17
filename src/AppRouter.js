const AppBase = require('../JWPak/expressApp');
const MiddleWareFuntions = require('./MiddleWare.js')

class appExt extends AppBase {
    constructor_Internal() {
        this.mw = new MiddleWareFuntions();
        this.BuildAPIs()
        super.StartServer();
        console.log(this.port);
    }

    BuildAPIs() {
        this.app.get('/', this.mw.BaseURLs);
        this.app.get('/api', this.mw.AskToServer);
        //this.app.get('/:q', this.nlp.AskToServer);
        //this.app.get('/d', this.mw.CheckTime);
    }
}

module.exports = appExt;
