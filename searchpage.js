$(document).ready(function(){
 $.ajaxSetup({ cache: false });
 // on clicking the search animate it to go up
 $("#search").click(function(){
        $('#roleoLogo').hide("slow");
     
    });
  $('#search').keyup(function()
  {  
    $('#result').html('');
    var fromSearch = $('#search').val();
    var expression = new RegExp(fromSearch, "i");    
    $.getJSON('data.json', function(data){
      $.each(data, function(key, value){
        if (value.product_name.search(expression) != -1 || value.seller.search(expression) != -1){
          $('#result').append(
            '<li class = "list-group-item"> <img src = "" '+ value.image + ' height= "10%" width = "10%" class = "img-thumbnail img-fluid" />' +value.product_name+ '| <span class= "text-muted">' + value.seller + '</span></li>'
            );
        }
      });
    });
});
});
