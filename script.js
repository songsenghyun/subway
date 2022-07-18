$(document).ready(function(){
    
    $("#slide_bt3>li").click(function(){ 
     $(this).animate({width:20 },300)
     $(this).siblings().animate({width:10},300)
     $(this).css({"background-color":"yellow"})
     $(this).siblings().css({"background-color":"gray"})
      
  })
       
       $("#slide_bt3>li:nth-child(1)").click(function(){  
         $("#slide3").animate({left:0})
      
        })
           $("#slide_bt3>li:nth-child(2)").click(function(){  
              $("#slide3").animate({left:-270})
        })
        $("#slide_bt3>li:nth-child(3)").click(function(){  
          $("#slide3").animate({left: -540})
        })
        $("#slide_bt2 li:nth-child(1)").click(function(){ 
      $(" #slide>#slide_box>#slide").animate({left:0},300)
        })


        $("#slide_bt2 li:nth-child(2)").click(function(){ 
      $(" #slide>#slide_box>#slide").animate({left:"-100%"},300)
        })       
        $("#slide_bt2 li:nth-child(3)").click(function(){ 
      $(" #slide>#slide_box>#slide").animate({left:"-200%"},300)
        })

        $("#slide_bt2 li").click(function(){  
          $(this).animate({width:30 },300)
     $(this).siblings().animate({width:20},300)
          $(this).css({"background-color":"yellow"})
     $(this).siblings().css({"background-color":"gray"})
      })
  })