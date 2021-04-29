

// $(()=>{ // similar to document ready block
  var clicks = 0;
  //increment
    $('.btn-info').click(function(){
      clicks++;
      $('.display').html(clicks);
    });
    //Decrement
    $('.btn-warning').click(function(){
      clicks--;
      $('.display').html(clicks);

  });
// });
