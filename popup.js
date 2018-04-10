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
    $.getJSON('~Desktop/Chrome Extension/data.json', function(data){
      $.each(data, function(key, value){
        if (value.name.search(expression) != -1 || value.location.search(expression) != -1){
          $('#result').append(
            '<li class = "list-group-item"> <img src = "" '+ value.image + ' height= "40" width = "40" class = "img-thumbnail" />' +value.name+ '| <span class= "text-muted">' + value.location + '</span></li>'
            );
        }
      });
    });
});
});

// $(document).click(function(){ //if the document has been clicked
//     if( !($("#search").is(":hover"))&&
//     !($("#result").is(":hover"))
   
//    )//if any of these elements have the mouse then me know the user didn't click on them
// {$('#result').hide();}}//hide the boxes~Desktop/Chrome Extension/data.json