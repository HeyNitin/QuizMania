import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: "3fe39675-140b-4075-82f3-949a4dc95d18",
    title: "Maths Trivia",
    totalScore: 3,
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2468534d",
        question: "What number doesn’t have its own Roman numeral?",
        options: ["0", "8", "16", "64"],
        answer: "0",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "What is the square root of 144?",
        options: ["5", "12", "20", "25"],
        answer: "12",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec54",
        question: "What is five squared?",
        options: ["20", "4", "25", "50"],
        answer: "25",
      },
    ],
    categoryName: "Maths Trivia",
  },
  {
    _id: "3fe39675-140b-4075-82f3-949a4dc95d18",
    title: "Bollywood",
    totalScore: 3,
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2468934d",
        question: "In the 1964 Dosti, what is the name of the blind character?",
        options: ["Shyam", "Ranu", "Dinu", "Mohan"],
        answer: "Mohan",
      },
      {
        _id: "93664683-d515-44bf-80c4-cf52c279aeb6",
        question: "Before Akshay Kumar became an actor, he worked as a:",
        options: ["Model", "Clerk", "Reporter", "Waiter"],
        answer: "Waiter",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dkb109ec54",
        question:
          "Which of these actors had never appeared in television advertisements until 2015?",
        options: [
          "Anil Kapoor",
          "Shah Rukh Khan",
          "Ajay Devgun",
          "Akshay Kumar",
        ],
        answer: "Anil Kapoor",
      },
    ],
    categoryName: "Bollywood",
  },
  {
    _id: "3fe39675-140b-4075-82f3-949a4dc95d18",
    title: "Hollywood",
    totalScore: 3,
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2469534d",
        question: "Which 1959 film won 11 Oscars?",
        options: [
          "Ben Hur",
          "Anatomy of a Murder",
          "The Diary of Anne Frank",
          "Room at the Top",
        ],
        answer: "Ben Hur",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c579aeb6",
        question:
          "Which 1985 film had the tagline “He’s the only kid ever to get into trouble before he was born”?",
        options: [
          "Back to the Future",
          "The Colour Purple",
          "The Clue",
          "The Breakfast Club",
        ],
        answer: "Back to the Future",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab209ec54",
        question:
          " In which James Bond film was there the following exchange: 'You expect me to talk?' 'No, Mr Bond, I expect you to die!'?",
        options: [
          "Thunderball",
          "A view to a kill",
          "Goldfinger",
          "Live and Let die",
        ],
        answer: "Goldfinger",
      },
    ],
    categoryName: "Hollywood",
  },
];
