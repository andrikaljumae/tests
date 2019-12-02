import React from "react";
import {TiHeartFullOutline} from "react-icons/ti";

const Test2 = () => {
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
          Likes: [replace me]
        </div>
        <TiHeartFullOutline />
        <div>Click me</div>
      </div>
    </div>
  );
};

export default Test2;
