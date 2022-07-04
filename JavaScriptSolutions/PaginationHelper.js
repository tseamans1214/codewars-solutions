// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
  // page Count = # items / itemsPerPage rounded down
  this.pCount = Math.floor(this.collection.length / this.itemsPerPage);
  // The last page is the only page that will have a different amount of items
  //  if it does not divide evenly
  // The count will be the remainder of the previous division
  this.itemCountLastPage = this.collection.length % this.itemsPerPage;
  // If there is remaining items, add a page to put those items on
  if (this.itemCountLastPage != 0) {
    this.pCount++;
  }
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
  
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return this.pCount; 
  
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  // Check is index is negative or greater than page count
  if (pageIndex < 0 || pageIndex > this.pageCount()-1) {
    return -1;
  }
  // Check if pageIndex is equal to the page count (the last page)
    if (Number(pageIndex) === Number(this.pageCount()-1)) {
      // Return the item count for the last page
      return this.itemCountLastPage;
    } else { // else return itemsPerPage because all the other pages will be the same
      return this.itemsPerPage;
    }
  }

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  // Check if itemIndex is negative or greater than the collection length
  if (itemIndex < 0 || itemIndex > this.collection.length-1) {
    return -1;
  }
  var pageCounter = 0;
  // While the itemIndex is greater than the itemsPerPage
  //  subtract itemIndex by the number of itemsPerPage (aka flipping a page)
  //  add 1 to page counter
  while(itemIndex > this.itemsPerPage) {
    itemIndex = itemIndex - this.itemsPerPage;
    pageCounter++;
  }
  return pageCounter;
}
