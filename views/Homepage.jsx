import React, { Component } from "react";


export default class Homepage extends Component {
  render() {
    return (
    <>
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="/homepageStyle.css" />
        </head>
        <body>
          <h1>Documentation Page</h1>
          <div className="apiDocumentation">
            <h2>API Information</h2>
            <div className="eachApiName">
              <div>
                <a className="linkToApi" href="../yugiohcards/api"><h3>Yugioh Cards Api</h3></a>
                <div className="aceessInfo">
                  <div>Api url for full data: <strong>/yugiohcards/api</strong></div>
                  <div>Api url for individual data: <strong>/yugiohcards/api/"insert id of card"</strong></div>
                </div>
              </div>
              <div>
                <a className="linkToApi" href="../stscards/api"><h3>Slay the Spire Api</h3></a>
                <div className="aceessInfo">
                  <div>Api url for full data: <strong>/stscards/api</strong></div>
                  <div>Api url for individual data: <strong>/stscards/api/"insert id of card"</strong></div>
                </div>
              </div>
              <div>
                <a className="linkToApi" href="../fowcards/api"><h3>Force of Will Api</h3></a>
                <div className="aceessInfo">
                  <div>Api url for full data: <strong>/fowcards/api</strong></div>
                  <div>Api url for individual data: <strong>/fowcards/api/"insert id of card"</strong></div>
                </div>
              </div>
            </div>
          </div>
          <div className="viewsDocumentation">
            <h2>Views Information</h2>
            <div className="eachViewsName">
              <div>
                <a className="linkToViews" href="../yugiohcards/views"><h3>Yugioh Cards views</h3></a>
                <div className="aceessInfo">
                  <div>Views url for full card set: <strong>/yugiohcards/views</strong></div>
                  <div>Views url for individual cards: <strong>/yugiohcards/views/"insert id of card"</strong></div>
                </div>
              </div>
              <div>
                <a className="linkToViews" href="../stscards/views"><h3>Slay the Spire views</h3></a>
                <div className="aceessInfo">
                  <div>Views url for full card set: <strong>/stscards/views</strong></div>
                  <div>Views url for individual cards: <strong>/stscards/views/"insert id of card"</strong></div>
                </div>
              </div>
              <div>
                <a className="linkToViews" href="../fowcards/views"><h3>Force of Will views</h3></a>
                <div className="aceessInfo">
                  <div>Views url for full card set: <strong>/fowcards/views</strong></div>
                  <div>Views url for individual cards: <strong>/fowcards/views/"insert id of card"</strong></div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
    )
  }
}