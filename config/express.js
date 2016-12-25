/**
 * Created by jbernardin on 3/7/16.
 */

var express = require("express");

module.exports.http = {
  customMiddleware: function (app) {
    app.use('/node_modules', express.static(process.cwd() + '/node_modules'));
  }
};
