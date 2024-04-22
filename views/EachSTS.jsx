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
                <h1 className='gridItemLink'>{slayTheSpireCard.name}</h1>
                <div className='cardContainer'>
                  <div className='eachCardsIndex'>
                        <div className='eachGridItemsAll'>
                          <div className='gridItemsEach'>
                            <div>{slayTheSpireCard.type}</div>
                            <div>{slayTheSpireCard.subType}</div>
                          </div>
                          <img className='imageItem' src={slayTheSpireCard.url} alt=""/>
                        </div>
                  </div>
                </div>
            </body>
        </html>
        </>
      );
    }
}