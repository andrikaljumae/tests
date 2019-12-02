import React from "react";
import test1Example from "../images/test1_example.png";

// eslint-disable-next-line
const ITEMS = [
  {
    name: "Galaxy S10+",
    price: 1000,
  },
  {
    name: "iPhone 11 Pro",
    price: 1200,
  },
  {
    name: "huawei p20 pro",
    price: 900,
  }
];

const Test1 = () => {
  return (
    <div>
      <div className={"description"}>
        Ülesanne 1:
        <p>
          Lehel tuleb kuvada kõik tooted muutujas <code>ITEMS</code>.
          Iga toote kohta peab olema nimi ja hind.
          Iga toode peab olema uuel real.
        </p>
        <div>Näiteks:</div>
        <img style={{width: 200}} src={test1Example}/>
      </div>
      <div>
        [replace me]
      </div>
      <div><span className={"bold"}>Summa kokku:</span> [replace me]</div>
    </div>
  );
};

export default Test1;
