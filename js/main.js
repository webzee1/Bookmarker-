//Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save Bookmarker
function saveBookmark(event){
  event.preventDefault();

  //Get form Values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  var bookmark = {
    name : siteName,
    url :siteUrl
  }

  //Check Bookmark is null
  if(localStorage.getItem('bookmarks') === null){
    //Init Array
    var bookmarks = [];
    // Add to Array
    bookmarks.push(bookmark);
    // Set to localStorage
    localStorage.setItem('bookmarks' , JSON.stringify(bookmarks));
    // console.log(bookmarks);
  }
  else {
    // Get Bookmark from Localstorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //Add bookmark to an Array
    bookmarks.push(bookmark);
    // Re-set back to localstorage
    localStorage.setItem('bookmarks' , JSON.stringify(bookmarks));
  }


}