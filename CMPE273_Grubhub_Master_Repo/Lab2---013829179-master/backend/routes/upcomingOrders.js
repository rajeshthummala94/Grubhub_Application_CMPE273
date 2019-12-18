const express = require("express");
const router = express.Router();
var kafka = require("../kafka/client");

var passport = require('passport');
var jwt = require('jsonwebtoken');
var requireAuth = passport.authenticate('jwt', { session: false });

router.post("/upcomingOrders", requireAuth, (req, res) => {
    console.log("Inside upcomingOrders Request");
    console.log("Req Body : ", req.body);

    kafka.make_request("upcomingOrders_topic", req.body, function (err, results) {
        console.log("in make request call back");
        console.log(results);
        console.log(err);
        if (err) {
            console.log("Inside err");
            console.log(err);
            return res.status(err.status).send(err.message);
        } else {
            console.log("Inside else");
            console.log(results);
            return res.status(results.status).send(results.data);
        }
    });
});

module.exports = router;
