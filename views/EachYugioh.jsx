import React, { Component } from "react";


export default class EachYugioh extends Component {
    render() {
      const yugiohCard = this.props.yugiohCard
      console.log(yugiohCard);
      return (
        <>
        <html>
            <head>
              <link rel="stylesheet" type="text/css" href="/yugiohStyle.css" />
            </head>
            <body>
                <h1 class='gridItemLink'>{yugiohCard.name}</h1>
                <div class='cardContainer'>
                  <div class='eachCardsIndex'>
                        <div class='eachGridItemsAll'>
                          <div class='gridItemsEach'>
                            <div>{yugiohCard.type}</div>
                            <div>{yugiohCard.subType}</div>
                          </div>
                          <img class='imageItem' src={yugiohCard.url} alt=""/>
                        </div>
                  </div>
                </div>
            </body>
        </html>
        </>
      );
    }
}