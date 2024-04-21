import React, { Component } from "react";


export default class EachFOW extends Component {
    render() {
      const forceOfWillCard = this.props.forceOfWillCard
      console.log(forceOfWillCard);
      return (
        <>
        <html>
            <head>
              <link rel="stylesheet" type="text/css" href="/forceOfWillStyle.css" />
            </head>
            <body>
                <h1 class='gridItemLink'>{forceOfWillCard.name}</h1>
                <div class='cardContainer'>
                  <div class='eachCardsIndex'>
                        <div class='eachGridItemsAll'>
                          <div class='gridItemsEach'>
                            <div>{forceOfWillCard.type}</div>
                            <div>{forceOfWillCard.subType}</div>
                          </div>
                          <img class='imageItem' src={forceOfWillCard.url} alt=""/>
                        </div>
                  </div>
                </div>
            </body>
        </html>
        </>
      );
    }
}