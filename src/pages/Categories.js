import axios from "axios";
import { useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useState(
    () =>
      (async () => {
        try {
          const { data } = await axios.get("/api/categories");
          setCategories(data.categories);
        } catch (error) {
          console.error(error);
        }
      })(),
    []
  );

  return (
    <div>
      <div className="heading-md text-centered"> Quiz Categories</div>
      <div className="quiz-categories">
        {categories.map((item) => {
          return (
            <div className="card card-basicHeader">
              <img className="img-responsive" src={item.img} alt="quiz-img" />
              <div className="header">
                <a href="pages/bollywood-quizes.html" className="heading-sub">
                  {item.categoryName}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
