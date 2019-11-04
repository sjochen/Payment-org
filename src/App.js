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
      todosPerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  render() {
    const { pay, currentPage, todosPerPage } = this.state;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = pay.slice(indexOfFirstTodo, indexOfLastTodo);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pay.length / todosPerPage); i++) {
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
        {currentTodos.map(pay => (
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
