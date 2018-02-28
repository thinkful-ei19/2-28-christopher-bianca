const api = function() {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/christopher-bianca';
    const getItems = function(callback) {
        console.log('getItems ran');
        $.getJSON(BASE_URL + '/items', callback);
    }
    const createItem = function(name, callback) {
        console.log('createItem ran');
        const newItem = JSON.stringify({name});
        $.ajax({
            url: BASE_URL + '/items',
            method: 'POST',
            contentType: 'application/json',
            data: newItem,
            success: callback
        }) 
    }
    const updateItem = function(id, updateData, callback){
        console.log(`updateItem ran`);
        $.ajax({
            url: BASE_URL + '/items/' + id,
            method: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify(updateData),
            success: callback
        })
    }
    const deleteItem = function(id, callback){
        console.log(`deleteItem ran`);
        $.ajax({
            url: BASE_URL + '/items/' + id,
            method: 'DELETE',
            contentType: 'application/json',
            //data: JSON,
            success: callback
        })
    }
    return {
        getItems,
        createItem,
        updateItem,
        deleteItem
    }
}();