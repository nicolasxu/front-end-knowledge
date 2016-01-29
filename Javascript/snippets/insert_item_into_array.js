function insert_item_into_array() {
	var source = "http://stackoverflow.com/questions/586182/how-do-i-insert-an-item-into-an-array-at-a-specific-index";
	var arr = [0, 2, "lene", "apple"];
	arr.splice(index, 0, item_to_add) // at index, delete 0 items, and then add item_to_add
	arr.splice(2, 0, "Lene");
}