import React from "react";
import {toast} from "react-toastify";

class Test8 extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      fullName: "",
      address: "",
      phoneNumber: "",
      enabled: true
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleEnable = this.toggleEnable.bind(this);
  }

  toggleEnable (event) {
    event.preventDefault();
    this.setState({enabled: !this.state.enabled});
  }

  onChange(event) {
    if (this.state.enabled) {
      this.setState({[event.target.name]: event.target.value});
    }
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
              <input name="fullName" value={this.state.fullName} onChange={this.onChange} type="text" disabled={!this.state.enabled} />
            </div>
            <div className={"row"}>
              <label htmlFor="address">Elukoht</label>
              <input name="address" value={this.state.address} onChange={this.onChange} type="text" disabled={!this.state.enabled} />
            </div>
            <div className={"row"}>
              <label htmlFor="phoneNumber">Kontaktnumber</label>
              <input name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} type="text" disabled={!this.state.enabled} />
            </div>
            <button type="button" style={{width: "45%"}} onClick={this.toggleEnable}>
              { this.state.enabled ? 'Disable' : 'Enable' }
            </button>
            <button style={{width: "45%", float: "right"}} disabled={!this.state.enabled}>
              Esitan
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Test8;

const Task = () => (
  <div>
    <h3>
      Ülesanne 8:
    </h3>
    <ol>
      <li>Seda ülesannet saab lahendada ainult siis kui ülesanne 7 on tehtud</li>
      <li>Kopeerige ülesandes 7 tehtud vorm <code>test8.jsx</code> faili.</li>
      <li>Lisage nupp "enable/disable"</li>
      <li>Kui kasutaja vajutab "disable" nupu peale, siis peab vorm muutuma readonly.
        Ehk vormi väljadesse ei ole võimalik sisestada uusi väärtuseid ja
        vormi ei ole võimalik esitada.
      </li>
      <li>
        Kui kasutaja vajutab "enable" nupu peale, siis muutub vorm selliseks, et
        väljadesse on võimalik sisestada väärtuseid ning vormi on võimalik esitada.
      </li>

    </ol>
  </div>
);