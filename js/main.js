(function(){
  var items = document.querySelectorAll('details[name="projects"]');
  items.forEach(function(d){
    d.addEventListener('toggle', function(){
      if (!d.open) return;
      items.forEach(function(o){ if (o !== d) o.open = false; });
    });
  });
})();
