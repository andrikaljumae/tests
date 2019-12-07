import React from "react";
import {toast} from "react-toastify";


class Test9 extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      fullName: "",
      address: "",
      phoneNumber: "",
      personalCode: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    fetch("/api/v1/users/task9", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullName: this.state.fullName,
        address: this.state.address,
        phoneNumber: this.state.phoneNumber,
        personalCode: this.state.personalCode,
      })
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.status;
    }).then((status) => {
      console.log(status);
      if (status === 200) {
        toast.success("Kasutaja uuendatud");
      } else {
        toast.success("Uus kasutaja loodud");
      }
    }).catch((err) => {
      console.log(err.message);
      toast.error("Viga kasutaja salvestamisel");
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
              <label htmlFor="personalCode">Isikukood</label>
              <input name="personalCode" value={this.state.personalCode} onChange={this.onChange} type="text" />
            </div>
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
            <button style={{width: "45%", float: "right"}}>
              Esitan
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Test9;

const Task = () => (
  <div>
    <h3>
      Ülesanne 9:
    </h3>
    <ol>
      <li>Tuleb luua vorm</li>
      <li>Kasutaja saab sisestada nime, elukoha, telefoni numbri ja isikukoodi</li>
      <li>Kui kasutaja vajutab "esita", siis tehakse päring serveri kasutaja uuendamiseks/loomiseks</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja on olemas, siis peab uuendama kasutajat</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja ei olnud olemas, siis tuleb luua uus kasutaja</li>
      <li>Väga sarnane <code>Task7</code></li>
      <li>Tuleb muuta ainult faile <code>user.router.js</code> ja <code>Test9.jsx</code></li>
      <li>Kasutaja andmebaasi mudeliga saad tutvuda failis <code>user.model.js</code></li>
      <li><a href={LINK}>{LINK}</a></li>
    </ol>
  </div>
);

const LINK = 'https://mongoosejs.com/docs/api.html';