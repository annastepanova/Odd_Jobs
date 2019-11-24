import React, { Component } from "react";
import "../ContractorSideBarComponent/Contractor.css";
import CategoryItem from "../CategoryItem/CategoryItem";
import axios from "axios";

class ContractorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accessToken:
        "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NzQ3MTE5NzB9.WHoIaJynjO_ZaDR3c4EzHkKoBGNT513W9CRuklAEgno",
      categories: [],
      contractors: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3000/job_categories/${this.props.id}/contractors`,
        {
          headers: {
            Authorization: `Bearer ${this.state.accessToken}`
          }
        }
      )
      .then(res => this.setState({ contractors: res.data.contractors }));
  }

  componentWillMount() {
    axios
      .get(`http://localhost:3000/job_categories`, {
        headers: {
          Authorization: `Bearer ${this.state.accessToken}`
        }
      })
      .then(res => {
        this.setState({
          categories: res.data
        });
      })
      .catch(error => console.log(error));
  }

  loadContractors = category_id => {
    axios
      .get(`http://localhost:3000/job_categories/${category_id}/contractors`, {
        headers: {
          Authorization: `Bearer ${this.state.accessToken}`
        }
      })
      .then(res => {
        this.setState({ contractors: res.data.contractors });
      });
  };

  render() {
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
              loadContractors={this.loadContractors.bind(this)}
            />
          ))}
        </ul>
        <div>
          {this.state.contractors &&
            this.state.contractors.map(contractor => {
              return (
                <div>
                  <p>{contractor.first_name}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ContractorPage;
