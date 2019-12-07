import React from "react";
import {toast} from "react-toastify";

class Test10 extends React.PureComponent {
  constructor (props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.fullName = React.createRef();
    this.address = React.createRef();
    this.phoneNumber = React.createRef();
    this.personalCode = React.createRef();
  }

  onSubmit(event) {
    event.preventDefault();
    fetch("/api/v1/users/task9", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullName: this.fullName.current.value,
        address: this.address.current.value,
        phoneNumber: this.phoneNumber.current.value,
        personalCode: this.personalCode.current.value
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
              <input name="personalCode" ref={this.personalCode} type="text" />
            </div>
            <div className={"row"}>
              <label htmlFor="fullName">Nimi</label>
              <input name="fullName" ref={this.fullName} type="text" />
            </div>
            <div className={"row"}>
              <label htmlFor="address">Elukoht</label>
              <input name="address" ref={this.address} type="text" />
            </div>
            <div className={"row"}>
              <label htmlFor="phoneNumber">Kontaktnumber</label>
              <input name="phoneNumber" ref={this.phoneNumber} type="text" />
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

export default Test10;

const Task = () => (
  <div>
    <h3>
      Ülesanne 10:
    </h3>
    <ol>
      <li>Tuleb teha sama vorm nagu <code>Ülesanne 9</code>, aga siin tuleb kasutada "uncontrolled" form </li>
      <li>Meeldetuletuse link <a href={LINK}>{LINK}</a> (sest te olete Reacti ametliku lehe juba ammu läbi lugenud)</li>
      <li>Tuleb muuta ainult faili <code>Test10.jsx</code></li>
    </ol>
  </div>
);

const LINK = 'https://reactjs.org/docs/uncontrolled-components.html';