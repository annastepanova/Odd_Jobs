import React from 'react'
import customModal from './customModal.css'

const ModalPayment = props => {
    return(
        <>
        <button onClick={props.closeModal} className='closeModalcss'>X<i className="modalcss"></i></button>
        <br />
        <div className='modalAligment'>
        <h1>Thank you, your payment has been accepted.</h1>
        <br />
        <h1>An email of your receipt has been sent to you.</h1>
        <br/>
        <img src="like.png" alt="like" className="likecss" />
        <br/><br/>
        <button className='writeareviewbotton'>Write a Review</button>
        <br/>
        </div>
        </>
    )
}

export default ModalPayment