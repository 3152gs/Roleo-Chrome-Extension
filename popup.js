

console.log("Into the javascript file");

$(document).ready(function(){
 $.ajaxSetup({ cache: false });
  $('#search').keyup(function()
  {
   console.log("Into the keyup function");
    $('#result').html('');

    var fromSearch = $('#search').val();
    var expression = new RegExp(fromSearch, "i");
    console.log(fromSearch);
    $.getJSON('data.json', function(data){

      $.each(data, function(key, value){
        if (value.name.search(expression) != -1 || value.location.search(expression) != -1){
          $('#result').append(
            '<li class = "list-group-item"> <img src = "" '+ value.image + ' height= "40" width = "40" class = "img-thumbnail" />' +value.name+ '| <span class= "text-muted">' + value.location + '</span></li>'
            );

        }
          // Hide search contents
         

      });
    });
  });
});

