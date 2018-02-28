/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item.name));
    shoppingList.render();
  });
});


//store.items.push(Item.create('apples'));
