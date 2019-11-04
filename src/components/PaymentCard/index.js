import React from "react";
import "./style.css";

function PaymentCard(props) {
  return (
    <div className="card">
      <div className="content">
        <h3><strong>Payee:</strong></h3>
        <p><strong>Name:</strong> {props.Payee.Name}</p>
        <p><strong>Fax:</strong> {props.Payee.Fax}  <strong>Phone:</strong> {props.Payee.Phone}</p>
        <p><strong>Address:</strong> {props.Payee.Address.Address1}</p>
        <p><strong>City/State:</strong> {props.Payee.Address.City}, {props.Payee.Address.StateOrProvince} <strong>Postal Code:</strong> {props.Payee.Address.PostalCode}</p>
        <p><strong>Country:</strong> {props.Payee.Address.Country}</p>
        <p><strong>Attention:</strong> {props.Payee.Attention}</p>
        <p><strong>Submission Date:</strong> {props.Payee.SubmissionDate}</p>
        <h3><strong>Payment:</strong></h3>
        <p className="inv"><strong>PAN:</strong> {props.Payment.PAN}</p>
        <p className="inv"><strong>CVV:</strong> {props.Payment.CVV}</p>
        <p className="inv"><strong>Exp:</strong> {props.Payment.Exp}</p>

        <h3><strong>Remittance:</strong></h3>
        {props.Remittance.map((name, index) => {
          return (
            <div className="rem">
              <p className="inv"><strong>Payor Name:</strong> <mark className="highlight">{name.PayorName}</mark></p>
              <p className="inv"><strong>Invoice No.:</strong> <mark className="highlight">{name.InvoiceNo}</mark> <strong>Payor ID:</strong> <mark className="highlight">{name.PayorId}</mark></p>
              <p><strong>Description:</strong> {name.Description}</p>
              <p className="amount"><strong>Amount:</strong> <mark className="highlight">{name.Amount}</mark></p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default PaymentCard;
