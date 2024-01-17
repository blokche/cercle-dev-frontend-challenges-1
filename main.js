import { $, $$ } from "./lib/dom";

const UPDATE_TIMEOUT = 5_000;

console.log(
  "%cYou do not need javascript. CSS is powerfull enough!",
  "color: ghostwhite; background: #c22d2d; padding: 6px 8px;"
);

$$("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});

const todo_list = $(".ex2 .todos-list");

setInterval(() => {
  const highlight_element = todo_list.querySelector(".highlight");
  if (highlight_element) {
    highlight_element.classList.remove("highlight");
  }
  const first = Math.random() > 0.5;
  if (first) {
    todo_list.querySelector("li:first-child").classList.add("highlight");
  } else {
    todo_list.querySelector("li:nth-last-child(2)").classList.add("highlight");
  }
}, UPDATE_TIMEOUT);

const exercice_five_grid = $(".ex5 .grid");

setInterval(() => {
  const items = $$(".ex5 .grid .item");
  const even = items.length % 2 === 0;
  if (even) {
    const item = document.createElement("div");
    item.classList.add("item");
    exercice_five_grid.append(item);
  } else {
    items[items.length - 1].remove();
  }
}, UPDATE_TIMEOUT);
