import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {toast} from "react-toastify";

const fetchOrders = (setOrders) => {
  fetch("/api/v1/orders/")
  .then(res => {
    if (!res.ok) throw "something";
    return res.json();
  })
  .then(list => {
    setOrders(list);
    // toast.success("Tellimuste uuendamine õnnestus :)");
  })
  .catch(() => {
    alert("error happened");
    toast.error("Ei õnnestunud tellimuste pärimine");
  });
};

const useFetchOrders = () => {
  const [orders, setOrders] = useState(undefined);

  useEffect(  () => {
    fetchOrders(setOrders);
  },[]);

  return {orders, handleUpdate: () => fetchOrders(setOrders) };
};

const Orders = () => {
  const { orders, handleUpdate } = useFetchOrders();

  return (
    <div className="ds-item orders">
      <h3 className="style-2">Esitatud tellimused</h3>
      <div>
        {orders &&
          <Table
            headers={["#","Nimi","Burger", "Jook", "Loodud"]}
            rows={orders}
          />
        }
      </div>
      <button onClick={handleUpdate} style={{width: "100%"}}>Uuenda andmeid</button>
    </div>
  );
};

export default Orders;

const Table = ({headers, rows}) => {
  console.log({rows});
  return (
    <table>
      <thead>
        {headers.map(x => <th key={x}>{x}</th>)}
      </thead>
      <tbody>
        {
          rows.map( (obj,i) => (
            <tr key={obj._id}>
              <td>
                {i}
              </td>
              <td>
                {obj.fullName}
              </td>
              <td>
                {obj.burger}
              </td>
              <td>
                {obj.drink}
              </td>
              <td>{moment(obj.created).format("hh:mm:ss")}</td>
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
