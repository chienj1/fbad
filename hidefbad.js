/*

*/

function get_feeds() {
  return document.getElementsByClassName("pedkr2u6 tn0ko95a pnx7fd3z")[0].getElementsByTagName("div")[0].getElementsByTagName("div")
}

function count_feeds() {
  var feeds = get_feeds();
  var existing_feeds = 0;
  var i;
  for (i = 0; i< feeds.length; i++) 
  {
    if ( feeds[i].dataset.pagelet == undefined ) { continue;}
    else {existing_feeds ++;}
  }
  
  console.log(existing_feeds);
  return 0;
}

var timeoutID = window.setInterval( ()=>count_feeds(), 100);
window.clearInterval(timeoutID)