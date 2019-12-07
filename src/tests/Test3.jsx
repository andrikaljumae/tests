import React from "react";
import example1 from "../images/1.png";
import example2 from "../images/2.png";
import example3 from "../images/3.png";

class Test3 extends React.PureComponent{
  constructor (props) {
    super(props);
    this.state = {
      responseText: null,
      username: "",
      age: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    fetch("/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        age: this.state.age
      })
    }).then((response) => {
      return response.text();
    }).then((text) => {
      this.setState({responseText: text});
    });
  }

  render(){
    return (
      <div>
        <div className={"description"}>
          <h3>
            Ülesanne 3:
          </h3>
          <p>
            <code>server.js</code> failis on defineeritud otspunkt
            <code>POST /api/v1/register</code>.
            Kui kasutaja vajutab "Send", siis peab frontend kasutama seda REST teenust
            ning saatma "username" ja "age" väärtused backendi.
            Server annab vastuseks teksti, mis tuleb kuvada ekraanil.
            API kirjeldus on lehel <a href={"http://localhost:3000/api-docs/"}>http://localhost:3000/api-docs/</a>
          </p>
          <h3>
            Näited:
          </h3>
          <div className="images">
            <img src={example1}/>
            <img src={example2}/>
            <img src={example3}/>
          </div>
        </div>
        <h3>
          Lahendus:
        </h3>
        <form onSubmit={this.onSubmit}>
          <div className={"row"}>
            <label htmlFor="username">Username</label>
            <input value={this.state.username} onChange={this.onChange} name="username" type="text"/>
          </div>
          <div className={"row"}>
            <label htmlFor="age">Age</label>
            <input value={this.state.age} onChange={this.onChange} name="age"  type="number"/>
          </div>
          <div className={"row"} style={{justifyContent: "flex-end"}}>
            <button>Send</button>
          </div>
        </form>

        {
          this.state.responseText &&
          <div className={"response"}>
            {this.state.responseText}
          </div>
        }

      </div>
    );
  }
}

export default Test3;