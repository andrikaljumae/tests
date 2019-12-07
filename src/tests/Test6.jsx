import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

class Test6 extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      fullName: "",
      burger: "",
      drink: "",
      orders: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams({
      fullName: this.state.fullName,
      burger: this.state.burger,
      drink: this.state.drink
    }).toString();

    fetch("/api/v1/orders?" + params, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).then((data) => {
      console.log(data);
      this.setState({
        orders: data
      });
    }).catch((err) => {
      console.log(err.message);
    });
  }

  render() {
    return (
      <>
        <div className={"ds" }>
          <h3>
            Ülesanne 6:
          </h3>
          <div>
            <ol>
              <li>Kasutaja sisestab väärtused vormi</li>
              <li>Kui kasutaja vajutab "Otsi", siis tehakse päring serveri. Päringuga antakse kaasa vormi andmed</li>
              <li>Serveris on REST teenus, mis otsib andmebaasist vastavad dokumendid ning tagastab need.</li>
              <li>Kasutajaliides saab andmed kätte ning kuvab esitatud tellimused ekraanil.</li>
              <li><b>Pane tähele!</b> Seda ülesannet saab lahendad ainult siis, kui ülesanne 5 on tehtud</li>
              <li>Tuleb muuta faili <code>Test6.jsx</code></li>
              <li>Tuleb muuta faili <code>orders.router.js</code></li>
            </ol>

            Näidise video <a href="/static/videos/video1.mp4">/static/videos/video1.mp4</a>

          </div>

        </div>
        <div className="ds">
          <form className="ds-item style-2" onSubmit={this.onSubmit}>
            <h3 className="style-2">Andmebaasi päring</h3>
            <div className={"row"}>
              <label htmlFor="fullName">Kliendi nimi</label>
              <input name="fullName" value={this.state.fullName} onChange={this.onChange} type="text" />
            </div>
            <div className={"row"}>
              <label htmlFor="burger">Burger</label>
              <select name="burger" value={this.state.burger} onChange={this.onChange}>
                <option value="">-</option>
                <option value="megaBurger">Megaburger</option>
                <option value="baconBurger">Peekoniburger</option>
                <option value="veganBurger">Veganburger</option>
              </select>
            </div>
            <div className={"row"}>
              <label htmlFor="drink">Jook</label>
              <select name="drink" value={this.state.drink} onChange={this.onChange}>
                <option value="">-</option>
                <option value="coke">Coca-Cola</option>
                <option value="sprite">Sprite</option>
                <option value="water">Water</option>
              </select>
            </div>
            <button style={{width: "100%"}}>
              Otsi
            </button>
          </form>
          {this.state.orders.length ?
            <Table
              rows={this.state.orders}
            /> : null
          }
        </div>
      </>
    );
  }
}
const Table = ({rows}) => {
  return (
    <table style={{borderCollapse: "collapse"}}>
      <tbody>
        {
          rows.map( (obj,i) => (
            <tr key={obj._id}  style={{
              border: "1px solid black"
            }}>
              <td style={{padding: "1rem"}}>
                {i}
              </td>
              <td style={{padding: "1rem"}}>
                {obj.fullName}
              </td>
              <td style={{padding: "1rem"}}>
                {obj.burger}
              </td>
              <td style={{padding: "1rem"}}>
                {obj.drink}
              </td>
              <td style={{padding: "1rem"}}>{moment(obj.created).format("hh:mm:ss")}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};
Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Test6;