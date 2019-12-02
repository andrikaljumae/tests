import React from "react";
import PropTypes from "prop-types";

class Test4 extends React.PureComponent{
  state = {
    product: null,
    error: null,
    similar: [],
  };

  /** Fetch products */
  componentDidMount() {
    this.fetchRandom();
  }

  fetchRandom = () => {
    fetch("/api/v1/products/random")
    .then( res =>{
      return res.json();
    })
    .then(product =>{
      this.setState({
        similar: [],
        product,
        error: null,
      });
    })
    .catch( () =>{
      this.setState({
        error: "Not implemented!"
      });
    });
  }

  handleClick = (_id) => {
    fetch(`/api/v1/products/similar/${_id}`)
    .then( res =>{
      return res.json();
    })
    .then(similar =>{
      this.setState({
        similar,
        error: null,
      });
    })
    .catch( () =>{
      this.setState({
        error: "Not implemented!"
      });
    });
  };

  render(){
    return (
      <div>
        <div className={"description"}>
          <h3>
            Ülesanne 4:
          </h3>
          <p>
            1. Sellest taskis tuleb muuta <code>product.router.js</code> faili. Frontendis ei pea midagi muutma!
            <br />
            2. API kirjeldus <a href={"http://localhost:3000/api-docs/#/default/getSimilarProducts"}>http://localhost:3000/api-docs/#/default/getSimilarProducts</a>
            <br />
            3. Täienda seda funktsiooni <code> router.get("/similar/:productId", (req, res)=> ... ) </code>
            <br />
            4. <code>getSimilarProducts</code> tagastab listi tooteid, mis on samast brandist. Näiteks, kui tegu on "Samsung" mobiiliga,
            siis peab tagastama kõik Samsungi telefonid.
            <br />
            5. <a href={"https://mongoosejs.com/docs/queries.html"}>https://mongoosejs.com/docs/queries.html</a>
            <br />
            6. <a href={"https://expressjs.com/en/guide/routing.html"}>https://expressjs.com/en/guide/routing.html</a>
            <br />
            7. ...
          </p>

        </div>

        <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
          {this.state.product && <Product onClick={this.handleClick} {...this.state.product} /> }
          <button onClick={this.fetchRandom} className={"btn--info"}>
            New random
          </button>
        </div>

        <h3>
          Similar products
        </h3>

        <div style={{display: "flex", justifyContent: "space-around"}}>
          {
            this.state.similar.map( data => {
              return <Product  key={data._id} {...data}/>;
            })
          }
        </div>

        { this.state.similar.length === 0 &&
          <div className={"alert"}>
            Clicked "find similar"? {this.state.error}
          </div>
        }

      </div>
    );
  }
}

const Product = ({_id, title, price, onClick}) => (
  <div key={_id} className={"box"} style={{
    width: 200
  }}>
    {title}
    <div style={{margin:"25px 0", color: "orange", fontWeight: 500}}>
      ${price}
    </div>
    {onClick &&
      <button title={"find"} onClick={() => onClick(_id)}>
        Find similar
      </button>
    }
  </div>
);

Product.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default Test4;

