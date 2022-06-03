import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Maths Trivia",
    img: "https://i.ibb.co/RC89Cxc/Maths.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Bollywood",
    img: "https://i.ibb.co/VvN18gR/Bollywood.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Hollywood",
    img: "https://i.ibb.co/1265xxJ/Hollywood.jpg",
  },
];
