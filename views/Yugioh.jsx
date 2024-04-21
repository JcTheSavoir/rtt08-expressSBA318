import React, { Component } from "react";


export default class Yugioh extends Component {
    render() {
      const { yugiohCards } = this.props;
      console.log(yugiohCards);
      return (
        <>
        <html>
            <head>
              <link rel="stylesheet" type="text/css" href="/app.css" />
            </head>
            <body>
                  <h1>Yugioh Cards Index Page</h1>
                <div class='cardContainer'>
                  <div class='cardsIndex'>
                    {yugiohCards.map((yugiohCard, i) => {
                      return (
                        <div class='gridItemsAll'>
                          <div class='gridItemsEach'>
                            <div><a class='gridItemLink' href={`/yugiohCards/${i}`}>{yugiohCard.name}</a></div>
                            <div>{yugiohCard.type}</div>
                            <div>{yugiohCard.subType}</div>
                            {/* <div>{yugiohCard.cardGame}</div> */}
                          </div>
                          <img class='imageItem' src={yugiohCard.url} alt=""/>
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