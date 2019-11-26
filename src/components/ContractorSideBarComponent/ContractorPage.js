import React, { Component } from "react";
import "../ContractorSideBarComponent/Contractor.css";
import CategoryItem from "../CategoryItem/CategoryItem";
import axios from "axios";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NzQ3OTg2MzF9.w4K_kglBkWqz9K3oNAKNNJfwPmvvD3Y6XwuErVcD6us"
const headers = { Authorization: `Bearer ${ACCESS_TOKEN}` }
class ContractorPage extends Component {
    state = { categories: [], contractors: [] }

    componentDidMount() {
        this.fetchLayout()
    }

    fetchLayout = async () => {
        const { match } = this.props;
        const requests = [
            axios.get(`http://localhost:3000/job_categories/${match.params.id}/contractors`, { headers }),
            axios.get('http://localhost:3000/job_categories', { headers })
        ];
        const [
            { data: contractorsData },
            { data: categories }
        ] = await Promise.all(requests);
        this.setState({ categories, contractors: contractorsData.contractors })
    }


    loadContractors = category_id => {
        axios
            .get(`http://localhost:3000/job_categories/${category_id}/contractors`, {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                }
            })
            .then(res => {
                this.setState({ contractors: res.data.contractors });
            });
    };

    render() {
        console.log({contractors_from_state: this.state.contractors})
        return (
            <div className="filter-components">
                <ul>
                    <li className="filter-header">Filters:</li>
                </ul>
                <ul className="rating-box">
                    <li>Ratings</li>
                    <div className="star">
                        <li>★</li>
                        <li>★★</li>
                        <li>★★★</li>
                        <li>★★★★</li>
                        <li>★★★★★</li>
                    </div>
                </ul>
                <ul className="services-box">
                    <li className="category_title">Services</li>
                    {this.state.categories.map((category, index) => (
                        <CategoryItem
                            key={index}
                            category={category}
                            loadContractors={this.loadContractors}
                        />
                    ))}
                </ul>
                <div>
                    {this.state.contractors &&
                        this.state.contractors.map(contractor => {
                            return (
                                <div key={contractor.id}>
                                    <p>{contractor.first_name} {contractor.last_name}</p>
                                    <img src={contractor.contractor_image} alt="contractor" />
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default ContractorPage;
