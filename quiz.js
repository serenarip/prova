// VARIABLES


var inattentiveness = 0;
var hyperactivity = 0;
var selfEsteem = 0;
var anxietyAndDepression = 0;


// QUESTIONS LIST

var myQuestions = [
  // QUESTION 0
  "come ti chiami?",
  // QUESTION 1
  "quanti anni hai?",
  // QUESTION 2
  "sei maschio o femmina?",
  // QUESTION 3
  "disegna te stesso",
  // QUESTION 4
  "ti capita di perdere dei passaggi mentre stai leggendo?",
  // QUESTION 5
  "pensi di piacere ai tuoi amici?",
  // QUESTION 6
   "hai la testa sempre piena di pensieri?",
  // QUESTION 7
  "sudi molto?",
  // QUESTION 8
  "riesci a seguire regole ed istruzioni?",
  // QUESTION 9
  "ti fai spesso male?",
  // QUESTION 10
  "sei spesso triste?",
  // QUESTION 11
  "vieni invitato a delle feste?",
  // QUESTION 12
  "fai fatica a concentrarti sui compiti?",
  // QUESTION 13
  "hai difficoltà ad addormentarti?",
  // QUESTION 14
  "sei bravo con le verifiche a scuola?",
  // QUESTION 15
   "senti spesso il tuo cuore battere forte?",
  // QUESTION 16
  "perdi spesso oggetti o giocattoli?",
  // QUESTION 17
  "fai fatica a stare seduto per molto tempo?",
  // QUESTION 18
  "sei intelligente?",
  // QUESTION 19
  "ti senti spesso stanco?",
  // QUESTION 20 - DRAW YOUR BRAIN
  "disegna il tuo cervello",
  // QUESTION 21
  "riesci ad organizzarti i compiti da solo?",
  // QUESTION 22
  "sei impaziente quando devi aspettare il tuo turno?",
  // QUESTION 23
  "sei bello?",
  // QUESTION 24
  "ti sei mai fatto male da solo di proposito?",
  // QUESTION 25
  "cambi spesso idea?",
  // QUESTION 26
  "muovi spesso le gambe e le mani?",
  // QUESTION 27
  "sei fiero di te stesso quando prendi un bel voto?",
  // QUESTION 28
  "sei emozionato riguardo al futuro?",
  // QUESTION 29
  "ti dimentichi spesso quello che stavi per fare?",
  // QUESTION 30
  "ti senti spesso pieno di energia?",
  // QUESTION 31
  "sei mai stato vittima di bulli?",
  // QUESTION 32
  "ti preoccupi per i tuoi voti?",
  // QUESTION 33
  "ti senti spesso perso nella tua testa?",
  // QUESTION 34
  "ti capita di arrabbiarti moltissimo?",
  // QUESTION 35
  "ti preoccupi di quello che gli altri pensano di te?",
  // QUESTION 36
  "sei nervoso riguardo alla scuola?",
  // QUESTION 37 - RESULTS
  "Inattentiveness score:"
];

// ANSWERS LIST
var myAnswers = [
  // ANSWER 0
  "<input type='text' onkeypress='sendAppear();' id='firstname'> <br>\
  <img src='./assets/send.png' id='send' style='display:none;'  class='homepage' onmouseover='hoversend();' onmouseout='nonhoversend();' onclick='firstnameSubmit(); Question2();'>"
  // ANSWER 1
  , "<input type='text' onkeypress='sendAppear();' name='age' id='age'> <br>\
  <img src='./assets/send.png' id='send' style='display:none;' class='homepage' onkeypress='sendAppear();' onmouseover='hoversend();' onmouseout='nonhoversend();' onclick='ageSubmit(); Question3();'>"
  // ANSWER 2
  , "<img class='option' onclick='boySubmit(); Question4();' src='./assets/boy.png'>\
   <img class='option' onclick='girlSubmit(); Question4();' src='./assets/girl.png'>"
  // ANSWER 3 - DRAW YOURSELF
  ,"<canvas id='canvasObj'></canvas>\
   <img src='./assets/submit.png' id='submit' class='submit' onmouseover='hoversubmit();' onmouseout='nonhoversubmit();' onclick='saveImg(); Question5();'>"
  // ANSWER 4
  , "<img class='option' onclick='Question6();' src='./assets/1a.png'>\
   <img class='option' onclick='inattentivenessScore(); Question6();' src='./assets/1b.png'>"
  // ANSWER 5
  , "<img class='option' onclick='selfEsteemScore(); Question7();' src='./assets/2a.png'>\
   <img class='option' onclick='Question7();' src='./assets/2b.png'>"
  // ANSWER 6
  , "<img class='option' onclick='hyperactivityScore(); Question8();' src='./assets/3a.png'>\
   <img class='option' onclick='Question8();' src='./assets/3b.png'>"
  // ANSWER 7
  , "<img class='option' onclick='anxietyAndDepressionScore(); Question9();' src='./assets/4a.png'>\
    <img class='option' onclick='Question9();' src='./assets/4b.png'>"
  // ANSWER 8
  , "<img class='option' onclick='Question10();' src='./assets/5a.png'>\
    <img class='option' onclick='inattentivenessScore(); Question10();' src='./assets/5b.png'>"
  // ANSWER 9
  , "<img class='option' onclick='hyperactivityScore(); Question11();' src='./assets/6a.png'>\
    <img class='option' onclick='Question11();' src='./assets/6b.png'>"
  // ANSWER 10
  , "<img class='option' onclick='anxietyAndDepressionScore(); Question12();' src='./assets/7a.png'>\
    <img class='option' onclick='Question12();' src='./assets/7b.png'>"
  // ANSWER 11
  , "<img class='option' onclick='selfEsteemScore(); Question13();' src='./assets/8a.png'>\
    <img class='option' onclick='Question13();' src='./assets/8b.png'>"
  // ANSWER 12
  , "<img class='option' onclick='inattentivenessScore(); Question14();' src='./assets/9a.png'>\
    <img class='option' onclick='Question14();' src='./assets/9b.png'>"
  // ANSWER 13
  , "<img class='option' onclick='hyperactivityScore(); Question15();' src='./assets/10a.png'>\
    <img class='option' onclick='Question15();' src='./assets/10b.png'>"
  // ANSWER 14
  , "<img class='option' onclick='selfEsteemScore(); Question16();' src='./assets/11a.png'>\
    <img class='option' onclick='Question16();' src='./assets/11b.png'>"
  // ANSWER 15
  , "<img class='option' onclick='anxietyAndDepressionScore(); Question17();' src='./assets/12a.png'>\
    <img class='option' onclick='Question17();' src='./assets/12b.png'>"
  // ANSWER 16
  , "<img class='option' onclick='inattentivenessScore(); Question18();' src='./assets/13a.png'>\
    <img class='option' onclick='Question18();' src='./assets/13b.png'>"
  // ANSWER 17
  , "<img class='option' onclick='hyperactivityScore(); Question19();' src='./assets/14a.png'>\
    <img class='option' onclick='Question19();' src='./assets/14b.png'>"
  // ANSWER 18
  , "<img class='option' onclick='selfEsteemScore(); Question20();' src='./assets/15a.png'>\
    <img class='option' onclick='Question20();' src='./assets/15b.png'>"
  // ANSWER 19
  , "<img class='option' onclick='anxietyAndDepressionScore(); Question21();' src='./assets/16a.png'>\
    <img class='option' onclick='Question21();' src='./assets/16b.png'>"
  // ANSWER 20 - DRAW YOUR BRAIN
  ,"<canvas id='canvasObj2'></canvas>\
   <img src='./assets/submit.png' id='submit' class='submit' onmouseover='hoversubmit();' onmouseout='nonhoversubmit();' onclick='saveImg2(); Question22();'>"
  // ANSWER 21
  , "<img class='option' onclick='Question23();' src='./assets/17a.png'>\
    <img class='option' onclick='inattentivenessScore(); Question23();' src='./assets/17b.png'>"
  // ANSWER 22
  , "<img class='option' onclick='hyperactivityScore(); Question24();' src='./assets/18a.png'>\
    <img class='option' onclick='Question24();' src='./assets/18b.png'>"
  // ANSWER 23
  , "<img class='option' onclick='selfEsteemScore(); Question25();' src='./assets/19a.png'>\
    <img class='option' onclick='Question25();' src='./assets/19b.png'>"
  // ANSWER 24
  , "<img class='option' onclick='anxietyAndDepressionScore(); Question26();' src='./assets/20a.png'>\
    <img class='option' onclick='Question26();' src='./assets/20b.png'>"
  // ANSWER 25
  , "<img class='option' onclick='inattentivenessScore(); Question27();' src='./assets/21a.png'>\
    <img class='option' onclick='Question27();' src='./assets/21b.png'>"
  // ANSWER 26
  , "<img class='option' onclick='hyperactivityScore(); Question28();' src='./assets/22a.png'>\
    <img class='option' onclick='Question28();' src='./assets/22b.png'>"
  // ANSWER 27
  , "<img class='option' onclick='selfEsteemScore(); Question29();' src='./assets/23a.png'>\
    <img class='option' onclick='Question29();' src='./assets/23b.png'>"
  // ANSWER 28
  , "<img class='option' onclick='Question30();' src='./assets/24a.png'>\
    <img class='option' onclick='anxietyAndDepressionScore(); Question30();' src='./assets/24b.png'>"
  // ANSWER 29
  , "<img class='option' onclick='inattentivenessScore(); Question31();' src='./assets/25a.png'>\
    <img class='option' onclick='Question31();' src='./assets/25b.png'>"
  // ANSWER 30
  , "<img class='option' onclick='hyperactivityScore(); Question32();' src='./assets/26a.png'>\
    <img class='option' onclick='Question32();' src='./assets/26b.png'>"
  // ANSWER 31
  , "<img class='option' onclick='Question33();' src='./assets/27a.png'>\
    <img class='option' onclick='selfEsteemScore(); Question33();' src='./assets/27b.png'>"
  // ANSWER 32
  , "<img class='option' onclick='anxietyAndDepressionScore(); Question34();' src='./assets/28a.png'>\
    <img class='option' onclick='Question34();' src='./assets/28b.png'>"
  // ANSWER 33
  , "<img class='option' onclick='inattentivenessScore(); Question35();' src='./assets/29a.png'>\
    <img class='option' onclick='Question35();' src='./assets/29b.png'>"
  // ANSWER 34
  , "<img class='option' onclick='hyperactivityScore(); Question36();' src='./assets/30a.png'>\
    <img class='option' onclick='Question36();' src='./assets/30b.png'>"
  // ANSWER 35
  , "<img class='option' onclick='Question37();' src='./assets/31a.png'>\
    <img class='option' onclick='selfEsteemScore(); Question37();' src='./assets/31b.png'>"
  // ANSWER 36
  , "<img class='option' onclick='anxietyAndDepressionScore(); Results();' src='./assets/32a.png'>\
    <img class='option' onclick='Results();' src='./assets/32b.png'>"
  // INATTENTIVENESS
    , inattentiveness


  ];






// SCORES FUNCTIONS

function inattentivenessScore() {
  inattentiveness = inattentiveness + 1;
}

function inattentivenessMinusScore() {
  inattentiveness = inattentiveness - 1;
}

function hyperactivityScore() {
  hyperactivity = hyperactivity + 1;
}

function hyperactivityMinusScore() {
  hyperactivity = hyperactivity - 1;
}

function selfEsteemScore() {
  selfEsteem = selfEsteem + 1;
}

function selfEsteemMinusScore() {
  selfEsteem = selfEsteem - 1;
}

function anxietyAndDepressionScore() {
  anxietyAndDepression = anxietyAndDepression + 1;
}

function anxietyAndDepressionMinusScore() {
  anxietyAndDepression = anxietyAndDepression - 1;
}




// INFORMATION STORAGE

function firstnameSubmit() {
  var firstnameinput = document.getElementById("firstname").value;
  document.getElementById('finalname').innerHTML = firstnameinput;
}

function ageSubmit() {
  var ageinput = document.getElementById("age").value;
  document.getElementById('finalage').innerHTML = ageinput + "years old <br>";
}

function girlSubmit() {
  document.getElementById('finalsex').innerHTML = "<img src='./assets/girlicon.png' style='width: 25px;'>";
}

function boySubmit() {
  document.getElementById('finalsex').innerHTML = "<img src='./assets/boyicon.png' style='width: 25px;'>";
}

// ELEMENTS APPEARANCE

function sendAppear() {
   document.getElementById('send').style.display = "block";
}

function hoversend() {
document.getElementById('send').src="./assets/sendhover.png";
};

function nonhoversend() {
document.getElementById('send').src="./assets/send.png";
};

function hoversubmit() {
document.getElementById('submit').src="./assets/submithover.png";
};

function nonhoversubmit() {
document.getElementById('submit').src="./assets/submit.png";
};

function hoverprint() {
document.getElementById('print').src="./assets/printhover.png";
};

function nonhoverprint() {
document.getElementById('print').src="./assets/print.png";
};
// QUESTIONS FUNCTIONS

function Question1() {

    document.getElementById('question').innerHTML = myQuestions[0];
    document.getElementById('answer').innerHTML = myAnswers[0];
    document.getElementById('start').style.display = "none";
    document.getElementById('logo').style.display = "none";
    document.getElementById('about').style.display = "none";
    document.getElementById('topbar').style.display = "block";
    document.getElementById('back1').style.display = "none";
    document.getElementById('back2').style.display = "none";
    document.getElementById('voice').style.display = "none";
};

function Question2() {
   document.getElementById('question').innerHTML = myQuestions[1];
   document.getElementById('answer').innerHTML = myAnswers[1];
   document.getElementById('back1').style.display = "block";


};

function Question3() {

   document.getElementById('question').innerHTML = myQuestions[2];
   document.getElementById('answer').innerHTML = myAnswers[2];

};

// DRAW YOURSELF
 function drawing() {
 const canvas = document.querySelector('#canvasObj');
   // could be 3d, if you want to make a video game
   const ctx = canvas.getContext('2d');
   canvas.width = 400;
   canvas.height = 400;

   ctx.lineJoin = 'round';
   ctx.lineCap = 'round';
   ctx.lineWidth = 5;
   ctx.strokeStyle = '#ac0000';

   let isDrawing = false;
   let lastX = 0;
   let lastY = 0;

   function draw(e) {
     // stop the function if they are not mouse down
     if(!isDrawing) return;
     //listen for mouse move event
     console.log(e);
     ctx.beginPath();
     ctx.moveTo(lastX, lastY);
     ctx.lineTo(e.offsetX, e.offsetY);
     ctx.stroke();
     [lastX, lastY] = [e.offsetX, e.offsetY];
   }

   canvas.addEventListener('mousedown', (e) => {
     isDrawing = true;
     [lastX, lastY] = [e.offsetX, e.offsetY];
   });

   canvas.addEventListener('mousemove', draw);
   canvas.addEventListener('mouseup', () => isDrawing = false);
   canvas.addEventListener('mouseout', () => isDrawing = false);

 }

function Question4() {
   document.getElementById('question').innerHTML = myQuestions[3];
   document.getElementById('answer').innerHTML = myAnswers[3];

   drawing();
};



function saveImg() {

    var canvas = document.getElementById("canvasObj")// get canvas element
    var dataURL = canvas.toDataURL("image/png");// convert to img, specify extension
    document.getElementById("resultingimage").src = dataURL;

  };


function Question5() {

     document.getElementById('question').innerHTML = myQuestions[4];
     document.getElementById('answer').innerHTML = myAnswers[4];
     document.getElementById('voice').style.display = "inline-block";
     document.getElementById('voice').onclick = function(){
       var audio = document.getElementById("audio1");
     audio.play();};
  };

function Question6() {

     document.getElementById('question').innerHTML = myQuestions[5];
     document.getElementById('answer').innerHTML = myAnswers[5];
     document.getElementById('voice').onclick = function(){
       var audio = document.getElementById("audio2");
     audio.play();};

  };

function Question7() {

     document.getElementById('question').innerHTML = myQuestions[6];
     document.getElementById('answer').innerHTML = myAnswers[6];
     document.getElementById('voice').onclick = function(){
       var audio = document.getElementById("audio3");
     audio.play();};

  };

function Question8() {

     document.getElementById('question').innerHTML = myQuestions[7];
     document.getElementById('answer').innerHTML = myAnswers[7];
     document.getElementById('voice').onclick = function(){
       var audio = document.getElementById("audio4");
     audio.play();};

  };

function Question9() {

     document.getElementById('question').innerHTML = myQuestions[8];
     document.getElementById('answer').innerHTML = myAnswers[8];
     document.getElementById('voice').onclick = function(){
       var audio = document.getElementById("audio5");
     audio.play();};

  };

function Question10() {

     document.getElementById('question').innerHTML = myQuestions[9];
     document.getElementById('answer').innerHTML = myAnswers[9];
     document.getElementById('voice').onclick = function(){
       var audio = document.getElementById("audio6");
     audio.play();};

  };

function Question11() {

     document.getElementById('question').innerHTML = myQuestions[10];
     document.getElementById('answer').innerHTML = myAnswers[10];
     document.getElementById('voice').onclick = function(){
       var audio = document.getElementById("audio7");
     audio.play();};

  };

function Question12() {

     document.getElementById('question').innerHTML = myQuestions[11];
     document.getElementById('answer').innerHTML = myAnswers[11];
     document.getElementById('voice').onclick = function(){
       var audio = document.getElementById("audio8");
     audio.play();};

  };

function Question13() {

     document.getElementById('question').innerHTML = myQuestions[12];
     document.getElementById('answer').innerHTML = myAnswers[12];
     document.getElementById('voice').onclick = function(){
       var audio = document.getElementById("audio9");
     audio.play();};

  };

function Question14() {

     document.getElementById('question').innerHTML = myQuestions[13];
     document.getElementById('answer').innerHTML = myAnswers[13];
     document.getElementById('voice').onclick = function(){
       var audio = document.getElementById("audio10");
     audio.play();};

  };

function Question15() {

     document.getElementById('question').innerHTML = myQuestions[14];
     document.getElementById('answer').innerHTML = myAnswers[14];
     document.getElementById('voice').onclick = function(){
       var audio = document.getElementById("audio11");
     audio.play();};

  };

function Question16() {

      document.getElementById('question').innerHTML = myQuestions[15]
      document.getElementById('answer').innerHTML = myAnswers[15];
      document.getElementById('voice').onclick = function(){
        var audio = document.getElementById("audio12");
      audio.play();};

  };

function Question17() {

      document.getElementById('question').innerHTML = myQuestions[16];
      document.getElementById('answer').innerHTML = myAnswers[16];
      document.getElementById('voice').onclick = function(){
        var audio = document.getElementById("audio13");
      audio.play();};

  };

function Question18() {

       document.getElementById('question').innerHTML = myQuestions[17];
       document.getElementById('answer').innerHTML = myAnswers[17];
       document.getElementById('voice').onclick = function(){
         var audio = document.getElementById("audio14");
       audio.play();};

    };

function Question19() {

        document.getElementById('question').innerHTML = myQuestions[18];
        document.getElementById('answer').innerHTML = myAnswers[18];
        document.getElementById('voice').onclick = function(){
          var audio = document.getElementById("audio15");
        audio.play();};

    };

function Question20() {

        document.getElementById('question').innerHTML = myQuestions[19];
        document.getElementById('answer').innerHTML = myAnswers[19];
        document.getElementById('voice').onclick = function(){
          var audio = document.getElementById("audio16");
        audio.play();};

    };


    // DRAW YOUR BRAIN
     function drawing2() {
     const canvas = document.querySelector('#canvasObj2');
       const ctx = canvas.getContext('2d');
       canvas.width = 400;
       canvas.height = 400;

       ctx.lineJoin = 'round';
       ctx.lineCap = 'round';
       ctx.lineWidth = 5;
       ctx.strokeStyle = '#ac0000';

       let isDrawing = false;
       let lastX = 0;
       let lastY = 0;

       function draw(e) {
         // stop the function if they are not mouse down
         if(!isDrawing) return;
         //listen for mouse move event
         console.log(e);
         ctx.beginPath();
         ctx.moveTo(lastX, lastY);
         ctx.lineTo(e.offsetX, e.offsetY);
         ctx.stroke();
         [lastX, lastY] = [e.offsetX, e.offsetY];
       }

       canvas.addEventListener('mousedown', (e) => {
         isDrawing = true;
         [lastX, lastY] = [e.offsetX, e.offsetY];
       });

       canvas.addEventListener('mousemove', draw);
       canvas.addEventListener('mouseup', () => isDrawing = false);
       canvas.addEventListener('mouseout', () => isDrawing = false);

     }

    function Question21() {
       document.getElementById('question').innerHTML = myQuestions[20];
       document.getElementById('answer').innerHTML = myAnswers[20];
       drawing2();
    };



    function saveImg2() {

        var canvas = document.getElementById("canvasObj2")// get canvas element
        var dataURL = canvas.toDataURL("image/png");// convert to img, specify extension
        document.getElementById("resultingimage2").src = dataURL;

      };





function Question22() {

        document.getElementById('question').innerHTML = myQuestions[21];
        document.getElementById('answer').innerHTML = myAnswers[21];
        document.getElementById('voice').onclick = function(){
          var audio = document.getElementById("audio17");
        audio.play();};

    };

function Question23() {

        document.getElementById('question').innerHTML = myQuestions[22];
        document.getElementById('answer').innerHTML = myAnswers[22];
        document.getElementById('voice').onclick = function(){
          var audio = document.getElementById("audio18");
        audio.play();};

    };

function Question24() {

        document.getElementById('question').innerHTML = myQuestions[23];
        document.getElementById('answer').innerHTML = myAnswers[23];
        document.getElementById('voice').onclick = function(){
          var audio = document.getElementById("audio19");
        audio.play();};

    };

function Question25() {

       document.getElementById('question').innerHTML = myQuestions[24];
       document.getElementById('answer').innerHTML = myAnswers[24];
       document.getElementById('voice').onclick = function(){
         var audio = document.getElementById("audio20");
       audio.play();};

    };

function Question26() {

       document.getElementById('question').innerHTML = myQuestions[25];
       document.getElementById('answer').innerHTML = myAnswers[25];
       document.getElementById('voice').onclick = function(){
         var audio = document.getElementById("audio21");
       audio.play();};

    };

function Question27() {

       document.getElementById('question').innerHTML = myQuestions[26];
       document.getElementById('answer').innerHTML = myAnswers[26];
       document.getElementById('voice').onclick = function(){
         var audio = document.getElementById("audio22");
       audio.play();};

    };


function Question28() {

       document.getElementById('question').innerHTML = myQuestions[27];
       document.getElementById('answer').innerHTML = myAnswers[27];
       document.getElementById('voice').onclick = function(){
         var audio = document.getElementById("audio23");
       audio.play();};

     };

function Question29() {

        document.getElementById('question').innerHTML = myQuestions[28];
        document.getElementById('answer').innerHTML = myAnswers[28];
        document.getElementById('voice').onclick = function(){
          var audio = document.getElementById("audio24");
        audio.play();};

      };

function Question30() {

        document.getElementById('question').innerHTML = myQuestions[29];
        document.getElementById('answer').innerHTML = myAnswers[29];
        document.getElementById('voice').onclick = function(){
          var audio = document.getElementById("audio25");
        audio.play();};

      };

function Question31() {

        document.getElementById('question').innerHTML = myQuestions[30];
        document.getElementById('answer').innerHTML = myAnswers[30];
        document.getElementById('voice').onclick = function(){
          var audio = document.getElementById("audio26");
        audio.play();};

      };

function Question32() {

        document.getElementById('question').innerHTML = myQuestions[31];
        document.getElementById('answer').innerHTML = myAnswers[31];
        document.getElementById('voice').onclick = function(){
          var audio = document.getElementById("audio27");
        audio.play();};

      };

function Question33() {

        document.getElementById('question').innerHTML = myQuestions[32];
        document.getElementById('answer').innerHTML = myAnswers[32];
        document.getElementById('voice').onclick = function(){
          var audio = document.getElementById("audio28");
        audio.play();};

      };

function Question34() {

        document.getElementById('question').innerHTML = myQuestions[33];
        document.getElementById('answer').innerHTML = myAnswers[33];
        document.getElementById('voice').onclick = function(){
          var audio = document.getElementById("audio29");
        audio.play();};

      };

function Question35() {

        document.getElementById('question').innerHTML = myQuestions[34];
        document.getElementById('answer').innerHTML = myAnswers[34];
        document.getElementById('voice').onclick = function(){
          var audio = document.getElementById("audio30");
        audio.play();};

      };

function Question36() {

        document.getElementById('question').innerHTML = myQuestions[35];
        document.getElementById('answer').innerHTML = myAnswers[35];
        document.getElementById('voice').onclick = function(){
          var audio = document.getElementById("audio31");
        audio.play();};

      };

function Question37() {

        document.getElementById('question').innerHTML = myQuestions[36];
        document.getElementById('answer').innerHTML = myAnswers[36];
        document.getElementById('voice').onclick = function(){
          var audio = document.getElementById("audio32");
        audio.play();};

      };

function Results() {

       document.getElementById('question').style.display = "none";
       document.getElementById('answer').style.display = "none";
       document.getElementById('finalname').style.display = "block";
       document.getElementById('finalsex').style.display = "block";
       document.getElementById('finalage').style.display = "block";
       document.getElementById('inattentiveness').innerHTML = "Inattentiveness score: " + inattentiveness + "/ 8";
       document.getElementById('hyperactivity').innerHTML = "Hyperactivity score: " + hyperactivity + "/ 8";
       document.getElementById('selfEsteem').innerHTML = "Self-esteem score: " + selfEsteem + "/ 8";
       document.getElementById('anxietyAndDepression').innerHTML = "Anxiety/Depression score: " + anxietyAndDepression + "/ 8";
       document.getElementById('resultingimage').style.display = "block";
       document.getElementById('resultingimage2').style.display = "block";
       document.getElementById('print').style.display = "block";

        };
