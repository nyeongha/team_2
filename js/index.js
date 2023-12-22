
// $(document).on("click", "#wanhui", function(){
//     window.location.replace("./html/wanhui.html");
//   });

// $(document).on("click", "#hyoil", function(){
//     window.location.replace("./html/hyoil.html");
//   });

//   $(document).on("click", "#minyeong", function(){
//     window.location.replace("./html/minyeong.html");
//   });
//   $(document).on("click", "#sehun", function(){
//     window.location.replace("./html/sehun.html");
//   });
//   $(document).on("click", "#geonhui", function(){
//     window.location.replace("./html/geonhui.html");
//   });

  $(document).on("click", ".card-body", function(){
    var id = $(this).attr('id');
    window.location.replace("./html/"+id+".html");
  });

