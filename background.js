var nb_tabs = 0;
chrome.windows.getAll({populate:true},function(windows){
  windows.forEach(function(window){
    window.tabs.forEach(function(tab){
      nb_tabs++;
    });
  });
});
document.getElementById("nb_tabs")innerHTML = nb_tabs;
