import React from "react";

import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services/components/Services";
import Support from "./pages/Support";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import SearchResults from "./pages/SearchResults";
import ContractorPage from "./components/ContractorSideBarComponent/ContractorPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    categoriesImgSelect: [],
    contractors: [],
    jobCategoriesImg: {
      jobImages: [
        {
          title: "House_Cleaning",
          url:
            "https://leo.nyc3.digitaloceanspaces.com/oddjobs/cleaning tile.png",
          id: 1
        },
        {
          title: "Home_Repairs",
          url:
            "https://leo.nyc3.digitaloceanspaces.com/oddjobs/home_repairs_tile.png"
        },
        {
          title: "Moving",
          url: "https://leo.nyc3.digitaloceanspaces.com/oddjobs/moving_tile.png"
        },
        {
          title: "House_Painting",
          url:
            "https://leo.nyc3.digitaloceanspaces.com/oddjobs/house_painting_tile.png"
        },
        {
          title: "Electrical",
          url:
            "https://leo.nyc3.digitaloceanspaces.com/oddjobs/Electrical_tile.png"
        },
        {
          title: "Plumbing",
          url:
            "https://leo.nyc3.digitaloceanspaces.com/oddjobs/plumbing_tile.png"
        },
        {
          title: "Mounting",
          url:
            "https://leo.nyc3.digitaloceanspaces.com/oddjobs/mounting_tile.png"
        },
        {
          title: "Furniture_Assembly",
          url:
            "https://leo.nyc3.digitaloceanspaces.com/oddjobs/furniture_assembly_tile.png"
        },
        {
          title: "Babysitting",
          url:
            "https://leo.nyc3.digitaloceanspaces.com/oddjobs/babysitting_tile.png"
        },
        {
          title: "Lawn_Care",
          url:
            "https://leo.nyc3.digitaloceanspaces.com/oddjobs/Lawn_care_tile.png"
        },
        {
          title: "Carpentry",
          url:
            "https://leo.nyc3.digitaloceanspaces.com/oddjobs/carpentry_tile.png"
        },
        {
          title: "Pet_Care",
          url:
            "https://leo.nyc3.digitaloceanspaces.com/oddjobs/pet_care_tile.png"
        },
        {
          title: "Pool_Cleaning",
          url:
            "https://leo.nyc3.digitaloceanspaces.com/oddjobs/pool_cleaning_tile.png"
        },
        {
          title: "Car_Wash",
          url:
            "https://leo.nyc3.digitaloceanspaces.com/oddjobs/car_was_tile.png"
        },
        {
          title: "Run_Errands",
          url:
            "https://leo.nyc3.digitaloceanspaces.com/oddjobs/run_errands_tile.png"
        }
      ]
    }
  };

  handleClickImg = categorySelected => () => {
    const categoriesImgSelect = this.state.jobCategoriesImg.jobImages.find(
      theCategory => theCategory.title === categorySelected
    );

    this.setState({
      categoriesImgSelect
    });
    console.log(`has seleccionado la categoria: ${categorySelected}`);
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/services"
              component={() => (
                <Services
                  handleClick={this.handleClickImg}
                  jobCategoriesImg={this.state.jobCategoriesImg}
                />
              )}
            />
            <Route exact path="/services/support" component={Support} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/results" component={SearchResults} />
            <Route
              exact
              path="/contractors"
              component={() => (
                <ContractorPage id={this.state.categoriesImgSelect.id} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
