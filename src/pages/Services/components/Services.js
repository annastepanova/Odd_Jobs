import React from "react";
import styles from "../css/services.module.css";
import { Link } from "react-router-dom";

class Services extends React.Component {
  state = {
    jobCategoryImg: [],
    categoriesImgSelect: [],

    jobCategoriesImg: {
      jobImages: [
        {
          title: "House_Cleaning",
          url:
            "https://leo.nyc3.digitaloceanspaces.com/oddjobs/cleaning tile.png"
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
      <>
        <h1 className={styles.services_title}>All Odd Jobs</h1>
        {/* <Link to='/contractors'> */}
        <div className={styles.all_services_img}>
          {this.state.jobCategoriesImg.jobImages.map((item, i) => (
            <div key={i} className={styles.Job_img}>
              <img
                onClick={this.handleClickImg(item.title)}
                className={styles.Cada_img}
                src={item.url}
                alt={item.title}
              />
            </div>
          ))}
        </div>
        {/* </Link> */}
        <footer className={styles.services_footer}>
          <p className={styles.services_footer_text}>
            {" "}
            Conditions of UsePrivacy 2019, Odd Jobs, Inc.{" "}
          </p>
        </footer>
      </>
    );
  }
}

export default Services;
