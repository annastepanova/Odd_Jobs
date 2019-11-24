import React from "react";
import styles from "../css/services.module.css";
import { Link } from "react-router-dom";

class Services extends React.Component {
  state = {
    jobCategoryImg: [],
    categoriesImgSelect: []
  };

  render() {
    return (
      <>
        <h1 className={styles.services_title}>All Odd Jobs</h1>
        <Link to="/contractors">
          <div className={styles.all_services_img}>
            {this.props.jobCategoriesImg.jobImages.map((item, i) => (
              <div key={i} className={styles.Job_img}>
                <img
                  onClick={this.props.handleClick(item.title)}
                  className={styles.Cada_img}
                  src={item.url}
                  alt={item.title}
                />
              </div>
            ))}
          </div>
        </Link>
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
