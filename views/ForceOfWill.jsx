import React, { Component } from "react";


export default class ForceOfWill extends Component {
    render() {
      const { forceOfWillCards } = this.props;
      console.log(forceOfWillCards);
      return (
        <>
        <html>
            <head>
              <link rel="stylesheet" type="text/css" href="/forceOfWillStyle.css" />
            </head>
            <body>
                  <h1>Force of Will Cards Index Page</h1>
                <div class='cardContainer'>
                  <div class='cardsIndex'>
                    {forceOfWillCards.map((forceOfWillCard, i) => {
                      return (
                        <div class='gridItemsAll'>
                          <div class='gridItemsEach'>
                            <div><a class='gridItemLink' href={`/fowcards/views/${forceOfWillCard.id}`}>{forceOfWillCard.name}</a></div>
                            <div>{forceOfWillCard.type}</div>
                            <div>{forceOfWillCard.subType}</div>
                          </div>
                          <img class='imageItem' src={forceOfWillCard.url} alt=""/>
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