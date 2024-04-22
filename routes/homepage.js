const express = require("express");
const router = express.Router();
// const forceOfWillCards = require("../data/forceOfWill");
// const slayTheSpireCards = require("../data/slayTheSpire");
// const yugiohCards = require("../data/yugioh");

//---------------------------{VIEW ROUTE}

router
    .route("/")
    .get((req, res) => {
        res.render('Homepage')
    })

module.exports = router;