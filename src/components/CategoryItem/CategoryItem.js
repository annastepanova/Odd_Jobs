import React, { Component } from 'react'

class CategoryItem extends Component {

    render() {
        return (
            <li className="category_name" onClick={() => { this.props.loadContractors(this.props.category.id) }}>
                {this.props.category.name}
            </li>

        )
    }
}

export default CategoryItem
