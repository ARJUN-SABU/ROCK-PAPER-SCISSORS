
document.querySelector('.bottom').addEventListener('click', function () {
  document.querySelector('.rules').classList.remove('hiddenResult');
});

document.querySelector('.rules h1').addEventListener('click', function () {
  document.querySelector('.rules').classList.add('hiddenResult');
});


var moves = ["paper", "scissors", "rock"];
var randomMove;

for(var i = 0; i<3; i++)
{
  document.querySelectorAll('.gameMove')[i].addEventListener('click', function(){
    document.querySelector('.middle').classList.add('hiddenClass');
    document.querySelector('.middle-2').classList.remove('hiddenClass');
    var youChose = event.target.classList[1];
    var currentImage = "images/icon-" + youChose + ".svg";
    document.querySelector('.yourPick').style.backgroundImage = "url(" + currentImage + ")";
    document.querySelector('.yourPick').classList.add(youChose);

    var resultText;
    var score = Number(document.querySelector('.scoreCard h1').innerHTML);





    setTimeout(function(){
      randomMove = Math.floor(Math.random()*3);



      if(youChose === "paper")
      {
        if(moves[randomMove] === "scissors")
          resultText = "YOU LOSE";
        else if(moves[randomMove] === "rock")
          resultText = "YOU WIN"
        else
          resultText = "TIE";
      }

      else if(youChose === "scissors")
      {
        if(moves[randomMove] === "rock")
          resultText = "YOU LOSE";
        else if(moves[randomMove] === "paper")
          resultText = "YOU WIN"
        else
          resultText = "TIE";
      }

      else
      {
        if(moves[randomMove] === "paper")
          resultText = "YOU LOSE";
        else if(moves[randomMove] === "scissors")
          resultText = "YOU WIN"
        else
          resultText = "TIE";
      }

      console.log(randomMove);
      console.log(moves[randomMove]);


      var botImage = "images/icon-" + moves[randomMove] + ".svg";

      document.querySelector('.botPick').style.backgroundImage = "url(" + botImage + ")";
      document.querySelector('.botPick').style.backgroundColor = "white";
      document.querySelector('.botPick').classList.add(moves[randomMove]);



      if(resultText === "YOU LOSE")
      {
        document.querySelector('.result h1').innerHTML = "YOU LOSE";
        document.querySelector('.scoreCard h1').innerHTML = score - 1;
        document.querySelector('.botPick').style.boxShadow = "0 0 60px 0 white";
      }
      else if(resultText === "YOU WIN")
      {
        document.querySelector('.result h1').innerHTML = "YOU WIN";
        document.querySelector('.scoreCard h1').innerHTML = score + 1;
        document.querySelector('.yourPick').style.boxShadow = "0 0 60px 0 white";
      }
      else
      {
        document.querySelector('.result h1').innerHTML = "TIE !";
      }


      document.querySelector('.result').classList.remove('hiddenResult');


    }, 300);






  });
}


document.querySelector('.result button').addEventListener('click', function(){
  document.querySelector('.middle').classList.remove('hiddenClass');
  document.querySelector('.middle-2').classList.add('hiddenClass');



  document.querySelector('.botPick').style.backgroundImage = "none";
  document.querySelector('.botPick').style.backgroundColor = "hsl(214, 47%, 23%)";
  document.querySelector('.botPick').classList.remove(moves[randomMove]);
  document.querySelector('.yourPick').style.boxShadow = "none";
  document.querySelector('.botPick').style.boxShadow = "none";
  document.querySelector('.result').classList.add('hiddenResult');
})
