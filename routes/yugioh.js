const express = require("express");
const router = express.Router();
const yugiohCards = require("../data/yugioh");

const imageValidation = (url) => {
    const pattern = /^https:\/\/images\.ygoprodeck\.com\/images\/cards\/\d+\.jpg$/;
    return pattern.test(url);
}

//Creating route for all yugioh Cards
router
    .route("/")
    .get((req, res) => {
        res.json(yugiohCards)
    })
    //how to add new card to the set
    .post((req, res) => {
        if(req.body.name && req.body.type && req.body.subType && req.body.url && req.body.cardGame) {
            //error if someone tries to add a non yugioh card
            // const cardName = yugiohCards.find((u) => u.cardGame)
            // console.log(cardName)
            // if(cardName !== "Yu-Gi-Oh!") {
            //     res.json({ error: "Trying to add non Yugioh Card"});
            //     return;
            // };
            if(req.body.cardGame !== "Yu-Gi-Oh!") {
                res.json({ error: "Trying to add non Yugioh Card"});
                return;
            };
            //add error handling for if the url added is an image, just using the url that yugioh images api have to have

            if(imageValidation(req.body.url) === false) {
                res.json({ error: "Trying to add non image URL"});
                return;
            };
            const yugiohCard = {
                id: yugiohCards[yugiohCards.length -1].id + 1,
                name: req.body.name,
                type: req.body.type,
                subType: req.body.subType,
                url: req.body.url,
                cardGame: req.body.cardGame,
            };
            yugiohCards.push(yugiohCard);
            res.json(yugiohCards[yugiohCards.length - 1]);
        } else res.json({ error: "Insufficient Data" });
});

// Creating a route for individual cards
router
    .route('/:id')
    .get((req, res, next) => {
        const yugiohCard = yugiohCards.find((u) => u.id == req.params.id);
        if (yugiohCard) res.json(yugiohCard);
        else next();
    })
    .patch((req, res, next) => {
        const yugiohCard = yugiohCards.find((u, i) => {
            if (u.id == req.params.id) {
                for (const key in req.body) {
                    yugiohCards[i][key] = req.body[key];
                }
                return true;
            }
        })
        if (yugiohCard) res.json(yugiohCard);
        else next();
    })
    .delete((req, res, next) => {
        const yugiohCard = yugiohCards.find((u, i) => {
            if (u.id == req.params.id) {
                yugiohCards.splice(i, 1);
                return true;
            }
        });
        if(yugiohCard) res.json(yugiohCard)
        else next(); 
});

module.exports = router;