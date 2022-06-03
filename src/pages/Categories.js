import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../contexts/quizContext";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  let Navigate = useNavigate();

  let { setQuiz } = useQuiz();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/categories");
        setCategories(data.categories);
      } catch (error) {
        console.error(error);
      }
    })();
    setQuiz([]);
  }, []);

  return (
    <div>
      <div className="heading-md text-centered"> Quiz Categories</div>
      <div className="quiz-categories">
        {categories.map((item) => {
          return (
            <div
              key={item._id}
              onClick={() => Navigate(`/rules/${item.categoryName}`)}
              className="card card-basicHeader"
            >
              <img className="img-responsive" src={item.img} alt="quiz-img" />
              <div className="header">
                <p className="heading-sub">{item.categoryName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
