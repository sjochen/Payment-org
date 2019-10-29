import React from "react";
import "./style.css";

function PaymentCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Payee:</strong> {Object.entries(props.Payee).map(([name, address]) => {
              return (
                <div>
                <p>Make of phone: {name}</p>
                <p>Address: {address}</p>
                </div>
              )
            })}
          </li>
          {/* <li>
            <strong>Address:</strong> {Object.keys(props.Payee.Address).map((key) => {
              return <p className="whiteSpaceNoWrap">{ props.Payee.Address[key] }</p>
            })}
          </li> */}
          <li>
            <strong>Payment:</strong> {Object.keys(props.payment).map((key) => {
              return <li className="whiteSpaceNoWrap">{props.payment[key]}</li>
            })}
          </li>
          <li>
            <strong>Remmitance:</strong>
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default PaymentCard;
