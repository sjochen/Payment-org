import React, { Component } from "react";
import PaymentCard from "./components/PaymentCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pay from "./pay.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      pay
    };
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }



  render() {
    return (
      <Wrapper>
        <Title>List Of Payees</Title>
        {this.state.pay.map(pay => (
          <PaymentCard
            Payee={pay.Payee}
            Payment={pay.Payment}
            Remittance={pay.Remittance}
          />
        ))};
      </Wrapper>
    );
  }
}

export default App;
