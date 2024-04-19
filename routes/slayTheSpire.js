const express = require("express");
const router = express.Router();
const slayTheSpireCards = require("../data/slayTheSpire");

const imageValidation = (url) => {
    const pattern = /^https:\/\/static\.wikia\.nocookie\.net\/slay-the-spire\/images\/\w+\/\w+\/\w+\.png$/;
    return pattern.test(url);
}

//Creating route for all Slay The Spire Cards
router
    .route("/")
    .get((req, res) => {
        res.json(slayTheSpireCards)
    })
    //how to add new card to the set
    .post((req, res) => {
        if(req.body.name && req.body.type && req.body.subType && req.body.url && req.body.cardGame) {
            //error if someone tries to add a non Slay The Spire card

            if(req.body.cardGame !== "Slay The Spire") {
                res.json({ error: "Trying to add non Slay The Spire Card"});
                return;
            };
            //add error handling for if the url added is an image

            if(imageValidation(req.body.url) === false) {
                res.json({ error: "Trying to add non image URL"});
                return;
            };
            const slayTheSpireCard = {
                id: slayTheSpireCards[slayTheSpireCards.length -1].id + 1,
                name: req.body.name,
                type: req.body.type,
                subType: req.body.subType,
                url: req.body.url,
                cardGame: req.body.cardGame,
            };
            slayTheSpireCards.push(slayTheSpireCard);
            res.json(slayTheSpireCards[slayTheSpireCards.length - 1]);
        } else res.json({ error: "Insufficient Data" });
});

// Creating a route for individual cards
router
    .route('/:id')
    .get((req, res, next) => {
        const slayTheSpireCard = slayTheSpireCards.find((u) => u.id == req.params.id);
        if (slayTheSpireCard) res.json(slayTheSpireCard);
        else next();
    })
    .patch((req, res, next) => {
        const slayTheSpireCard = slayTheSpireCards.find((u, i) => {
            if (u.id == req.params.id) {
                for (const key in req.body) {
                    slayTheSpireCards[i][key] = req.body[key];
                }
                return true;
            }
        })
        if (slayTheSpireCard) res.json(slayTheSpireCard);
        else next();
    })
    .delete((req, res, next) => {
        const slayTheSpireCard = slayTheSpireCards.find((u, i) => {
            if (u.id == req.params.id) {
                slayTheSpireCards.splice(i, 1);
                return true;
            }
        });
        if(slayTheSpireCard) res.json(slayTheSpireCard)
        else next(); 
});

module.exports = router;