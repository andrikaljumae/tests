import React from "react";
import {TiHeartFullOutline} from "react-icons/ti";

class Test2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0};
  }
  onclick() {
    this.setState(oldState => ({
      likes: oldState.likes + 1
    }));
  }

render () {
  return (
    <div>
      <div className={"description"}>
        Ülesanne 2:
        <p>
          Rakendus peab arvet pidama mitu korda on südame ikooni klikitud ning vastava numbri <code>likes:</code> järel kuvama.
        </p>
      </div>

      <div style={{display:"flex", alignItems: "center"}}>
        <div>
          Likes: {this.state.likes}
        </div>
        <TiHeartFullOutline onClick={this.onclick.bind(this)} />
        <div>Click me</div>
      </div>
    </div>
  );
}
}

export default Test2;
