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
                <h1 className='gridItemLink'>{yugiohCard.name}</h1>
                <div className='cardContainer'>
                  <div className='eachCardsIndex'>
                        <div className='eachGridItemsAll'>
                          <div className='gridItemsEach'>
                            <div>{yugiohCard.type}</div>
                            <div>{yugiohCard.subType}</div>
                          </div>
                          <img className='imageItem' src={yugiohCard.url} alt=""/>
                        </div>
                  </div>
                </div>
            </body>
        </html>
        </>
      );
    }
}