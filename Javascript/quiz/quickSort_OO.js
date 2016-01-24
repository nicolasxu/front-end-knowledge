/*
	Quicksort is generally considered to be efficient and fast and 
	so is used by V8 as the implementation for Array.prototype.sort() 
	on arrays with more than 23 items. For less than 23 items, 
	V8 uses insertion sort2. Merge sort is a competitor of quicksort as 
	it is also efficient and fast but has the added benefit of being stable. 
	This is why Mozilla and Safari use it for their implementation of 
	Array.prototype.sort().
*/

function QuickSort() {

	function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
	}

	function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
	}

	function quickSort(items, left, right) {

    var index;

    if (items.length > 1) {

        left = typeof left !== "number" ? 0 : left;
        right = typeof right !== "number" ? items.length - 1 : right;

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
	}

	return quickSort;
}

var qs = new QuickSort();

var result = qs([1,2,1,2,3,4,5,4,3,2]);

console.log(result);