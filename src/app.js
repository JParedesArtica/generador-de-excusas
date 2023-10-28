/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  function generateExcuse() {
    let who = ["The dog", "My grandma", "His Turtle", "Mi bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let whoIndex = Math.floor(Math.random() * who.length);
    let actIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return who[whoIndex].concat(
      " ",
      action[actIndex],
      " ",
      what[whatIndex],
      " ",
      when[whenIndex]
    );
  }
};
