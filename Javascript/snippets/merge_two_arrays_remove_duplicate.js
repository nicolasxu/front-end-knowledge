function merge_two_arrays_remove_duplicate() {
	_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
	// => [1, 2, 3, 101, 10]
}