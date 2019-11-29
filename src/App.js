import React, { Component } from "react";
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
import { AuthContext } from './context/AuthContext';
import Payment from "./pages/Payment"

class App extends Component {
  static contextType = AuthContext;
  state = {
    categoriesImgSelect: [],
    contractors: [],
    categories: [],
    fetched: false,
  };

  componentDidMount() {
    this.context.token && this.fetchCategories();
  }

  componentDidUpdate() {
    const { fetched } = this.state;
    !fetched && this.context.token && this.fetchCategories();
  }

  fetchCategories = async () => {
    const { data } = await axios.get("http://localhost:3000/job_categories", {
      headers: { Authorization: this.context.token }
    });
    this.setState({ categories: data, fetched: true });
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
            <Route exact path="/payment" component={Payment}/>
            <Route
              exact
              path="/category/:id"
              component={ContractorPage}
            />
            <Route
              exact
              path="/contractor/:id"
              component={ContractorProfile}
            />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
