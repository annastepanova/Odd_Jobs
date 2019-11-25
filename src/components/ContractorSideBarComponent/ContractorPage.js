import React, { Component } from "react";
import "../ContractorSideBarComponent/Contractor.css";
import CategoryItem from "../CategoryItem/CategoryItem";
import axios from "axios";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NzQ3MTU1NzB9.aRRT8hn0TDF-nAkO901-Qcp3b81ajA12RiDDXVIcj0Q"
const headers = { Authorization: `Bearer ${ACCESS_TOKEN}` }
class ContractorPage extends Component {
    state = { categories: [], contractors: [] }

    componentDidMount() {
        this.fetchLayout()
    }
    handleSortRating = event => {
        const { contractors } = this.state
        const sortedContractors = contractors.sort((a, b) => {
            return b.rating - a.rating
        })

        this.setState({ contractors: sortedContractors })
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
        console.log(this.state.contractors)
        return (
            <div className="filter-components">
                <ul>
                    <li className="filter-header">Filters:</li>
                </ul>
                <div className="flex-box">
                    <div className="container1">
                        <ul className="rating-box">
                            <li className="rating-header">Ratings</li>
                            <div className="star">
                                <li className="high" onClick={this.handleSortRating}>Highest Rated</li>
                                <li className="low">Lowest Rated</li>


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
                    </div>
                    <div className="container2">
                        {this.state.contractors &&
                            this.state.contractors.map(contractor => {
                                return (
                                    <div className="card">
                                        <div className='image-div'>
                                            <img src={contractor.contractor_image} alt="contractor" className="img" />
                                        </div>
                                        <div className='text-div'>
                                            <div className="contractor-name1">
                                                <p>{contractor.first_name} {contractor.last_name}</p>
                                                <br />
                                                <p classname="paragraph-image">{contractor.background_check ? <img src="https://nexusipe-resource-exchange.s3.amazonaws.com/pictures/ambassador_large.png" className="badge"></img> : ""}</p>
                                            </div>
                                            <br />
                                            {contractor.ratings.map((value, index) => (
                                                <>

                                                    <div>{value.value}</div>
                                                    <br />

                                                    <div>{value.review_text}</div>
                                                    <br />
                                                    <div className="profile-btn-container">
                                                        <button className="profile-btn">View Profile</button>
                                                    </div>
                                                    <br />

                                                </>
                                            ))}

                                        </div>
                                    </div>
                                );
                            })}
                    </div>


                </div>


            </div >
        );
    }
}

export default ContractorPage;
