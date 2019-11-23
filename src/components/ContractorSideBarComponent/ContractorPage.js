import React, { Component } from 'react'
import '../ContractorSideBarComponent/Contractor.css'
import CategoryItem from '../CategoryItem/CategoryItem'
import axios from 'axios'




class ContractorPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            accessToken: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NzQ1NjA0NzZ9.awwaS43j5KzNPc0Cm6F1IfzKQ_zMThUX-MK-scd04AE",
            categories: []
        }
    }

    componentWillMount() {
        axios.get(`http://localhost:3000/job_categories`,
            {
                headers: {
                    Authorization: `Bearer ${this.state.accessToken}`
                }
            }
        )
            .then(res => {
                this.setState({
                    categories: res.data
                })
            })
            .catch(error => console.log(error));
    }

    loadContractors = (category_id) => {
        axios.get(`http://localhost:3000/job_categories/${category_id}/contractors`,
            {
                headers: {
                    Authorization: `Bearer ${this.state.accessToken}`
                }
            }
        )
            .then(res => {
                console.log(res.data)
            })
    }


    render() {
        return (
            <div className="Rob" >
                <ul>
                    <li className="filter-header">Filters:</li>

                </ul>
                <ul className="Rob1">
                    <li>Ratings</li>
                    <div className="star">
                        <li>★</li>
                        <li>★★</li>
                        <li>★★★</li>
                        <li>★★★★</li>
                        <li>★★★★★</li>
                    </div>
                </ul>
                <ul className="Rob3">
                    <li className="category_title">Services</li>
                    {this.state.categories.map((category, index) => <CategoryItem key={index} category={category} loadContractors={this.loadContractors.bind(this)} />)}

                </ul>
            </div>
        )
    }
}

export default ContractorPage