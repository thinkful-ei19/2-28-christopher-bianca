/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    console.log(store.items);
    // const item = store.items[0];
    // console.log('current name: ' + item.name);
    // store.findAndUpdate(item.id, { name: 'foobar' });
    // console.log('new name: ' + item.name);
    shoppingList.render();
  });
});

//store.items.push(Item.create('apples'));
