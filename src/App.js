import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Services from "./pages/Services/components/Services";
import Support from "./pages/Support";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import SearchResults from "./pages/SearchResults";
import ContractorPage from "./components/ContractorSideBarComponent/ContractorPage";
import ContractorProfile from "./pages/ContractorProfile"
import "./App.css";
import Calendar from "./pages/Calendar";

class App extends React.Component {
  state = {
    categoriesImgSelect: [],
    contractors: [],
    categories: []
  };

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const { data } = await axios.get("http://localhost:3000/job_categories", {
      headers: {

        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NzQ3OTg2MzF9.w4K_kglBkWqz9K3oNAKNNJfwPmvvD3Y6XwuErVcD6us'
      }
    });
    this.setState({ categories: data });
  };

  handleClickImg = categorySelected => () => {
    const categoriesImgSelect = this.state.jobCategoriesImg.jobImages.find(
      theCategory => theCategory.title === categorySelected
    );

    this.setState({
      categoriesImgSelect
    });
  };

  render() {
    const { categories } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/services"
              component={() => <Services categories={categories} />}
            />
            <Route exact path="/services/support" component={Support} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/results" component={SearchResults} />
           <Route exact path="/calendar" component={Calendar} />
            

            <Route
              exact
              path="/contractors/:id"
              component={ContractorPage}
            />
            <Route
              exact
              path="/contractors/:id/:profile"
              component={ContractorProfile}
            />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
