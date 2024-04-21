const express = require("express");
const router = express.Router();
const forceOfWillCards = require("../data/forceOfWill");

const imageValidation = (url) => {
    const pattern = /^https:\/\/www\.fowdb\.altervista\.org\/images\/cards\/\d+\/\w+\/\d+\.jpg$/;
    return pattern.test(url);
}

//Creating route for all forceOfWill Cards
router
    .route("/api")
    .get((req, res) => {
        res.json(forceOfWillCards)
    })
    //how to add new card to the set
    .post((req, res) => {
        if(req.body.name && req.body.type && req.body.subType && req.body.url && req.body.cardGame) {
            //error if someone tries to add a non forceOfWill card
            if(req.body.cardGame !== "Force Of Will") {
                res.json({ error: "Trying to add non Force Of Will Card"});
                return;
            };
            //add error handling for if the url added is an image
            if(imageValidation(req.body.url) === false) {
                res.json({ error: "Trying to add non image URL"});
                return;
            };
            const forceOfWillCard = {
                id: forceOfWillCards[forceOfWillCards.length -1].id + 1,
                name: req.body.name,
                type: req.body.type,
                subType: req.body.subType,
                url: req.body.url,
                cardGame: req.body.cardGame,
            };
            forceOfWillCards.push(forceOfWillCard);
            res.json(forceOfWillCards[forceOfWillCards.length - 1]);
        } else res.json({ error: "Insufficient Data" });
});

// Creating a route for individual cards
router
    .route('/api/:id')
    .get((req, res, next) => {
        const forceOfWillCard = forceOfWillCards.find((u) => u.id == req.params.id);
        if (forceOfWillCard) res.json(forceOfWillCard);
        else next();
    })
    .patch((req, res, next) => {
        const forceOfWillCard = forceOfWillCards.find((u, i) => {
            if (u.id == req.params.id) {
                for (const key in req.body) {
                    forceOfWillCards[i][key] = req.body[key];
                }
                return true;
            }
        })
        if (forceOfWillCard) res.json(forceOfWillCard);
        else next();
    })
    .delete((req, res, next) => {
        const forceOfWillCard = forceOfWillCards.find((u, i) => {
            if (u.id == req.params.id) {
                forceOfWillCards.splice(i, 1);
                return true;
            }
        });
        if(forceOfWillCard) res.json(forceOfWillCard)
        else next(); 
});

//---------{VIEW ROUTES}
router
    .route('/views')
    .get((req, res) => {
    res.render('ForceOfWill', {forceOfWillCards: forceOfWillCards});
});
router
    .route('/views/:id')
    .get((req, res, next) => {
  const forceOfWillCard = forceOfWillCards.find((u) => u.id == req.params.id);
  if (forceOfWillCard) res.render("EachFOW", {
      forceOfWillCard: forceOfWillCard
    })
  else next();
});

module.exports = router;