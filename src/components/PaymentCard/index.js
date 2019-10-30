import React from "react";
import "./style.css";

function PaymentCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <h3><strong>Payee:</strong></h3>
            <p>Name: {props.Payee.Name}</p>           
            <p>Fax: {props.Payee.Fax}</p>           
            <p>Phone: {props.Payee.Phone}</p>
            <p>Address: {props.Payee.Address.Address1}</p>
            <p>City: {props.Payee.Address.City}</p>
            <p>State: {props.Payee.Address.StateOrProvince}</p>
            <p>Country: {props.Payee.Address.Country}</p>
            <p>Postal Code: {props.Payee.Address.Postalcode}</p>
            <p>Attention: {props.Payee.Attention}</p>
            <p>Submission Date: {props.Payee.SubmissionDate}</p>


          </li>
          <li>
            <h3><strong>Payment:</strong></h3>
            <p>PAN: {props.Payment.PAN}</p>
            <p>CVV: {props.Payment.CVV}</p>
            <p>Exp: {props.Payment.Exp}</p>
          </li>
          <li>
            <h3><strong>Remittance:</strong></h3>
            <p>Payor Name: {props.Remittance.PayorName}</p>
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
