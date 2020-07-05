/*

*/

function get_feeds() {
  return document.getElementsByClassName("pedkr2u6 tn0ko95a pnx7fd3z")[0].getElementsByTagName("div")[0].getElementsByTagName("div")
}
/*
function count_feeds() {
  var feeds = get_feeds();
  var existing_feeds = 0;
  var i;
  for (i = 0; i< feeds.length; i++) 
  {
    if ( feeds[i].dataset.pagelet == undefined ) { continue;}
    else {existing_feeds ++;}
  }
  
  return existing_feeds;
}
*/

/*
function count_feeds() {
  var feeds = get_feeds();
  var existing_feeds = 0;
  feeds.forEach( function(feed) { if ( feed.dataset.pagelet == undefined ) { continue;} 
                                                         else {existing_feeds ++;}} )
  return existing_feeds;
}
*/

var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {  if (mutation.type == "childList" & mutation.target.tagName == "DIV" ) 
       {console.log(mutation.target.attributes)};
    });
  }
);

mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});

//mutationObserver.disconnect();