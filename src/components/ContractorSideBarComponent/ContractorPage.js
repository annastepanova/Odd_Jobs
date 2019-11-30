import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import axios from "axios";
import "../ContractorSideBarComponent/Contractor.css";
import CategoryItem from "../CategoryItem/CategoryItem";
import { AuthContext } from '../../context/AuthContext';

class ContractorPage extends Component {
    static contextType = AuthContext;

    state = { categories: [], contractors: [], fetched: false };

    componentDidMount() {
        window.scrollTo(0, 0)
        this.context.token && this.fetchLayout();
    }

    componentDidUpdate() {
        const { fetched } = this.state;
        !fetched && this.context.token && this.fetchLayout()
    }

    handleSortRating = sortDirection => () => {
        const { contractors } = this.state
        const sortedContractors = contractors.sort((a, b) => ({
            asc: a.avgRating > b.avgRating ? 1 : -1,
            dsc: a.avgRating > b.avgRating ? -1 : 1,
        }[sortDirection]))
        this.setState({ contractors: sortedContractors })
    }

    fetchLayout = async () => {
        const { match } = this.props;
        const requests = [
            axios.get(`http://localhost:3000/job_categories/${match.params.id}/contractors`, { headers: { Authorization: this.context.token } }),
            axios.get('http://localhost:3000/job_categories', { headers: { Authorization: this.context.token } })
        ];
        const [
            { data: contractorsData },
            { data: categories }
        ] = await Promise.all(requests);
        console.log({ contractorsData, categories })
        const parsedContractors = contractorsData.contractors.map(contractor => {
            const avgRating = contractor.ratings.reduce((acc, rating) => acc + rating.value, 0) / contractor.ratings.length;
            return { ...contractor, rating: contractor.ratings[0], avgRating }
        })
        this.setState({ categories, contractors: parsedContractors, fetched: true })
    }

    loadContractors = async category_id => {
        const { data } = await axios.get(`http://localhost:3000//job_categories/${category_id}/contractors`, { headers: { Authorization: this.context.token } })
        const parsedContractors = data.contractors.map(contractor => {
            const avgRating = contractor.ratings.reduce((acc, rating) => acc + rating.value, 0) / contractor.ratings.length;
            return { ...contractor, avgRating }
        })
        this.setState({ contractors: parsedContractors })
    };

    handleViewProfile = contractorProfile => {
        const { history } = this.props;
        history.push(`/contractor/${contractorProfile.id}`)
    }

    render() {
        return (
            <div className="filter-components">
                <ul>
                    <li className="filter-header">Filters:</li>
                    <Link exact to="/results"> <li className="map-filters"><img src="https://static.vecteezy.com/system/resources/previews/000/564/195/non_2x/map-pointer-icon-vector.jpg" alt="badge" className="map-marker-icon"></img></li></Link>
                </ul>
                <div className="flex-box">
                    <div className="container1">
                        <ul className="rating-box">
                            <li className="rating-header">Ratings</li>
                            <div className="star">
                                <li className="high" onClick={this.handleSortRating('dsc')}>Highest Rated</li>
                                <li className="low" onClick={this.handleSortRating('asc')}>Lowest Rated</li>

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
                                                <p className="paragraph-image">{contractor.background_check ? <img src="https://nexusipe-resource-exchange.s3.amazonaws.com/pictures/ambassador_large.png" alt="badge" className="badge"></img> : ""}</p>
                                            </div>
                                            <br />
                                            <div>{contractor.address}
                                            </div>
                                            <br />
                                            <>
                                                <div>{[...Array(Math.floor(contractor.avgRating || 0)).keys()].map(i => <img src={"https://yakimaymca.org/wp-content/uploads/2018/11/Star.png"} key={`rating${i}`} className="badge commentRating" alt="starz" />)}</div>
                                                <br />

                                                <div>{contractor.rating && contractor.rating.review_text}</div>
                                                <br />
                                                <div className="profile-btn-container">
                                                    <button
                                                        className="profile-btn"
                                                        onClick={() => this.handleViewProfile(contractor)}
                                                    >View Profile</button>
                                                </div>
                                                <br />

                                            </>

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


export default withRouter(ContractorPage);
