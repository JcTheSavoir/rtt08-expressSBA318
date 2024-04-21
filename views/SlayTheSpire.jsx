
import React, { Component } from "react";


export default class Show extends Component {
  render() {
    const fruit = this.props.fruit;
    return <>
      <head>
        <link rel="stylesheet" type="text/css" href="/app.css" />
      </head>
      <body>
        <h1>The {fruit.name} is {fruit.color}</h1>
          { fruit.readyToEat ? " It is Ready to Eat" : "ewl,, its not ready Yet"}
      </body>
    </>;
  }
}