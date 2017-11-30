$(document).ready(function() {
   var wins = 0;
   var losses = 0; 
   var totalprice =0;;
   var computerchoice = Math.floor((Math.random()*102) + 19);
   var audioElement = document.createElement("audio");
   audioElement.setAttribute("src", "goldigger.mp3");

   var audiotwoElement = document.createElement("audio");
   audiotwoElement.setAttribute("src", "chapel.mp3");
  
   function tallyPrice() {
    console.log(computerchoice);
    $('#budgetprice').html(computerchoice + "K");
    // alert(computerchoice);
   };
   tallyPrice();
  var ringonenumber = Math.floor((Math.random()*12) + 1);
  var ringtwonumber = Math.floor((Math.random()*12) + 1);
  var ringthreenumber = Math.floor((Math.random()*12) + 1);
  var ringfournumber = Math.floor((Math.random()*12) + 1);
    function reset(){
      computerchoice =Math.floor(Math.random()*102+19);
      ringonenumber = Math.floor((Math.random()*12) + 1);
      ringtwonumber = Math.floor((Math.random()*12) + 1);
      ringthreenumber = Math.floor((Math.random()*12) + 1);
      ringfournumber = Math.floor((Math.random()*12) + 1);
      tallyPrice();
      totalprice= 0;
      $('#cartprice').html("");
      
      } 
    $("#ringone").on("click", function() {
      totalprice = totalprice + ringonenumber;
      console.log(totalprice);
      $('#cartprice').html(totalprice + "K");
      // alert(totalprice);
    if (totalprice === computerchoice) {
      wins++;
      $("#yeses").html(wins + " times");
      console.log(wins);
      // alert("She said yes!");
      $("#commentary").html('<h2>"Goin to the chapel and you are gonna get married!"</h2>');
      audioElement.pause();
      audiotwoElement.play();
      reset();
  
    }
      
   else if (totalprice > computerchoice) {
      losses++;
      $("#noes").html(losses + " times");
      console.log(losses);
      // alert("She said no!");
      $("#commentary").html('<h2>"Now I aint saying she a gold digger!"</h2>');
      audiotwoElement.pause();
      audioElement.play();
      reset();
      
    }
  });
    $("#ringtwo").on("click", function() {
      totalprice= totalprice + ringtwonumber;
      console.log(totalprice);
      $('#cartprice').html(totalprice + "K");
      // alert(totalprice);
    if (totalprice === computerchoice) {
      wins++;
      $("#yeses").html(wins + " times");
      console.log(wins);
      // alert("She said yes!");
      $("#commentary").html('<h2>"Goin to the chapel and you are gonna get married!"</h2>');
      audioElement.pause();
      audiotwoElement.play();
      reset();
  
    }
      
   else if (totalprice > computerchoice) {
      losses++;
      $("#noes").html(losses + " times");
      console.log(losses);
      // alert("She said no!");
      $("#commentary").html('<h2>"Now I aint saying she a gold digger!"</h2>');
      audiotwoElement.pause();
      audioElement.play();
      reset();
      
    }
  });
    $("#ringthree").on("click", function() {
      totalprice= totalprice + ringthreenumber;
      console.log(totalprice);
      $("#cartprice").html(totalprice + "K");
      // alert(totalprice);
    if (totalprice === computerchoice) {
      wins++;
      $("#yeses").html(wins + " times");
      console.log(wins);
      // alert("She said yes!");
      $("#commentary").html('<h2>"Goin to the chapel and you are gonna get married!"</h2>');
      audioElement.pause();
      audiotwoElement.play();
      reset();
  
    }
      
   else if (totalprice > computerchoice) {
      losses++;
      $("#noes").html(losses + " times");
      console.log(losses);
      // alert("She said no!");
      $("#commentary").html('<h2>"Now I aint saying she a gold digger!"</h2>');
      audiotwoElement.pause();
      audioElement.play();
      reset();
    }
  });
    $("#ringfour").on("click", function() {
      totalprice= totalprice + ringfournumber;
      console.log(totalprice);
      $("#cartprice").html(totalprice + "K");
      // alert(totalprice);
    if (totalprice === computerchoice) {
      wins++;
      $("#yeses").html(wins + " times");
      console.log(wins);
      // alert("She said yes!");
      $("#commentary").html('<h2>"Goin to the chapel and you are gonna get married!"</h2>');
      audioElement.pause();
      audiotwoElement.play();
      reset();
  
    }
      
   else if (totalprice > computerchoice) {
      losses++;
      $("#noes").html(losses + " times");
      console.log(losses);
      // alert("She said no!");
      $("#commentary").html('<h2>"Now I aint saying she a gold digger!"</h2>');
      audiotwoElement.pause();
      audioElement.play();
      reset();
    }
    });
    
});