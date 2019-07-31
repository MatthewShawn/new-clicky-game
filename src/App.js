import React, {Component} from 'react';
import { Container, Row, Col } from "reactstrap";
import posters from "./posters.json";
import ClickyItem from "./components/ClickyItem";


class App extends Component {
  state = {
    posters: posters,
    pickedPosts: [],
    highScore: 0,
    alertMess: ""
  }


handleChosen = thing => {
  const name = thing.target.attributes.getNamedItem("name").value;
  this.mixPosters()
  this.processClick(name, this.addScore)
}

addScore = (newState, callBack) => {
  if (newState.pickedPosts.length > newState.highScore) {
    newState.hightScore++;
    this.setState(this.state = newState);
  }
}

mixPosters() {
  this.setState(this.state.posters = this.mixArray(this.state.posters))
};

mixArray = (a) => {
  var idx1, tempIdx, idx2;
  for (idx2 = a.length -1; idx2 > 0; idx2--){
    idx1 = Math.floor(Math.random() * (idx2 + 1));
    tempIdx = a[idx2];
    a[idx2] = a[idx1];
    a[idx1] = tempIdx;
  }
  return a;
}

alertWin = (newState) => {
  if ( newState.pickedPosts.length === 12 ) {
    newState.alertMess = "WELL DONE!!";
    newState.pickedPosts = [];
    this.setState(this.state = newState);
  }
}

processClick = (name, callBack) => {
  // the elipsis (spread operator) puts in all the members of the array
  // ...only there is no array.
  const newState = { ...this.state };
  if (newState.pickedPosts.includes(name)) {
    newState.alertMess = `You have already picked that poster!!!`;
    newState.pickedPosts = [];
    this.setState(this.state = newState);
  } else {
    newState.pickedPosts.push(name);
    newState.alertMess = `You got another one!!!`;
    this.setState(this.state = newState);
  }
  callBack(newState, this.alertWin);
}



render () {
  return (
    <Container>
      <Row>
        <Col md="3">        
        {this.state.posters.map( posters => (
          <ClickyItem
            id={posters.id}
            name={posters.name}
            image = {posters.image}
            handlePicked = {this.handleChosen}
            key = {posters.id}
          />
        ))}
        
        </Col>
        
      </Row>
     
    </Container>
  )
}

}

export default App;
