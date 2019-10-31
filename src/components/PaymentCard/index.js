import React from "react";
import "./style.css";

function PaymentCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <h3><strong>Payee:</strong></h3>
            <p><strong>Name:</strong> {props.Payee.Name}</p>
            <p><strong>Fax:</strong> {props.Payee.Fax}</p>
            <p><strong>Phone:</strong> {props.Payee.Phone}</p>
            <p><strong>Address:</strong> {props.Payee.Address.Address1}</p>
            <p><strong>City:</strong> {props.Payee.Address.City}</p>
            <p><strong>State:</strong> {props.Payee.Address.StateOrProvince}</p>
            <p><strong>Country:</strong> {props.Payee.Address.Country}</p>
            <p><strong>Postal Code:</strong> {props.Payee.Address.PostalCode}</p>
            <p><strong>Attention:</strong> {props.Payee.Attention}</p>
            <p><strong>Submission Date:</strong> {props.Payee.SubmissionDate}</p>


          </li>
          <li>
            <h3><strong>Payment:</strong></h3>
            <p><strong>PAN:</strong> {props.Payment.PAN}</p>
            <p><strong>CVV:</strong> {props.Payment.CVV}</p>
            <p><strong>Exp:</strong> {props.Payment.Exp}</p>
          </li>
          <li>
            <h3><strong>Remittance:</strong></h3>
            {props.Remittance.map((name, index) => {
              return (
                <div>
                  <p><strong>Payor Name:</strong> {name.PayorName}</p>
                  <p><strong>Payor ID:</strong> {name.PayorId}</p>
                  <p><strong>Invoice No.:</strong> {name.InvoiceNo}</p>
                  <p><strong>Description:</strong> {name.Description}</p>
                  <p><strong>Amount:</strong> {name.Amount}</p>
                </div>
              )
            })}
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
