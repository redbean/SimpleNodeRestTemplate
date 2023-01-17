const { response } = require('express');
const request = require('request')
const requestPromise = require('request-promise')
const url = require('url')


class MiddleWare
{
    constructor() {
        this.baseURL = '';
        this.port = '';
        this.query = '/bot';
    }

    BaseURLs(req, res) {
      res.send("hi");
    }


    async RequestAnswer(reqText) {
        
        //var result = await requestPromise(options);
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
            return response.body;
          });
    }   

    AskToServer(req, res) {
        var text = req.query.q;
        res.send(text.toString())

    }
}


module.exports = MiddleWare
