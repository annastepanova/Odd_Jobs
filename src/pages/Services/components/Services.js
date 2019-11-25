import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "../css/services.module.css";


class Services extends React.Component {
  state = {
    jobCategoryImg: [],
    categoriesImgSelect: []
  };

  handleImageClick = categoryId => () => {
    const { history } = this.props;
    history.push(`/contractors/${categoryId}`)
  }

  render() {
    const { categories } = this.props;
    return (
      <>
        <h1 className={styles.services_title}>All Odd Jobs</h1>
        <div>
          <div className={styles.all_services_img}>
            {categories.map(item => (
              <div key={item.id} className={styles.Job_img}>
                <img
                  onClick={this.handleImageClick(item.id)}
                  className={styles.Cada_img}
                  src={item.image_url}
                  alt={item.name}
                />
              </div>
            ))}
          </div>
        </div>
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

export default withRouter(Services);
