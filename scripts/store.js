/* global Item */

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
    // try {
    //   Item.validateName(name);
    //   console.log(name);
    //   this.items.push(Item.create(name, id));
    // } catch(e) {
    //   console.log(e.message);
    // }
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  // const findAndToggleChecked = function(id) {
  //   const item = this.findById(id);
  //   item.checked = !item.checked;
  // };

  const findAndDelete = function(id) {
    //this.items = this.items.filter(item => item.id !== id);
    let item = this.items.find(item => item.id == id);
    let itemIndex = this.items.indexOf(item);
    let newList = item.splice(itemIndex);
    
  };

  // const findAndUpdateName = function(id, name) {
  //   try {
  //     Item.validateName(name);
  //     const item = this.findById(id);
  //     item.name = name;
  //   } catch(e) {
  //     console.log('Cannot update name: ' + e.message);
  //   }
  // };

  const findAndUpdate = function(id, newData) {
    //let item = this.findById('cje7elhry00280k3mrljhz79o');
    let item = this.items.find(item => item.id == id);
    item.name = newData.name;
  
  }
  const findAndCheck = function(id){
    let item = this.items.find(item => item.id == id);
    if(item.checked === false){
      item.checked = true;
    }else {
      item.checked = false;
    }
  }


  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',

    addItem,
    findById,
    // findAndToggleChecked,
    findAndDelete,
    findAndUpdate,
    // findAndUpdateName,
    toggleCheckedFilter,
    setSearchTerm,
    findAndCheck
  };
  
}());
