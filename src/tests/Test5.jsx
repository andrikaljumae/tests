import React from "react";
import Orders from "../Orders.jsx";
// import {toast} from "react-toastify";

class Test5 extends React.PureComponent {
  render() {
    return (
      <>
        <div className={"ds" }>
          <h3>
            Ülesanne 5:
          </h3>
          <p>
            <ol>
              <li>Kasutaja sisestab väärtused vormi</li>
              <li>Kui kasutaja vajutab "Esita", siis tehakse päring serveri.
              UI saadab serveri vormi andmed.</li>
              <li>Serveris on REST teenus, mis salvestab vormi andmed andmebaasi.</li>
              <li>Lahenduse testimiseks, saate klikkida "Uuenda andmeid" nuppu.
                Saate sellega kontrollida, kas teie vormi ühendamine ja andmete salvestamine toimis.</li>
              <li>Tuleb muuta faili <code>Test5.jsx</code></li>
              <li>Tuleb muuta faili <code>orders.router.js</code></li>
            </ol>

            Näidise video <a href="/static/videos/video1.mp4">/static/videos/video1.mp4</a>

          </p>

        </div>
        <div className="ds">
          <form className="ds-item style-2" >
            <h3 className="style-2">Tellimuse vorm</h3>
            <div className={"row"}>
              <label htmlFor="fullName">Kliendi nimi</label>
              <input name="fullName" type="text"/>
            </div>
            <div className={"row"}>
              <label htmlFor="burger">Burger</label>
              <select name="burger" >
                <option value="">-</option>
                <option value="megaBurger">Megaburger</option>
                <option value="baconBurger">Peekoniburger</option>
                <option value="veganBurger">Veganburger</option>
              </select>
            </div>
            <div className={"row"}>
              <label htmlFor="drink">Jook</label>
              <select name="drink">
                <option value="">-</option>
                <option value="coke">Coca-Cola</option>
                <option value="sprite">Sprite</option>
                <option value="water">Water</option>
              </select>
            </div>
            <button style={{width: "100%"}}>
              Esita
            </button>
          </form>
          <Orders />

        </div>
      </>
    );
  }
}

export default Test5;
