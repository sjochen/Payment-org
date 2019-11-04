import React, { Component } from "react";
import PaymentCard from "./components/PaymentCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pay from "./pay.json";
import logo from "./components/Images/paymerang.png"
class App extends Component {

  constructor() {
    super();
    this.state = {
      pay,
      currentPage: 1,
      payeesPerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  render() {
    const { pay, currentPage, payeesPerPage } = this.state;

    // Logic for displaying payees
    const indexOfLastPayee = currentPage * payeesPerPage;
    const indexOfFirstPayee = indexOfLastPayee - payeesPerPage;
    const currentPayees = pay.slice(indexOfFirstPayee, indexOfLastPayee);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pay.length / payeesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <span tabIndex="1"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </span>
      );
    });
    return (
      <Wrapper>
        <Title><img className="payImg" src={logo} alt="Logo" /></Title>
        {/* Map over the json and pull out the desired data */}
        {currentPayees.map(pay => (
          <PaymentCard
            Payee={pay.Payee}
            Payment={pay.Payment}
            Remittance={pay.Remittance}
          />
        ))}
        <div>
          <ul className="pagination">
            {renderPageNumbers}
          </ul>
        </div>
      </Wrapper>
    );
  }
}

export default App;
