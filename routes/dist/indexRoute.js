"use strict";
exports.__esModule = true;
var express_1 = require("express");
var indexCont_1 = require("../controllers/indexCont");
var router = express_1.Router();
router
    .get('/send-data', indexCont_1.sendDataOfProduct) //    /product/send-data
["delete"]('/delete-data', indexCont_1.deleteDataOfProduct)
    .post('/add-new-product', indexCont_1.addNewProduct);
// .post('/update-data', sendDataOfProduct)  //   /product/update-data
exports["default"] = router;
