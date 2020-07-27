// Create the list of companies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CompanyCard from './CompanyCard';

// Create a loop, that will create many company cards
class ListOfCompanies extends Component {
  render() {
    const arr = [];
    console.log(
      'This is companyListArray in listOfCompanies: ',
      this.props.companyListArray
    );
    console.log(
      'This is localStorage in listofCompanies:  ',
      localStorage.companyListArray
    );
    for (let i = 0; i < this.props.companyListArray.length; i += 1) {
      arr.push(
        <CompanyCard key={i} companyName={this.props.companyListArray[i]} />
      );
    }
    return (
      <div>
        List of Companies
        {arr}
      </div>
    );
  }
}

export default ListOfCompanies;
