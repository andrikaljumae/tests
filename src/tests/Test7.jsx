import React from "react";
import {toast} from "react-toastify";

class Test7 extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      fullName: "",
      address: "",
      phoneNumber: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullName: this.state.fullName,
        address: this.state.address,
        phoneNumber: this.state.phoneNumber
      })
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.text();
    }).then((data) => {
      console.log(data);
      toast.success("Andmed edastatud edukalt");
    }).catch((err) => {
      console.log(err.message);
      toast.error("Andmete edastamine ebaõnnestus :(");
    });
  }

  render() {
    return (
      <div>
        <Task />
        <div className="ds">
          <form className="ds-item style-2" onSubmit={this.onSubmit}>
            <h3 className="style-2">Kasutaja andmed</h3>
            <div className={"row"}>
              <label htmlFor="fullName">Nimi</label>
              <input name="fullName" value={this.state.fullName} onChange={this.onChange} type="text" />
            </div>
            <div className={"row"}>
              <label htmlFor="address">Elukoht</label>
              <input name="address" value={this.state.address} onChange={this.onChange} type="text" />
            </div>
            <div className={"row"}>
              <label htmlFor="phoneNumber">Kontaktnumber</label>
              <input name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} type="text" />
            </div>
            <button style={{width: "100%"}}>
              Esitan
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Test7;

const Task = () => (
  <div>
    <h3>
      Ülesanne 7:
    </h3>
    <ol>
      <li>Eelmistes ülesannetes on teile antud juba valmis ehitatud vorm</li>
      <li>Selles ülesandes on teil vaja luua vormi element iseseisvalt</li>
      <li>Kasutaja peab saama sisestada oma nime, elukoha ja kontaktnumbri.</li>
      <li>Kui kasutaja vajutab "esitan" nuppu, siis saadetakse andmed serveri ning salvestatakse andmebaasi.</li>
      <li>Te peate muutma ainult 2 faili <code>server/user.router.js</code> ja <code>src/Test7.jsx</code></li>
      <li>Testimaks, kas andmed salvestusid andmebaasi, kasutage Postmani. <code>GET localhost:3000/api/v1/users </code> </li>
      <li>User Schema'ga saate tutvuda failis <code>server/user.model.js</code></li>
      <li>Pange tähele, et server tuleb uuesti käivitada, kui te teete <code>/server</code> kaustas muudatusi
        (npm run start:backend)
      </li>
      <li>Oleme praktiliselt sama asja teinud eelmistes ülesannetes. Ehk vajadusel saate sealt võtta ideid.</li>
      <li>ReactJS ametlik dokumentatsioon peaks olema juba ammu läbiloetud, tuletage meelde.
        <a href={'https://reactjs.org/docs/forms.html'}>https://reactjs.org/docs/forms.html</a></li>

    </ol>
  </div>
);