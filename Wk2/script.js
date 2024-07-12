const shoppingList = [];

const addItemBtn = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");
const markPurchasedBtn = document.getElementById("markPurchasedBtn");
const clearListBtn = document.getElementById("clearListBtn");

addItemBtn.addEventListener("click", addItem);
itemList.addEventListener("click", markPurchased);
clearListBtn.addEventListener("click", clearList);

function addItem() {
    const itemInput = document.getElementById("itemInput");
    const newItem = itemInput.value;
    shoppingList.push(newItem);
    itemInput.value = "";
    renderList();
  }

  function renderList() {
    itemList.innerHTML = "";
    shoppingList.forEach(function(item) {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      itemList.appendChild(listItem);
    });
  }

  function markPurchased(event) {
    const clickedItem = event.target;
    clickedItem.classList.toggle("purchased");
  }
  
  function clearList() {
    shoppingList.length = 0;
    renderList();
  }
  
  renderList();



  