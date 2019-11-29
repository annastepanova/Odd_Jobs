import React, { Component } from "react";
import "./payment.css";
import Modal from "react-modal";
import ModalPayment from "./ModalPayment";
// import { Link } from "react-router-dom"

const customStyles = {
  content : {
    top                   : '40%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height: '55%',
    width: '50%'
  }
};

class Payment extends Component {
  state = {
    fullName: "",
    cardNumber: "",
    expirationDate: "",
    cardCVC: "",
    // visa: ("#visa"),
    // amex: ("#amex"),
    // mastercard: ("#mastercard")
    modalIsOpen: false
  };

  //MODAL
  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="STW Modal"
          style={customStyles}
        >
          <ModalPayment className="customModal" closeModal={this.closeModal} />
        </Modal>

        <div className="container">
          <form className="form" onSubmit={this.handleOnSubmit}>
            <h1>Payment</h1>
            <hr />
            <label htmlFor="fullName" class="fullName">
              Full Name:
            </label>
            <br />
            <input
              placeholder="Jhon Doe"
              name="fullName"
              id="fullName"
              type="fullName"
              value={this.state.fullName}
              onChange={event => this.handleChange(event)}
              autocomplete="off"
            />
            <br /> <br />
            <label htmlFor="cardNumber">Card Number: </label>
            <br />
            <input
              placeholder="1234-5678-9012-2345"
              name="cardNumber"
              id="cardNumber"
              type="cardNumber"
              value={this.state.cardNumber}
              onChange={event => this.handleChange(event)}
            />
            <br />
            <div className="cardImg-group" id="credit_cards">
              <img src="visa.jpg" alt="visa" />
              <img src="mastercard.jpg" alt="mastercard" />
              <img src="amex.jpg" alt="amex" />
            </div>
            <br /> <br />
            <label htmlFor="expirationDate">Expiration Date: </label>
            <br />
            <div className="form-group" id="expirationDate">
              <select
                className="select-cardExpirationDate"
                onChange={event => this.handleChange(event)}
              >
                <option value="01">January</option>
                <option value="02">February </option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <select
                className="select-cardExpirationDate"
                onChange={event => this.handleChange(event)}
              >
                <option value="19"> 2019</option>
                <option value="20"> 2020</option>
                <option value="21"> 2021</option>
                <option value="22"> 2022</option>
                <option value="23"> 2023</option>
                <option value="24"> 2024</option>
              </select>
            </div>
            <br />
            <br />
            <label htmlFor="cvc">Card CVC: </label>
            <br />
            <input
              placeholder="123"
              className="cardCVC"
              id="cardCVC"
              type="CardCVC"
              value={this.state.cardCVC}
              onChange={event => this.handleChange(event)}
            />
            <br />
            <br />
            <div className="button_container">
              <button onClick={this.openModal} className="submit_button submit">
                Submit Payment
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Payment;
