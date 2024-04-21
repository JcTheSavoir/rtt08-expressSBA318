import React, { Component } from "react";


export default class EachSTS extends Component {
    render() {
      const slayTheSpireCard = this.props.slayTheSpireCard
      console.log(slayTheSpireCard);
      return (
        <>
        <html>
            <head>
              <link rel="stylesheet" type="text/css" href="/slayTheSpireStyle.css" />
            </head>
            <body>
                <h1 class='gridItemLink'>{slayTheSpireCard.name}</h1>
                <div class='cardContainer'>
                  <div class='eachCardsIndex'>
                        <div class='eachGridItemsAll'>
                          <div class='gridItemsEach'>
                            <div>{slayTheSpireCard.type}</div>
                            <div>{slayTheSpireCard.subType}</div>
                          </div>
                          <img class='imageItem' src={slayTheSpireCard.url} alt=""/>
                        </div>
                  </div>
                </div>
            </body>
        </html>
        </>
      );
    }
}