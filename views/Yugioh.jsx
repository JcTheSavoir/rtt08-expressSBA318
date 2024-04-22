import React, { Component } from "react";


export default class Yugioh extends Component {
    render() {
      const { yugiohCards } = this.props;
      console.log(yugiohCards);
      return (
        <>
        <html>
            <head>
              <link rel="stylesheet" type="text/css" href="/yugiohStyle.css" />
            </head>
            <body>
                  <h1>Yugioh Cards Index Page</h1>
                <div className='cardContainer'>
                  <div className='cardsIndex'>
                    {yugiohCards.map((yugiohCard, i) => {
                      return (
                        <div className='gridItemsAll'>
                          <div className='gridItemsEach'>
                            <div><a className='gridItemLink' href={`/yugiohCards/views/${yugiohCard.id}`}>{yugiohCard.name}</a></div>
                            <div>{yugiohCard.type}</div>
                            <div>{yugiohCard.subType}</div>
                          </div>
                          <img className='imageItem' src={yugiohCard.url} alt=""/>
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