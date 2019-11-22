import React from 'react'
import '../Home.css'


export default function Home() {
  return (
    <>
    <div className="home-logo">
      <img src="OddJobslogo.png" alt="" />
    </div>
    <div className="home-div1">
      <div className="home-text">
        <h2>The spot to connect customers with contractors.</h2>
      </div>
      <div className="home-search">
        <input className="home-searchbar"type="text" placeholder="What is your Odd Job?                                          | 33127"/>
        <button className="home-searchbutton"><img src="./search-icon.svg" alt=""/></button>
      </div>
    </div>
    </>
  )
}
