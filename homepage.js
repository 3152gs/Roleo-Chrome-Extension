$(document).ready(function(){
 $.ajaxSetup({ cache: false });
  $.getJSON('data.json', function(data){
    $.each(data, function(key, value){
      $('#product_list').append(
        '<li class = "list-group-item"> <div class="card" ><div class="card-body"> <h4 class="card-title">'+ value.product_name + '</h4><h6 class="card-subtitle text-muted"> ' +value.seller+ '</h6> </div><img src="' + value.image + '" class="img-fluid rounded"><div class="card-body"><p class="card-text">' + value.comment + '</p><a href="' + value.comment_url + '" class="btn btn-primary">Full Report</a></div></div></li>'
        );
    });
  });
});  


// <li class="list-group-item">
//   <div class="card" >
//       <div class="card-body">
//           <h4 class="card-title">Nike Air Max</h4>
//           <h6 class="card-subtitle text-muted">Nike</h6>
//       </div>
//           <img src="17women31631.jpg" class="img-fluid rounded">
//       <div class="card-body">
//           <p class="card-text">The sun disappeared behind the horizon today. Experts claim it could be gone for good!</p>
//           <a href="#" class="btn btn-primary">Full Report</a>
//       </div>
//   </div>
//   </li>


// <li class="list-group-item">
//                 <div class="card" >

//                     <!-- Heading -->
//                     <div class="card-body">
//                         <h4 class="card-title">Nike Air Max</h4>
//                         <h6 class="card-subtitle text-muted">Nike</h6>
//                     </div>

//                         <!-- Image -->
//                         <img src="17women31631.jpg" class="img-fluid rounded">

//                         <!-- Text Content -->
//                     <div class="card-body">
//                         <p class="card-text">The sun disappeared behind the horizon today. Experts claim it could be gone for good!</p>
//                         <a href="#" class="btn btn-primary">Full Report</a>
//                     </div>

//                 </div>
//                 </li>