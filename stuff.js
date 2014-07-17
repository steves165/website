/* global require, __dirname */

var
http = require('http'),
path = require('path'),
fs = require('fs');

function requestHandler(req, res) {
    'use strict';
    var
    content = '',
    fileName = path.resolve(req.url),
    localFolder = __dirname + '/';
    //console.log(fileName);
    if (fileName === '/') {
        content = localFolder + '/index.html';
    } else if (fileName === '/dist') {
        content = localFolder + '/dist/index.html';
    } else {
        content = localFolder + fileName;
    }
    fs.readFile(content,function(err,contents){
            if(!err){
                res.end(contents);
            } else {
                console.dir(err);
                fs.readFile(path.normalize(content), function(err, contents) {
                    if (!err) {
                        res.end(contents);
                    } else {
                        console.dir(err);
                    }
                });
            }
        });
}
http.createServer(requestHandler).listen(8080);
