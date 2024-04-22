import React, { Component } from "react";


export default class YugSlayTheSpire extends Component {
    render() {
      const { slayTheSpireCards } = this.props;
      console.log(slayTheSpireCards);
      return (
        <>
        <html>
            <head>
              <link rel="stylesheet" type="text/css" href="/slayTheSpireStyle.css" />
            </head>
            <body>
                  <h1>Slay The Spire Cards Index Page</h1>
                <div class='cardContainer'>
                  <div class='cardsIndex'>
                    {slayTheSpireCards.map((slayTheSpireCard, i) => {
                      return (
                        <div class='gridItemsAll'>
                          <div class='gridItemsEach'>
                            <div><a class='gridItemLink' href={`/stscards/views/${slayTheSpireCard.id}`}>{slayTheSpireCard.name}</a></div>
                            <div>{slayTheSpireCard.type}</div>
                            <div>{slayTheSpireCard.subType}</div>
                          </div>
                          <img class='imageItem' src={slayTheSpireCard.url} alt=""/>
                        </div>
                      );
                    })}
                  </div>
                </div>
            </body>
        </html>
        </>
      );
    }
}