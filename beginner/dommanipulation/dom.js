const heading = document.getElementById("main-heading");

heading.textContent = "Updated Heading";

const addItemBtn = document.querySelector(".add-item");
const list = document.querySelector(".dynamic-list");

addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    list.appendChild(newItem)
})