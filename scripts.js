var score=0;
var question1, question2, question3, question4, question5, question6, question7, question8;
     function openDrop(){
         document.getElementById('open1').setAttribute('set_bind','true');
     }
var score=0;
var question1, question2, question3, question4, question5, question6, question7, question8;
     function openDrop(){
         document.getElementById('open1').setAttribute('set_bind','true');
     }
     function helpMe(){
              $("#help").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500,
               fadeDelay: 0.50
             });
         }
     function feedback(){
              $("#feed").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500,
               fadeDelay: 0.50
             });
         }
    
//body button function
     var span1 = document.createElement('span1');
     span1.innerHTML = "- To select body, click on drop mech, answer question and click on it again to open.<br>- To scan body, click on fudicial sticker.<br>- To move body to carriage, click on tailfin or tailboom, answer question and click again."
     function body_pop(){
         setTimeout(function(){
           swal({
                   title: "Body Viewpoint Guide",
                   content: span1,
                   button: "OK"
                 });
           }, 1000);
     }
//package button function
     var span2 = document.createElement("span2");
     span2.innerHTML = "- To scan package, click on QR code.<br>                                                                 - To pick package, click on any part of the package other than the QR code, answer the   question and click on it again to load on to body.";
     function package_pop(){
         setTimeout(function(){
               swal({
                   title: 'Package Viewpoint Guide',
                   content: span2,
                   button: "OK"
                 });
           }, 1000);
     }

//prop button function
     var span3 = document.createElement("span3");
     span3.innerHTML = "- To check propulsion system, click on motorpod and answer the question";
     function props_pop(){
         setTimeout(function(){
               swal({
                   title: 'Package Viewpoint Guide',
                   content: span3,
                   button: "OK"
                 });
           }, 1000);
     }
//prop button function
     var span4 = document.createElement("span4");
     span4.innerHTML = "- To select wing, click on it, answer the question and click again to move it onto body.";
     function wing_pop(){
         setTimeout(function(){
               swal({
                   title: 'Wing Viewpoint Guide',
                   content: span4,
                   button: "OK"
                 });
           }, 1000);
     }
//battery button function
     var span5 = document.createElement("span5");
     span5.innerHTML = "- To select battery, click on it, answer the question and click again to move it onto body.";
     function battery_pop(){
         setTimeout(function(){
               swal({
                   title: 'Battery Viewpoint Guide',
                   content: span5,
                   button: "OK"
                 });
           }, 1000);
     }
//nosecone button function
     var span6 = document.createElement("span6");
     span6.innerHTML = "- To select nose cone, click on it, answer the question and click again to move it onto body.";
     function nose_pop(){
         setTimeout(function(){
               swal({
                   title: 'Battery Viewpoint Guide',
                   content: span6,
                   button: "OK"
                 });
           }, 1000);
     }
     function drop1(){
         if(document.getElementById("mech1").getAttribute('enabled')=='true'&&
            document.getElementById("to1").getAttribute('enabled')=='false'){
            document.getElementById("mech2").setAttribute('enabled', 'false');
            document.getElementById("mech3").setAttribute('enabled', 'false');
            document.getElementById("mech4").setAttribute('enabled', 'false');
            document.getElementById("qs").setAttribute('enabled', 'true');
              $("#ex1").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
         else if(document.getElementById("mech1").getAttribute('enabled')=='true'&&
                 document.getElementById("to1").getAttribute('enabled')=='true'){
                 document.getElementById("mech1").setAttribute('enabled', 'false');
                 document.getElementById("QR1").setAttribute('enabled', 'true');
            setTimeout(function(){
                 document.getElementById("s1").setAttribute('enabled', 'true');
              swal({
                   title: "Great!!!",
                   text: "Drop mech opened successfully",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
           }, 1500);
         }
         else if(document.getElementById("tc1").getAttribute('enabled')=='true'&&
                 document.getElementById("tp").getAttribute('enabled')=='true'){
                 setTimeout(function(){
                 document.getElementById("y2").setAttribute('enabled', 'true');
              swal({
                   title: "Hey",
                   text: "Package loaded already",
                   icon: "warning",
                   button: false,
                   timer: 3000
                 });
           }, 15); 
           score-=50;
         }
     }
     function drop2(){
         if(document.getElementById("mech2").getAttribute('enabled')=='true'&&
            document.getElementById("to2").getAttribute('enabled')=='false'){
            document.getElementById("mech1").setAttribute('enabled', 'false');
            document.getElementById("mech3").setAttribute('enabled', 'false');
            document.getElementById("mech4").setAttribute('enabled', 'false');
            document.getElementById("qs").setAttribute('enabled', 'true');
              $("#ex1").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
         else if(document.getElementById("mech2").getAttribute('enabled')=='true'&&
                 document.getElementById("to2").getAttribute('enabled')=='true'){
                 document.getElementById("mech2").setAttribute('enabled', 'false');
                 document.getElementById("QR2").setAttribute('enabled', 'true');
            setTimeout(function(){
                 document.getElementById("s1").setAttribute('enabled', 'true');
              swal({
                   title: "Great!!!",
                   text: "Drop mech opened successfully",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
           }, 1500);
         }
         else if(document.getElementById("tc2").getAttribute('enabled')=='true'&&
                 document.getElementById("tp").getAttribute('enabled')=='true'){
                 setTimeout(function(){
                 document.getElementById("y2").setAttribute('enabled', 'true');
              swal({
                   title: "Hey",
                   text: "Package loaded already",
                   icon: "warning",
                   button: false,
                   timer: 3000
                 });
           }, 15); 
           score-=50;
         }
     }
     function drop3(){
         if(document.getElementById("mech3").getAttribute('enabled')=='true'&&
            document.getElementById("to3").getAttribute('enabled')=='false'){
            document.getElementById("mech1").setAttribute('enabled', 'false');
            document.getElementById("mech2").setAttribute('enabled', 'false');
            document.getElementById("mech4").setAttribute('enabled', 'false');
            document.getElementById("qs").setAttribute('enabled', 'true');
              $("#ex1").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
         else if(document.getElementById("mech3").getAttribute('enabled')=='true'&&
                 document.getElementById("to3").getAttribute('enabled')=='true'){
                 document.getElementById("mech3").setAttribute('enabled', 'false');
                 document.getElementById("QR3").setAttribute('enabled', 'true');
            setTimeout(function(){
                 document.getElementById("s1").setAttribute('enabled', 'true');
              swal({
                   title: "Great!!!",
                   text: "Drop mech opened successfully",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
           }, 1500);
         }
         else if(document.getElementById("tc3").getAttribute('enabled')=='true'&&
                 document.getElementById("tp").getAttribute('enabled')=='true'){
                 setTimeout(function(){
                 document.getElementById("y2").setAttribute('enabled', 'true');
              swal({
                   title: "Hey",
                   text: "Package loaded already",
                   icon: "warning",
                   button: false,
                   timer: 3000
                 });
           }, 15); 
           score-=50;
         }
     }
     function drop4(){
         if(document.getElementById("mech4").getAttribute('enabled')=='true'&&
            document.getElementById("to4").getAttribute('enabled')=='false'){
            document.getElementById("mech1").setAttribute('enabled', 'false');
            document.getElementById("mech2").setAttribute('enabled', 'false');
            document.getElementById("mech3").setAttribute('enabled', 'false');
            document.getElementById("qs").setAttribute('enabled', 'true');
              $("#ex1").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
         else if(document.getElementById("mech4").getAttribute('enabled')=='true'&&
                 document.getElementById("to4").getAttribute('enabled')=='true'){
                 document.getElementById("mech4").setAttribute('enabled', 'false');
                 document.getElementById("QR4").setAttribute('enabled', 'true');
            setTimeout(function(){
                 document.getElementById("s1").setAttribute('enabled', 'true');
              swal({
                   title: "Great!!!",
                   text: "Drop mech opened successfully",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
           }, 1500);
         }
         else if(document.getElementById("tc4").getAttribute('enabled')=='true'&&
                 document.getElementById("tp").getAttribute('enabled')=='true'){
                 setTimeout(function(){
                 document.getElementById("y2").setAttribute('enabled', 'true');
              swal({
                   title: "Hey",
                   text: "Package loaded already",
                   icon: "warning",
                   button: false,
                   timer: 3000
                 });
           }, 15); 
           score-=50;
         }
     }
     function scan1(){
         if(document.getElementById("QR1").getAttribute('enabled')=='false'&&
            document.getElementById("mech1").getAttribute('enabled')=='true'&&
            document.getElementById("to1").getAttribute('enabled')=='false'){
                document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "You did not select body",
                   icon: "error",
                   button: "oh noez!"
                 });
                 score-=50;
         }
         else if(document.getElementById("QR1").getAttribute('enabled')=='true'&&
                 document.getElementById("tQR1").getAttribute('enabled')=='true'){
                     document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Body scanned already.",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
         }
         else if(document.getElementById("QR1").getAttribute('enabled')=='true'){
                 document.getElementById("tQR1").setAttribute('enabled', 'true');
             setTimeout(function(){
                 document.getElementById("s1").setAttribute('enabled', 'true');
          swal({
                   title: "Great!!!",
                   text: "Body scanned! NB: In practice, you can scan either body or package first",
                   icon: "success",
                   button: "okay"
                 });
         },300);
         }
     }
     function scan2(){
         if(document.getElementById("QR2").getAttribute('enabled')=='false'&&
            document.getElementById("mech2").getAttribute('enabled')=='true'&&
            document.getElementById("to2").getAttribute('enabled')=='false'){
                document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "You did not select body",
                   icon: "error",
                   button: "oh noez!",
                 });
                 score-=50;
         }
         else if(document.getElementById("QR2").getAttribute('enabled')=='true'&&
                 document.getElementById("tQR2").getAttribute('enabled')=='true'){
                     document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Body scanned already.",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
                 score-=50;
         }
         else if(document.getElementById("QR2").getAttribute('enabled')=='true'){
                 document.getElementById("tQR2").setAttribute('enabled', 'true');
             setTimeout(function(){
                 document.getElementById("s1").setAttribute('enabled', 'true');
          swal({
                   title: "Great!!!",
                   text: "Body scanned! NB: In practice, you can scan either body or package first",
                   icon: "success",
                   button: "okay"
                 });
         },300);
         score+=100;
         }
     }
     function scan3(){
         if(document.getElementById("QR3").getAttribute('enabled')=='false'&&
            document.getElementById("mech3").getAttribute('enabled')=='true'&&
            document.getElementById("to3").getAttribute('enabled')=='false'){
                document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "You did not select body",
                   icon: "error",
                   button: "oh noez!",
                 });
                 score-=50;
         }
         else if(document.getElementById("QR3").getAttribute('enabled')=='true'&&
                 document.getElementById("tQR3").getAttribute('enabled')=='true'){
                     document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Body scanned already.",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
                 score-=50;
         }
         else if(document.getElementById("QR3").getAttribute('enabled')=='true'){
                 document.getElementById("tQR3").setAttribute('enabled', 'true');
             setTimeout(function(){
                 document.getElementById("s1").setAttribute('enabled', 'true');
          swal({
                   title: "Great!!!",
                   text: "Body scanned! NB: In practice, you can scan either body or package first",
                   icon: "success",
                   button: "okay"
                 });
         },500);
         }
         score+=100;
     }
     function scan4(){
         if(document.getElementById("QR4").getAttribute('enabled')=='false'&&
            document.getElementById("mech4").getAttribute('enabled')=='true'&&
            document.getElementById("to4").getAttribute('enabled')=='false'){
                document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "You did not select body",
                   icon: "error",
                   button: "oh noez!"
                 });
                 score-=50;
         }
         else if(document.getElementById("QR4").getAttribute('enabled')=='true'&&
                 document.getElementById("to4").getAttribute('enabled')=='true'){
                 document.getElementById("tQR4").setAttribute('enabled', 'true');
             setTimeout(function(){
                 document.getElementById("s1").setAttribute('enabled', 'true');
          swal({
                   title: "Great!!!",
                   text: "Body scanned! NB: In practice, you can scan either body or package first",
                   icon: "success",
                   button: "okay"
                 });
         },300);
                 score+=100;
         }
         else if(document.getElementById("QR4").getAttribute('enabled')=='true'){
             document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Body scanned already.",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
         }
         score-=50;
     }
     function sub1() {
         if(document.getElementById("mech1").getAttribute('enabled')=='true'&&
            document.getElementById("to1").getAttribute('enabled')=='false'){
            document.getElementById("to1").setAttribute('enabled', 'true');
            document.getElementById("mech2").setAttribute('enabled', 'false');
            document.getElementById("mech3").setAttribute('enabled', 'false');
            document.getElementById("mech4").setAttribute('enabled', 'false');
            question1 = document.quiz1.q1.value;
              if(question1==2){
                   score +=100; 
                 swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
              }
         }
         else if(document.getElementById("mech2").getAttribute('enabled')=='true'&&
                 document.getElementById("to2").getAttribute('enabled')=='false'){
                 document.getElementById("to2").setAttribute('enabled', 'true');
                 document.getElementById("mech1").setAttribute('enabled', 'false');
                 document.getElementById("mech3").setAttribute('enabled', 'false');
                 document.getElementById("mech4").setAttribute('enabled', 'false');
                 question1 = document.quiz1.q1.value;
              if(question1==2){
                   score +=100; 
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
              }
         }
         else if(document.getElementById("mech3").getAttribute('enabled')=='true'&&
                 document.getElementById("to3").getAttribute('enabled')=='false'){
                 document.getElementById("to3").setAttribute('enabled', 'true');
                 document.getElementById("mech1").setAttribute('enabled', 'false');
                 document.getElementById("mech2").setAttribute('enabled', 'false');
                 document.getElementById("mech4").setAttribute('enabled', 'false');
                 question1 = document.quiz1.q1.value;
              if(question1==2){
                   score +=100; 
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
              }
         }
        else if(document.getElementById("mech4").getAttribute('enabled')=='true'&&
                document.getElementById("to4").getAttribute('enabled')=='false'){
                document.getElementById("to4").setAttribute('enabled', 'true');
                document.getElementById("mech1").setAttribute('enabled', 'false');
                document.getElementById("mech2").setAttribute('enabled', 'false');
                document.getElementById("mech3").setAttribute('enabled', 'false');
                question1 = document.quiz1.q1.value;
              if(question1==2){
                   score +=100;
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
              }
         }
     }
      function package(){
         if(document.getElementById("watch").getAttribute('enabled')=='false'){
             document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "You did not scan package",
                   icon: "error",
                   button: "oh noez!",
                 });
                 score-=50;
         }
         else if(document.getElementById("to1").getAttribute('enabled')=='true'&&
                document.getElementById("watch").getAttribute('enabled')=='true'){
                document.getElementById("to1").setAttribute('enabled', 'false');
                document.getElementById("tc1").setAttribute('enabled', 'true');
                document.getElementById("pack1").setAttribute('enabled', 'true');
          setTimeout(function(){
          document.getElementById("qs").setAttribute('enabled', 'true');
              $("#ex2").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
          }, 500);
         }
         else if(document.getElementById("to2").getAttribute('enabled')=='true'&&
                 document.getElementById("watch").getAttribute('enabled')=='true'){
           document.getElementById("to2").setAttribute('enabled', 'false');
            document.getElementById("tc2").setAttribute('enabled', 'true');
            document.getElementById("pack1").setAttribute('enabled', 'true');
            setTimeout(function(){
            document.getElementById("qs").setAttribute('enabled', 'true');
              $("#ex2").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
            }, 500);
         }
         else if(document.getElementById("to3").getAttribute('enabled')=='true'&&
                 document.getElementById("watch").getAttribute('enabled')=='true'){
           document.getElementById("to3").setAttribute('enabled', 'false');
            document.getElementById("tc3").setAttribute('enabled', 'true');
            document.getElementById("pack1").setAttribute('enabled', 'true');
            setTimeout(function(){
              document.getElementById("qs").setAttribute('enabled', 'true');
              $("#ex2").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
            }, 500);
         }
         else if(document.getElementById("to4").getAttribute('enabled')=='true'&&
                 document.getElementById("watch").getAttribute('enabled')=='true'){
            document.getElementById("to4").setAttribute('enabled', 'false');
            document.getElementById("tc4").setAttribute('enabled', 'true');
            document.getElementById("pack1").setAttribute('enabled', 'true');
             setTimeout(function(){
              document.getElementById("qs").setAttribute('enabled', 'true');
              $("#ex2").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
            }, 500);
         }
         else if(document.getElementById("tp").getAttribute('enabled')=='true' && 
                 document.getElementById("tc1").getAttribute('enabled')=='true'){
             setTimeout(function(){
                        document.getElementById("s1").setAttribute('enabled', 'true');
                        document.getElementById("tZ11").setAttribute('enabled', 'true');
                     swal({
                           title: "Great!",
                           text: "Package loaded into body 100 successfully",
                           icon: "success",
                           button: false,
                           timer: 3000
                         });
                   }, 1500);
                   score+=100;
         }
          else if(document.getElementById("tp").getAttribute('enabled')=='true' && 
                 document.getElementById("tc2").getAttribute('enabled')=='true'){
              setTimeout(function(){
                        document.getElementById("s1").setAttribute('enabled', 'true');
                        document.getElementById("tZ21").setAttribute('enabled', 'true');
                     swal({
                           title: "Great!",
                           text: "Package loaded into body 200 successfully",
                           icon: "success",
                           button: false,
                           timer: 3000
                         });
                   }, 1500);
                   score+=100;
         }
         else if(document.getElementById("tp").getAttribute('enabled')=='true' && 
                 document.getElementById("tc3").getAttribute('enabled')=='true'){
              setTimeout(function(){
                        document.getElementById("s1").setAttribute('enabled', 'true');
                        document.getElementById("tZ31").setAttribute('enabled', 'true');
                     swal({
                           title: "Great!",
                           text: "Package loaded into body 300 successfully",
                           icon: "success",
                           button: false,
                           timer: 3000
                         });
                   }, 1500);
                   score+=100;
         }
         else if(document.getElementById("tp").getAttribute('enabled')=='true' && 
                 document.getElementById("tc4").getAttribute('enabled')=='true'){
              setTimeout(function(){
                        document.getElementById("s1").setAttribute('enabled', 'true');
                        document.getElementById("tZ41").setAttribute('enabled', 'true');
                     swal({
                           title: "Great!",
                           text: "Package loaded into body 400 successfully",
                           icon: "success",
                           button: false,
                           timer: 3000
                         });
                   }, 1500);
                   score+=100;
         }
         else if(document.getElementById("to1").getAttribute('enabled')=='false'&&
                 document.getElementById("to2").getAttribute('enabled')=='false'&&
                 document.getElementById("to3").getAttribute('enabled')=='false'&&
                 document.getElementById("to4").getAttribute('enabled')=='false'){
            swal({
                   title: "Hey!!!",
                   text: "You did not open drop mech",
                   icon: "error",
                   button: "oh noez!",
                 });
        }
        score-=50;
      }
      function packid(){
         if(document.getElementById("tp").getAttribute('enabled')=='true'){
             
         }
         else if(document.getElementById("watch").getAttribute('enabled')=='true'&&
            document.getElementById("tp").getAttribute('enabled')=='false'){
             document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!",
                   text: "Package scanned already.",
                   icon: "warning",
                   button: false,
                   timer: 3000
                 });
         }
         else if(document.getElementById("to1").getAttribute('enabled')=='true'||
            document.getElementById("to2").getAttribute('enabled')=='true'||
            document.getElementById("to3").getAttribute('enabled')=='true'||
            document.getElementById("to4").getAttribute('enabled')=='true'){
            document.getElementById("watch").setAttribute('enabled','true');
            document.getElementById("s1").setAttribute('enabled', 'true');
             swal({
                   title: "Great!",
                   text: "Package scanned.",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
         }
         else{
             
         }
     }
     function sub2() {
                 document.getElementById("tp").setAttribute('enabled', 'true');
                 document.getElementById('mech1').setAttribute('enabled', 'false');
                 document.getElementById('mech2').setAttribute('enabled', 'false');
                 document.getElementById('mech3').setAttribute('enabled', 'false');
                 document.getElementById('mech4').setAttribute('enabled', 'false');
            question2 = document.quiz2.q2.value;
              if(question2==4){
                   score +=100;  
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
              }
     }
     function loadbody1(){
       if(document.getElementById("zip1").getAttribute('enabled')=='false' &&
          document.getElementById("tc1").getAttribute('enabled')=='true'&&
          document.getElementById("tZ11").getAttribute('enabled')=='true'&&
          document.getElementById("tQR1").getAttribute('enabled')=='true'){
          document.getElementById("qs").setAttribute('enabled', 'true');
           $("#ex3").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
       else if(document.getElementById("zip1").getAttribute('enabled')=='true'){
         setTimeout(function(){
             document.getElementById("zip1").setAttribute('enabled', 'false');
             document.getElementById("tc1").setAttribute('enabled', 'false');
             document.getElementById("s1").setAttribute('enabled', 'true');
          swal({
                   title: "Great!!!",
                   text: "Body 100 loaded successfully",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
         },1500);
             score +=100;
           }
           else if(document.getElementById("zip2").getAttribute('enabled')=='true'||
                   document.getElementById("zip3").getAttribute('enabled')=='true'||
                   document.getElementById("zip4").getAttribute('enabled')=='true'){
                   document.getElementById("e2").setAttribute('enabled', 'true');
                  swal({
                   title: "Hey!!!",
                   text: "You have selected a body already",
                   icon: "error",
                   button: "oh noez!",
                 });   
                 score-=50;
         }
         else if(document.getElementById("zip1").getAttribute('enabled')=='false'&&
                 document.getElementById("tZ11").getAttribute('enabled')=='false'){
                 document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "You did not load package",
                   icon: "error",
                   button: "oh noez!",
                 });
                 score-=50;
           }
         else if(document.getElementById("tQR1").getAttribute('enabled')=='false'){
           document.getElementById("e2").setAttribute('enabled', 'true');
           swal({
                   title: "Hey!!!",
                   text: "You did not scan body",
                   icon: "error",
                   button: "oh no!"
                 });
                 score-=50;
       }
           else if(document.getElementById("zip1").getAttribute('enabled')=='false'&&
                 document.getElementById("tZ11").getAttribute('enabled')=='true'){
       }
    }
    function loadbody2()
     {
      if(document.getElementById("zip2").getAttribute('enabled')=='false' &&
          document.getElementById("tc2").getAttribute('enabled')=='true'&&
          document.getElementById("tZ21").getAttribute('enabled')=='true'&&
          document.getElementById("tQR2").getAttribute('enabled')=='true'){
          document.getElementById("qs").setAttribute('enabled', 'true');
           $("#ex3").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
       else if(document.getElementById("zip2").getAttribute('enabled')=='true'){
         setTimeout(function(){
             document.getElementById("zip2").setAttribute('enabled', 'false');
             document.getElementById("tc2").setAttribute('enabled', 'false');
             document.getElementById("s1").setAttribute('enabled', 'true');
          swal({
                   title: "Great!!!",
                   text: "Body 200 loaded successfully",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
         },1500);
             score +=100;
           }
           else if(document.getElementById("zip1").getAttribute('enabled')=='true'||
                   document.getElementById("zip3").getAttribute('enabled')=='true'||
                   document.getElementById("zip4").getAttribute('enabled')=='true'){
                   document.getElementById("e2").setAttribute('enabled', 'true');
                  swal({
                   title: "Hey!!!",
                   text: "You have selected a body already",
                   icon: "error",
                   button: "oh noez!",
                 });   
                 score-=50;
         }
         else if(document.getElementById("zip2").getAttribute('enabled')=='false'&&
               document.getElementById("tZ21").getAttribute('enabled')=='false'){
               document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "You did not load package",
                   icon: "error",
                   button: "oh noez!",
                 });
                 score-=50;
           }
         else if(document.getElementById("tQR2").getAttribute('enabled')=='false'){
                 document.getElementById("e2").setAttribute('enabled', 'true');
           swal({
                   title: "Hey!!!",
                   text: "You did not scan body",
                   icon: "error",
                   button: "oh no!"
                 });
                 score-=50;
       }
       else if(document.getElementById("zip2").getAttribute('enabled')=='false'&&
                 document.getElementById("tZ21").getAttribute('enabled')=='true'){
       }
    }
    function loadbody3()
     {
       if(document.getElementById("zip3").getAttribute('enabled')=='false' &&
          document.getElementById("tc3").getAttribute('enabled')=='true'&&
          document.getElementById("tZ31").getAttribute('enabled')=='true'&&
          document.getElementById("tQR3").getAttribute('enabled')=='true'){
          document.getElementById("qs").setAttribute('enabled', 'true');
           $("#ex3").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
       else if(document.getElementById("zip3").getAttribute('enabled')=='true'){
         setTimeout(function(){
             document.getElementById("zip3").setAttribute('enabled', 'false');
             document.getElementById("tc3").setAttribute('enabled', 'false');
             document.getElementById("s1").setAttribute('enabled', 'true');
          swal({
                   title: "Great!!!",
                   text: "Body 300 loaded successfully",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
         },1500);
             score +=100;
           }
           else if(document.getElementById("zip1").getAttribute('enabled')=='true'||
                   document.getElementById("zip2").getAttribute('enabled')=='true'||
                   document.getElementById("zip4").getAttribute('enabled')=='true'){
                   document.getElementById("e2").setAttribute('enabled', 'true');
                  swal({
                   title: "Hey!!!",
                   text: "You have selected a body already",
                   icon: "error",
                   button: "oh noez!",
                 });  
                 score-=50;
         }
         else if(document.getElementById("zip3").getAttribute('enabled')=='false'&&
                 document.getElementById("tZ31").getAttribute('enabled')=='false'){
               document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "You did not load package",
                   icon: "error",
                   button: "oh noez!",
                 });
                 score-=50;
           }
         else if(document.getElementById("tQR3").getAttribute('enabled')=='false'){
           document.getElementById("e2").setAttribute('enabled', 'true');
           swal({
                   title: "Hey!!!",
                   text: "You did not scan body",
                   icon: "error",
                   button: "oh no!"
                 });
                 score-=50;
       }
       else if(document.getElementById("zip3").getAttribute('enabled')=='false'&&
                 document.getElementById("tZ31").getAttribute('enabled')=='true'){
       }
    }

    function loadbody4()
     {
       if(document.getElementById("zip4").getAttribute('enabled')=='false' &&
          document.getElementById("tc4").getAttribute('enabled')=='true'&&
          document.getElementById("tZ41").getAttribute('enabled')=='true'&&
          document.getElementById("tQR4").getAttribute('enabled')=='true'){
         document.getElementById("qs").setAttribute('enabled', 'true');
           $("#ex3").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
       else if(document.getElementById("zip4").getAttribute('enabled')=='true'){
         setTimeout(function(){
             document.getElementById("zip4").setAttribute('enabled', 'false');
             document.getElementById("tc4").setAttribute('enabled', 'false');
             document.getElementById("s1").setAttribute('enabled', 'true');
          swal({
                   title: "Great!!!",
                   text: "Body 400 loaded successfully",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
         },1500);
             score +=100;
           }
           else if(document.getElementById("zip1").getAttribute('enabled')=='true'||
                   document.getElementById("zip2").getAttribute('enabled')=='true'||
                   document.getElementById("zip3").getAttribute('enabled')=='true'){
                   document.getElementById("e2").setAttribute('enabled', 'true');
                  swal({
                   title: "Hey!!!",
                   text: "You have selected a body already",
                   icon: "error",
                   button: "oh noez!",
                 });  
                 score-=50;
         }
         else if(document.getElementById("zip4").getAttribute('enabled')=='false'&&
               document.getElementById("tZ41").getAttribute('enabled')=='false'){
               document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "You did not load package",
                   icon: "error",
                   button: "oh noez!",
                 });
                 score-=50;
           }
         else if(document.getElementById("tQR4").getAttribute('enabled')=='false'){
           document.getElementById("e2").setAttribute('enabled', 'true');
           swal({
                   title: "Hey!!!",
                   text: "You did not scan body",
                   icon: "error",
                   button: "oh no!"
                 });
                 score-=50;
       }
       else if(document.getElementById("zip4").getAttribute('enabled')=='false'&&
                 document.getElementById("tZ41").getAttribute('enabled')=='true'){
       }
    }
    function sub3() {
         if(document.getElementById("tc1").getAttribute('enabled')=='true'&&
            document.getElementById("zip1").getAttribute('enabled')=='false'){
            document.getElementById("zip1").setAttribute('enabled', 'true');
            document.getElementById("tZ11").setAttribute('enabled', 'true');
            question3 = document.quiz3.q3.value;
              if(question3==4){
                   score +=100; 
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
              }
         }
        else if(document.getElementById("tc2").getAttribute('enabled')=='true'&&
                 document.getElementById("zip2").getAttribute('enabled')=='false'){
                 document.getElementById("zip2").setAttribute('enabled', 'true');
                 document.getElementById("tZ21").setAttribute('enabled', 'true');
                question3 = document.quiz3.q3.value;
              if(question3==4){
                   score +=100;
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
              }     
         }
         else if(document.getElementById("tc3").getAttribute('enabled')=='true'&&
                 document.getElementById("zip3").getAttribute('enabled')=='false'){
                 document.getElementById("zip3").setAttribute('enabled', 'true');
                 document.getElementById("tZ31").setAttribute('enabled', 'true');
                 question3 = document.quiz3.q3.value;
              if(question3==4){
                   score +=100; 
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
              }
         }
        else if(document.getElementById("tc4").getAttribute('enabled')=='true'&&
                document.getElementById("zip4").getAttribute('enabled')=='false'){
                document.getElementById("zip4").setAttribute('enabled', 'true');
                document.getElementById("tZ41").setAttribute('enabled', 'true');
                question3 = document.quiz3.q3.value;
              if(question3==4){
                   score +=100;
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
              }
         }
     }
     function propel1(){
         if(document.getElementById("prop1").getAttribute('enabled')=='false'&&
            document.getElementById("tW1").getAttribute('enabled')=='false'&&
            document.getElementById("tWW1").getAttribute('enabled')=='false'&&
            document.getElementById("tWWW1").getAttribute('enabled')=='false'){
            document.getElementById("prop1").setAttribute('enabled', 'true');
            document.getElementById("qs").setAttribute('enabled', 'true');
             $("#ex7").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
         else if(document.getElementById("prop1").getAttribute('enabled')=='true'&&
                 document.getElementById("tW1").getAttribute('enabled')=='false'&&
                 document.getElementById("tWW1").getAttribute('enabled')=='false'&&
                 document.getElementById("tWWW1").getAttribute('enabled')=='false'){
                 document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Loader has checked propulsion system already",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
                 score-=50;
         }
         else if(document.getElementById("tpod1").getAttribute('enabled')=='false'){
                 document.getElementById("tpod1").setAttribute('enabled', 'true');
                 document.getElementById("qs").setAttribute('enabled', 'true');
                 $("#ex8").modal({
                   escapeClose: false,
                   clickClose: false,
                   showClose: false,
                   fadeDuration: 500
             });    
         }
         else{
                 document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Launch Operator has checked propulsion system already",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
                 score-=50;
         }
     }
     function propel2(){
         if(document.getElementById("prop2").getAttribute('enabled')=='false'&&
            document.getElementById("tW1").getAttribute('enabled')=='false'&&
            document.getElementById("tWW1").getAttribute('enabled')=='false'&&
            document.getElementById("tWWW1").getAttribute('enabled')=='false'){
            document.getElementById("prop2").setAttribute('enabled', 'true');
            document.getElementById("qs").setAttribute('enabled', 'true');
             $("#ex7").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
         else if(document.getElementById("prop2").getAttribute('enabled')=='true'&&
                 document.getElementById("tW1").getAttribute('enabled')=='false'&&
                 document.getElementById("tWW1").getAttribute('enabled')=='false'&&
                 document.getElementById("tWWW1").getAttribute('enabled')=='false'){
                 document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Loader has checked propulsion system already",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
                 score-=50;
         }
         else if(document.getElementById("tpod2").getAttribute('enabled')=='false'){
                 document.getElementById("tpod2").setAttribute('enabled', 'true');
                 document.getElementById("qs").setAttribute('enabled', 'true');
                 $("#ex8").modal({
                   escapeClose: false,
                   clickClose: false,
                   showClose: false,
                   fadeDuration: 500
             });    
         }
         else{
                 document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Launch Operator has checked propulsion system already",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
                 score-=50;
         }
     }
     function propel3(){
         if(document.getElementById("prop3").getAttribute('enabled')=='false'&&
            document.getElementById("tW1").getAttribute('enabled')=='false'&&
            document.getElementById("tWW1").getAttribute('enabled')=='false'&&
            document.getElementById("tWWW1").getAttribute('enabled')=='false'){
            document.getElementById("prop3").setAttribute('enabled', 'true');
            document.getElementById("qs").setAttribute('enabled', 'true');
             $("#ex7").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
         else if(document.getElementById("prop3").getAttribute('enabled')=='true'&&
                 document.getElementById("tW1").getAttribute('enabled')=='false'&&
                 document.getElementById("tWW1").getAttribute('enabled')=='false'&&
                 document.getElementById("tWWW1").getAttribute('enabled')=='false'){
                 document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Loader has checked propulsion system already",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
                 score-=50;
         }
         else if(document.getElementById("tpod3").getAttribute('enabled')=='false'){
                 document.getElementById("tpod3").setAttribute('enabled', 'true');
                 document.getElementById("qs").setAttribute('enabled', 'true');
                 $("#ex8").modal({
                   escapeClose: false,
                   clickClose: false,
                   showClose: false,
                   fadeDuration: 500
             });    
         }
         else{
                 document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Launch Operator has checked propulsion system already",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
                 score-=50;
         }
     }
     function propel4(){
         if(document.getElementById("prop4").getAttribute('enabled')=='false'&&
            document.getElementById("tW1").getAttribute('enabled')=='false'&&
            document.getElementById("tWW1").getAttribute('enabled')=='false'&&
            document.getElementById("tWWW1").getAttribute('enabled')=='false'){
            document.getElementById("prop4").setAttribute('enabled', 'true');
            document.getElementById("qs").setAttribute('enabled', 'true');
             $("#ex7").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
         else if(document.getElementById("prop4").getAttribute('enabled')=='true'&&
                 document.getElementById("tW1").getAttribute('enabled')=='false'&&
                 document.getElementById("tWW1").getAttribute('enabled')=='false'&&
                 document.getElementById("tWWW1").getAttribute('enabled')=='false'){
                 document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Loader has checked propulsion system already",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
                 score-=50;
         }
         else if(document.getElementById("tpod4").getAttribute('enabled')=='false'){
                 document.getElementById("tpod4").setAttribute('enabled', 'true');
                 document.getElementById("qs").setAttribute('enabled', 'true');
                 $("#ex8").modal({
                   escapeClose: false,
                   clickClose: false,
                   showClose: false,
                   fadeDuration: 500
             });    
         }
         else{
                 document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Launch Operator has checked propulsion system already",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
                 score-=50;
         }
     }
     function sub7() {
             question7 = document.quiz7.q7.value;
              if(question7==2){
                   score +=100;
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
              }
     }
     function sub8(){
         question8 = document.quiz8.q8.value;
              if(question8==2){
                   score +=100;
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
              }
     }
     function loadwing1(){
         if(document.getElementById("tWW1").getAttribute('enabled')=='true' ||
            document.getElementById("tWWW1").getAttribute('enabled')=='true'){
            document.getElementById("e2").setAttribute('enabled', 'true');
          swal({
                   title: "Hey!!!",
                   text: "You have selected a wing already",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
             score -=50;
           }
         else if(document.getElementById("prop1").getAttribute('enabled')=='false'&&
            document.getElementById("prop2").getAttribute('enabled')=='false'&&
            document.getElementById("prop3").getAttribute('enabled')=='false'&&
            document.getElementById("prop4").getAttribute('enabled')=='false'&&
            document.getElementById("tW1").getAttribute('enabled')=='false'){
            document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Loader has not checked propulsion system",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
             score -=50;
           }
      else if(document.getElementById("wing1").getAttribute('enabled')=='true'){
              document.getElementById("wing1").setAttribute('enabled', 'false');
              document.getElementById("prop1").setAttribute('enabled', 'false');
              document.getElementById("prop2").setAttribute('enabled', 'false');
              document.getElementById("prop3").setAttribute('enabled', 'false');
              document.getElementById("prop4").setAttribute('enabled', 'false');
            setTimeout(function(){ 
               document.getElementById("s1").setAttribute('enabled', 'true');
           swal({
                   title: "Great!",
                   text: "Wing inserted successfully",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
         }, 2000);
           score +=100;
         }
         else if(document.getElementById("prop1").getAttribute('enabled')=='true'||
                 document.getElementById("prop2").getAttribute('enabled')=='true'||
                 document.getElementById("prop3").getAttribute('enabled')=='true'||
                 document.getElementById("prop4").getAttribute('enabled')=='true'&&
                 document.getElementById("wing1").getAttribute('enabled')=='false'&&
                 document.getElementById("tW1").getAttribute('enabled')=='false'){
                 document.getElementById("wing1").setAttribute('enabled', 'true');
                 document.getElementById("tW1").setAttribute('enabled', 'true');
                 document.getElementById("qs").setAttribute('enabled', 'true');
             $("#ex4").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
         else {
         }
    }
    function loadwing2(){
         if(document.getElementById("tW1").getAttribute('enabled')=='true' ||
                 document.getElementById("tWWW1").getAttribute('enabled')=='true'){
                 document.getElementById("e2").setAttribute('enabled', 'true');
          swal({
                   title: "Hey!!!",
                   text: "You have selected a wing already",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
             score -=50;
           }
         else if(document.getElementById("prop1").getAttribute('enabled')=='false'&&
            document.getElementById("prop2").getAttribute('enabled')=='false'&&
            document.getElementById("prop3").getAttribute('enabled')=='false'&&
            document.getElementById("prop4").getAttribute('enabled')=='false'&&
            document.getElementById("tWW1").getAttribute('enabled')=='false'){
            document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Loader has not checked propulsion system",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
             score -=50;
           }
      else if(document.getElementById("wing2").getAttribute('enabled')=='true'){
              document.getElementById("wing2").setAttribute('enabled', 'false');
              document.getElementById("prop1").setAttribute('enabled', 'false');
              document.getElementById("prop2").setAttribute('enabled', 'false');
              document.getElementById("prop3").setAttribute('enabled', 'false');
              document.getElementById("prop4").setAttribute('enabled', 'false');
            setTimeout(function(){ 
               document.getElementById("s1").setAttribute('enabled', 'true');
           swal({
                   title: "Great!",
                   text: "Wing inserted successfully",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
         }, 2000);
           score +=100;
         }
         else if(document.getElementById("prop1").getAttribute('enabled')=='true'||
                 document.getElementById("prop2").getAttribute('enabled')=='true'||
                 document.getElementById("prop3").getAttribute('enabled')=='true'||
                 document.getElementById("prop4").getAttribute('enabled')=='true'&&
                 document.getElementById("wing2").getAttribute('enabled')=='false'&&
                 document.getElementById("tWW1").getAttribute('enabled')=='false'){
                 document.getElementById("wing2").setAttribute('enabled', 'true');
                 document.getElementById("tWW1").setAttribute('enabled', 'true');
                 document.getElementById("qs").setAttribute('enabled', 'true');
             $("#ex4").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
         else {
         }
    }
    function loadwing3(){
         if(document.getElementById("tW1").getAttribute('enabled')=='true' ||
                 document.getElementById("tWW1").getAttribute('enabled')=='true'){
                 document.getElementById("e2").setAttribute('enabled', 'true');
          swal({
                   title: "Hey!!!",
                   text: "You have selected a wing already",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
             score -=50;
           }
        else if(document.getElementById("prop1").getAttribute('enabled')=='false'&&
            document.getElementById("prop2").getAttribute('enabled')=='false'&&
            document.getElementById("prop3").getAttribute('enabled')=='false'&&
            document.getElementById("prop4").getAttribute('enabled')=='false'&&
            document.getElementById("tWWW1").getAttribute('enabled')=='false'){
            document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Loader has not checked propulsion system",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
             score -=50;
           }
      else if(document.getElementById("wing3").getAttribute('enabled')=='true'){
              document.getElementById("wing3").setAttribute('enabled', 'false');
              document.getElementById("prop1").setAttribute('enabled', 'false');
              document.getElementById("prop2").setAttribute('enabled', 'false');
              document.getElementById("prop3").setAttribute('enabled', 'false');
              document.getElementById("prop4").setAttribute('enabled', 'false');
            setTimeout(function(){ 
               document.getElementById("s1").setAttribute('enabled', 'true');
           swal({
                   title: "Great!",
                   text: "Wing inserted successfully",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
         }, 2000);
           score +=100;
         }
         else if(document.getElementById("prop1").getAttribute('enabled')=='true'||
                 document.getElementById("prop2").getAttribute('enabled')=='true'||
                 document.getElementById("prop3").getAttribute('enabled')=='true'||
                 document.getElementById("prop4").getAttribute('enabled')=='true'&&
                 document.getElementById("wing3").getAttribute('enabled')=='false'&&
                 document.getElementById("tWWW1").getAttribute('enabled')=='false'){
                 document.getElementById("wing3").setAttribute('enabled', 'true');
                 document.getElementById("tWWW1").setAttribute('enabled', 'true');
                 document.getElementById("qs").setAttribute('enabled', 'true');
             $("#ex4").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
         else {
         }
    }
     function loadwing4(){ 
         document.getElementById("e2").setAttribute('enabled', 'true');
         swal({
                   title: "Hey!!!",
                   text: "Wing is down",
                   icon: "warning",
                   button: false,
                   timer: 3000
                 });
                 score-=50;
    }
    function sub4() {
            question4 = document.quiz4.q4.value;
              if(question4==1){
                   score +=100;
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
              }
     }
    function loadBattery1(){
           setTimeout(function(){
               document.getElementById("e2").setAttribute('enabled', 'true');
           swal({
                   title: "Hey!!!",
                   text: "Battery has a problem.",
                   icon: "warning",
                   button: false,
                   timer: 3000
                 });
         }, 500);
           score -=50;
    }

    function loadBattery2(){
         if(document.getElementById("tBB1").getAttribute('enabled')=='true'||
               document.getElementById("tBBB1").getAttribute('enabled')=='true'){
               document.getElementById("y2").setAttribute('enabled', 'true');
          swal({
                   title: "Hey!!!",
                   text: "You have selected a battery already",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
           score -=50;
           }
     else if(document.getElementById("tpod1").getAttribute('enabled')=='false'&&
           document.getElementById("tpod2").getAttribute('enabled')=='false'&&
           document.getElementById("tpod3").getAttribute('enabled')=='false'&&
           document.getElementById("tpod4").getAttribute('enabled')=='false'&&
           document.getElementById("tB1").getAttribute('enabled')=='false'){
           document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Launch Operator has not checked propulsion system",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
           }
        else if(document.getElementById("battery2").getAttribute('enabled')=="true"){
           setTimeout(function(){
               document.getElementById("battery2").setAttribute('enabled', 'false');
               document.getElementById("s1").setAttribute('enabled', 'true');
           swal({
                   title: "Great!",
                   text: "Battery inserted successfully",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
         }, 1500);
           score +=100;
         }
        else if(document.getElementById("tpod1").getAttribute('enabled')=='true'||
                document.getElementById("tpod2").getAttribute('enabled')=='true'||
                document.getElementById("tpod3").getAttribute('enabled')=='true'||
                document.getElementById("tpod4").getAttribute('enabled')=='true'&&
                document.getElementById("tB1").getAttribute('enabled')=='false'){
                document.getElementById("tB1").setAttribute('enabled', 'true');
                document.getElementById("battery2").setAttribute('enabled', 'true');
                document.getElementById("qs").setAttribute('enabled', 'true');
             $("#ex5").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
           else {
           }
    }
    function loadBattery3(){
           setTimeout(function(){
               document.getElementById("e2").setAttribute('enabled', 'true');
           swal({
                   title: "Hey!!!",
                   text: "Battery is still charging",
                   icon: "warning",
                   button: false,
                   timer: 3000
                 });
         }, 500);
           score -=50;
    }

    function loadBattery4(){
         if(document.getElementById("tB1").getAttribute('enabled')=='true'||
               document.getElementById("tBBB1").getAttribute('enabled')=='true'){
               document.getElementById("e2").setAttribute('enabled', 'true');
          swal({
                   title: "Hey!!!",
                   text: "You have selected a battery already",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
           score -=50;
           }
     else if(document.getElementById("tpod1").getAttribute('enabled')=='false'&&
           document.getElementById("tpod2").getAttribute('enabled')=='false'&&
           document.getElementById("tpod3").getAttribute('enabled')=='false'&&
           document.getElementById("tpod4").getAttribute('enabled')=='false'&&
           document.getElementById("tBB1").getAttribute('enabled')=='false'){
           document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "Launch Operator has not checked propulsion system",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
           }
        else if(document.getElementById("battery4").getAttribute('enabled')=="true"){
           setTimeout(function(){
               document.getElementById("battery4").setAttribute('enabled', 'false');
               document.getElementById("s1").setAttribute('enabled', 'true');
           swal({
                   title: "Great!",
                   text: "Battery inserted successfully",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
         }, 1500);
           score +=100;
         }
        else if(document.getElementById("tpod1").getAttribute('enabled')=='true'||
                document.getElementById("tpod2").getAttribute('enabled')=='true'||
                document.getElementById("tpod3").getAttribute('enabled')=='true'||
                document.getElementById("tpod4").getAttribute('enabled')=='true'&&
                document.getElementById("tBB1").getAttribute('enabled')=='false'){
                document.getElementById("tBB1").setAttribute('enabled', 'true');
                document.getElementById("battery4").setAttribute('enabled', 'true');
                document.getElementById("qs").setAttribute('enabled', 'true');
             $("#ex5").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500
             });
         }
           else {
           }
    }
    function loadBattery5(){
           setTimeout(function(){
          document.getElementById("e2").setAttribute('enabled', 'true');
           swal({
                   title: "Hey!!!",
                   text: "Battery is waiting to be charged.",
                   icon: "warning",
                   button: false,
                   timer: 3000
                 });
         }, 50);
           score -=50;
    }

    function loadBattery6(){
            setTimeout(function(){
               document.getElementById("battery6").setAttribute('enabled', 'false');
               document.getElementById("e2").setAttribute('enabled', 'true');
           swal({
                   title: "Hey!",
                   text: "Battery is still charging",
                   icon: "warning",
                   button: false,
                   timer: 3000
                 });
         }, 500);
           score -=50;
    }
      function sub5(){
            question5 = document.quiz5.q5.value;
              if(question5==3){
                   score +=100; 
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
              }
     }
    function loadNose1(){
        if(document.getElementById("tNN1").getAttribute('enabled')=='true'||
           document.getElementById("tNNN1").getAttribute('enabled')=='true'||
           document.getElementById("tNNNN1").getAttribute('enabled')=='true'){
           document.getElementById("e2").setAttribute('enabled', 'true');
                  swal({
                           title: "Hey!!!",
                           text: "You have selected a nose cone already",
                           icon: "error",
                           button: false,
                           timer: 3000
                         });
                   score -=50;
                   }
        else if(document.getElementById("tN1").getAttribute('enabled')=='false'&&
                document.getElementById("tB1").getAttribute('enabled')=='false'&&
                document.getElementById("tBB1").getAttribute('enabled')=='false'&&
                document.getElementById("tBBB1").getAttribute('enabled')=='false'){
                document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "You did not insert battery",
                   icon: "error",
                   button: "oh noez!",
                 });
           } 
           else if(document.getElementById("noseCone1").getAttribute('enabled')=='true'){
                setTimeout(function(){
                   document.getElementById("s1").setAttribute('enabled', 'true');
                   document.getElementById("noseCone1").setAttribute('enabled', 'false');
               swal({
                       title: "Great!",
                       text: "Nose cone inserted successfully",
                       icon: "success",
                       button: false,
                       timer: 3000
                     }); 
             }, 1500);
               score +=100;
             }
           else if(document.getElementById("noseCone1").getAttribute('enabled')=='false'&&
                   document.getElementById("noseCone2").getAttribute('enabled')=='false'&&
                   document.getElementById("noseCone3").getAttribute('enabled')=='false'&&
                   document.getElementById("noseCone4").getAttribute('enabled')=='false'&&
                   document.getElementById("tN1").getAttribute('enabled')=='false'){
                   document.getElementById("tN1").setAttribute('enabled', 'true');
                   document.getElementById("noseCone1").setAttribute('enabled', 'true');
                   //document.getElementById("qs").setAttribute('enabled', 'true');
                 $("#ex6").modal({
                   escapeClose: false,
                   clickClose: false,
                   showClose: false,
                   fadeDuration: 500
                 });
             }
             else {
             }
    }
     function loadNose2(){
         if(document.getElementById("tN1").getAttribute('enabled')=='true'||
           document.getElementById("tNNN1").getAttribute('enabled')=='true'||
           document.getElementById("tNNNN1").getAttribute('enabled')=='true'){
           document.getElementById("e2").setAttribute('enabled', 'true');
                  swal({
                           title: "Hey!!!",
                           text: "You have selected a nose cone already",
                           icon: "error",
                           button: false,
                           timer: 3000
                         });
                   score -=50;
                   }
        else if(document.getElementById("tNN1").getAttribute('enabled')=='false'&&
                document.getElementById("tB1").getAttribute('enabled')=='false'&&
                document.getElementById("tBB1").getAttribute('enabled')=='false'&&
                document.getElementById("tBBB1").getAttribute('enabled')=='false'){
                document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "You did not insert battery",
                   icon: "error",
                   button: "oh noez!",
                 });
           } 
           else if(document.getElementById("noseCone2").getAttribute('enabled')=='true'){
                setTimeout(function(){
                   document.getElementById("s1").setAttribute('enabled', 'true');
                   document.getElementById("noseCone2").setAttribute('enabled', 'false');
               swal({
                       title: "Great!",
                       text: "Nose cone inserted successfully",
                       icon: "success",
                       button: false,
                       timer: 3000
                     }); 
             }, 1500);
               score +=100;
             }
           else if(document.getElementById("noseCone1").getAttribute('enabled')=='false'&&
                   document.getElementById("noseCone2").getAttribute('enabled')=='false'&&
                   document.getElementById("noseCone3").getAttribute('enabled')=='false'&&
                   document.getElementById("noseCone4").getAttribute('enabled')=='false'&&
                   document.getElementById("tNN1").getAttribute('enabled')=='false'){
                   document.getElementById("tNN1").setAttribute('enabled', 'true');
                   document.getElementById("noseCone2").setAttribute('enabled', 'true');
                   document.getElementById("qs").setAttribute('enabled', 'true');
                 $("#ex6").modal({
                   escapeClose: false,
                   clickClose: false,
                   showClose: false,
                   fadeDuration: 500
                 });
             }
             else {
             }       
    }
     function loadNose3(){
         if(document.getElementById("tN1").getAttribute('enabled')=='true'||
           document.getElementById("tNN1").getAttribute('enabled')=='true'||
           document.getElementById("tNNNN1").getAttribute('enabled')=='true'){
           document.getElementById("e2").setAttribute('enabled', 'true');
                  swal({
                           title: "Hey!!!",
                           text: "You have selected a nose cone already",
                           icon: "error",
                           button: false,
                           timer: 3000
                         });
                   score -=50;
                   }
        else if(document.getElementById("tNNN1").getAttribute('enabled')=='false'&&
                document.getElementById("tB1").getAttribute('enabled')=='false'&&
                document.getElementById("tBB1").getAttribute('enabled')=='false'&&
                document.getElementById("tBBB1").getAttribute('enabled')=='false'){
                document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "You did not insert battery",
                   icon: "error",
                   button: "oh noez!",
                 });
           } 
           else if(document.getElementById("noseCone3").getAttribute('enabled')=='true'){
                setTimeout(function(){
                   document.getElementById("s1").setAttribute('enabled', 'true');
                   document.getElementById("noseCone3").setAttribute('enabled', 'false');
               swal({
                       title: "Great!",
                       text: "Nose cone inserted successfully",
                       icon: "success",
                       button: false,
                       timer: 3000
                     }); 
             }, 1500);
               score +=100;
             }
           else if(document.getElementById("noseCone1").getAttribute('enabled')=='false'&&
                   document.getElementById("noseCone2").getAttribute('enabled')=='false'&&
                   document.getElementById("noseCone3").getAttribute('enabled')=='false'&&
                   document.getElementById("noseCone4").getAttribute('enabled')=='false'&&
                   document.getElementById("tNNN1").getAttribute('enabled')=='false'){
                   document.getElementById("tNNN1").setAttribute('enabled', 'true');
                   document.getElementById("noseCone3").setAttribute('enabled', 'true');
                   document.getElementById("qs").setAttribute('enabled', 'true');
                 $("#ex6").modal({
                   escapeClose: false,
                   clickClose: false,
                   showClose: false,
                   fadeDuration: 500
                 });
             }
             else {
             }
    }

    function loadNose4(){
        if(document.getElementById("tN1").getAttribute('enabled')=='true'||
           document.getElementById("tNN1").getAttribute('enabled')=='true'||
           document.getElementById("tNNN1").getAttribute('enabled')=='true'){
           document.getElementById("e2").setAttribute('enabled', 'true');
                  swal({
                           title: "Hey!!!",
                           text: "You have selected a nose cone already",
                           icon: "error",
                           button: false,
                           timer: 3000
                         });
                   score -=50;
                   }
        else if(document.getElementById("tNNNN1").getAttribute('enabled')=='false'&&
                document.getElementById("tB1").getAttribute('enabled')=='false'&&
                document.getElementById("tBB1").getAttribute('enabled')=='false'&&
                document.getElementById("tBBB1").getAttribute('enabled')=='false'){
                document.getElementById("e2").setAttribute('enabled', 'true');
             swal({
                   title: "Hey!!!",
                   text: "You did not insert battery",
                   icon: "error",
                   button: "oh noez!",
                 });
           } 
           else if(document.getElementById("noseCone4").getAttribute('enabled')=='true'){
               setTimeout(function(){
                   document.getElementById("s1").setAttribute('enabled', 'true');
                   document.getElementById("noseCone4").setAttribute('enabled', 'false');
               swal({
                       title: "Great!",
                       text: "Nose cone inserted successfully",
                       icon: "success",
                       button: false,
                       timer: 3000
                     }); 
             }, 1500);
               score +=100;
             }
           else if(document.getElementById("noseCone1").getAttribute('enabled')=='false'&&
                   document.getElementById("noseCone2").getAttribute('enabled')=='false'&&
                   document.getElementById("noseCone3").getAttribute('enabled')=='false'&&
                   document.getElementById("noseCone4").getAttribute('enabled')=='false'&&
                   document.getElementById("tNNNN1").getAttribute('enabled')=='false'){
                   document.getElementById("tNNNN1").setAttribute('enabled', 'true');
                   document.getElementById("noseCone4").setAttribute('enabled', 'true');
                   //document.getElementById("qs").setAttribute('enabled', 'true');
                 $("#ex6").modal({
                   escapeClose: false,
                   clickClose: false,
                   showClose: false,
                   fadeDuration: 500
                 });
             }
             else {
             }             
    }
    function sub6(){
             question6 = document.quiz6.q6.value;
              if(question6==1){
                   score +=100; 
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
              }
     }
     function checks(){
            document.getElementById('view').setAttribute('set_bind','true');
         if(document.getElementById("tN1").getAttribute('enabled')=='true'||
            document.getElementById("tNN1").getAttribute('enabled')=='true'||
            document.getElementById("tNNN1").getAttribute('enabled')=='true'||
            document.getElementById("tNNNN1").getAttribute('enabled')=='true'){
             check1();
            }
            else{
                setTimeout(function(){
             document.getElementById("e2").setAttribute('enabled', 'true');
           swal({
                   title: "Hey!",
                   text: "Checks not due",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
         }, 1500);
       }
     }
     function check1(){
         document.getElementById("qs").setAttribute('enabled', 'true');
         $("#ex9").modal({
                   escapeClose: false,
                   clickClose: false,
                   showClose: false,
                   fadeDuration: 500
                 });
     }
     function sub9(){
             question9 = document.quiz9.q9.value;
              if(question9==1){
                   score +=100;
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
             }
             setTimeout(function(){ 
             check2();
         }, 3000);
     }
     function check2(){
         document.getElementById("qs").setAttribute('enabled', 'true');
         $("#ex10").modal({
                   escapeClose: false,
                   clickClose: false,
                   showClose: false,
                   fadeDuration: 500,
                 });
     }
     function sub10(){
             question10 = document.quiz10.q10.value;
              if(question10==4){
                   score +=100;
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
             }
             setTimeout(function(){ 
             check3();
             }, 3000);
     }
     function check3(){
         document.getElementById("qs").setAttribute('enabled', 'true');
         $("#ex11").modal({
                   escapeClose: false,
                   clickClose: false,
                   showClose: false,
                   fadeDuration: 500
                 });
     }
     function sub11(){
             question11 = document.quiz11.q11.value;
              if(question11==2){
                   score +=100;
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
             }
             setTimeout(function(){
             check4();
             }, 3000);
     }
     function check4(){
         document.getElementById("qs").setAttribute('enabled', 'true');
         $("#ex12").modal({
                   escapeClose: false,
                   clickClose: false,
                   showClose: false,
                   fadeDuration: 500
                 });
     }
     function sub12(){
             question12 = document.quiz12.q12.value;
             document.getElementById("checksWatch").setAttribute('enabled', 'true');
              if(question12==1){
                   score +=100;
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
             }
             setTimeout(function(){
             document.getElementById("ready").setAttribute('enabled', 'true');
              }, 1000);
     }
     function comms(){
            document.getElementById('comm').setAttribute('set_bind','true');
         if(document.getElementById("checksWatch").getAttribute('enabled')=='true'&&
            document.getElementById("commEnd").getAttribute('enabled')=='false'){
             comm1();
            }
         else if(document.getElementById("commEnd").getAttribute('enabled')=='true'){
             setTimeout(function(){
             document.getElementById("e2").setAttribute('enabled', 'true');
           swal({
                   title: "Hey!",
                   text: "Radio comms completed.",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
         }, 1500);
         }
         else if(document.getElementById("checksWatch").getAttribute('enabled')=='false'){
                setTimeout(function(){
             document.getElementById("e2").setAttribute('enabled', 'true');
           swal({
                   title: "Hey!",
                   text: "Radio comms not due.",
                   icon: "error",
                   button: false,
                   timer: 3000
                 });
         }, 1500);
       }
       
     }
     function comm1(){
         document.getElementById("qs").setAttribute('enabled', 'true');
         $("#ex13").modal({
                   escapeClose: false,
                   clickClose: false,
                   showClose: false,
                   fadeDuration: 500
                 });
     }
     function sub13(){
             question13 = document.quiz13.q13.value;
              if(question13==1){
                   score +=100;
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
             }
             setTimeout(function(){ 
             comm2();
         }, 2000);
     }
     function comm2(){
         document.getElementById("qs").setAttribute('enabled', 'true');
         $("#ex14").modal({
                   escapeClose: false,
                   clickClose: false,
                   showClose: false,
                   fadeDuration: 500,
                 });
     }
     function sub14(){
             question14 = document.quiz14.q14.value;
              if(question14==3){
                   score +=100;
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
             }
             setTimeout(function(){ 
             comm3();
             }, 2000);
     }
     function comm3(){
         document.getElementById("qs").setAttribute('enabled','true');
         $("#ex15").modal({
                   escapeClose: false,
                   clickClose: false,
                   showClose: false,
                   fadeDuration: 500
                 });
     }
     function sub15(){
             document.getElementById("commEnd").setAttribute('enabled', 'true');
             question15 = document.quiz15.q15.value;
              if(question15==2){
                   score +=100;
                   swal({
                   title: "Correct!!!",
                   icon: "success",
                   button: false,
                   timer: 1000
                 });  
              }
              else{
                  swal({
                   title: "Wrong!!!",
                   icon: "error",
                   button: false,
                   timer: 1000
                 });
             }
             setTimeout(function(){
             document.getElementById("e-stop").setAttribute('enabled', 'true');
              }, 1000);
              
         }
          function scores(){
             if(document.getElementById("scoreWatch").getAttribute('enabled')=='false'){
             for(i=0; i<localStorage.length; i++){
             var key = localStorage.key(i);
             var value = localStorage.getItem(key);
             var markup = "<tr><td>"+key+"</td><td>"+value+"</td></tr>";
             $('table tbody').append(markup);
             } 
         }
         else{
         }
              $("#result").modal({
               escapeClose: false,
               clickClose: false,
               showClose: false,
               fadeDuration: 500,
               fadeDelay: 0.50
             });
         document.getElementById("scoreWatch").setAttribute('enabled', 'true');
         }
 function launch()
     {
       if(document.getElementById("launch").getAttribute('enabled')=="true"){
         score +=100;
         document.getElementById("lsound").setAttribute('enabled', 'true');
         setTimeout(function(){
         document.getElementById("propsound").setAttribute('enabled', 'false');
         swal("Hurrayyyy!!!! nominal launch", {
               buttons: false,
               timer: 3000,
             });
       }, 2000);
           }
       else
           {
              document.getElementById("lsound").setAttribute('enabled', 'true');
              swal({
                   title: "Hey!!!",
                   text: "Zip is not ready",
                   icon: "error",
                   button: "oh noez!",
                 });
           }
    }
         
     function estop()
     {
       if(document.getElementById("e-stop").getAttribute('enabled')=="true"&& 
          document.getElementById("launch").getAttribute('enabled')=="false"){
           document.getElementById("spin").setAttribute('enabled', 'true');
           document.getElementById("tr").setAttribute('enabled', 'true'); 
           document.getElementById("esound").setAttribute('enabled', 'true');
           setTimeout(function(){
         document.getElementById("e-stop").setAttribute('enabled', 'true');
           swal({
                   title: "Great!",
                   text: "E-stop released",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
         }, 100);
          }
       else if(document.getElementById("e-stop").getAttribute('enabled')=="true"&& 
               document.getElementById("launch").getAttribute('enabled')=="true"){
               document.getElementById("tr").setAttribute('enabled', 'false');
               document.getElementById("red").setAttribute('diffuseColor', '0.01 0 0');
               document.getElementById("esound").setAttribute('enabled', 'true');
               var d = new Date();
               var key = d.toUTCString();
               var value = score;
               localStorage.setItem(key, value);
            setTimeout(function(){
               if(score>1900){
            swal({
                   title: "Congratulations!!!",
                   text: "You got an impressive score: "+score,
                   icon: "success",
                   button: "Awww yiss!",
                 });
            }
            else if(score>1800){
                swal({
                   title: "Congratulations!!!",
                   text: "You got a very good score: "+score,
                   icon: "success",
                   button: "Awww yiss!",
                 });
            }
            else if(score>1600){
                swal({
                   title: "Good Job!!!",
                   text: "You got a good score: "+score,
                   icon: "success",
                   button: "Ayt",
                 });
            }
            else if(score>1400){
                swal({
                   title: "Well Done!!!",
                   text: "You got an average score: "+score,
                   icon: "success",
                   button: "Okay!",
                 });
            }
            else if(score<1400){
                swal({
                   title: "Poor!!!",
                   text: "You got a low score: "+score,
                   icon: "success",
                   button: "Oh noez!",
                 });
            }
            }, 1000);
          }
       else
           {
            swal({
                   title: "Hey!!!",
                   text: "Radio comms not done.",
                   icon: "error",
                   button: "oh noez!",
                 });              
          }              
    }
    function enable()
     {
       if(document.getElementById("spin").getAttribute('enabled')=="true" &&
          document.getElementById("tZ11").getAttribute('enabled')=="true"){
           document.getElementById("launch").setAttribute('enabled', 'true');
           document.getElementById("tp1").setAttribute('enabled', 'true');  
           document.getElementById("ssound").setAttribute('enabled', 'true');
           document.getElementById("siren").setAttribute('enabled', 'true');
           document.getElementById("propsound").setAttribute('enabled', 'true');
           setTimeout(function(){
           
           swal({
                   title: "Wow!!!",
                   text: "Zip 100 is spinning motors",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
           document.getElementById("siren").setAttribute('enabled', 'false');
         }, 800);
          }
          else if(document.getElementById("spin").getAttribute('enabled')=="true" &&
                  document.getElementById("tZ21").getAttribute('enabled')=="true"){
                   document.getElementById("launch").setAttribute('enabled', 'true');
                   document.getElementById("tp2").setAttribute('enabled', 'true');  
                   document.getElementById("ssound").setAttribute('enabled', 'true');
                   document.getElementById("siren").setAttribute('enabled', 'true');
                   document.getElementById("propsound").setAttribute('enabled', 'true');
           setTimeout(function(){
           
           swal({
                   title: "Wow!!!",
                   text: "Zip 200 is spinning motors",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
           document.getElementById("siren").setAttribute('enabled', 'false');
         }, 800);
          }
          else if(document.getElementById("spin").getAttribute('enabled')=="true" &&
                  document.getElementById("tZ31").getAttribute('enabled')=="true"){
                   document.getElementById("launch").setAttribute('enabled', 'true');
                   document.getElementById("tp3").setAttribute('enabled', 'true');  
                   document.getElementById("ssound").setAttribute('enabled', 'true');
                   document.getElementById("siren").setAttribute('enabled', 'true');
                   document.getElementById("propsound").setAttribute('enabled', 'true');
           setTimeout(function(){
           
           swal({
                   title: "Wow!!!",
                   text: "Zip 300 is spinning motors",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
           document.getElementById("siren").setAttribute('enabled', 'false');
         }, 800);
          }
         else if(document.getElementById("spin").getAttribute('enabled')=="true" &&
                 document.getElementById("tZ41").getAttribute('enabled')=="true"){
                   document.getElementById("launch").setAttribute('enabled', 'true');
                   document.getElementById("tp4").setAttribute('enabled', 'true');  
                   document.getElementById("ssound").setAttribute('enabled', 'true');
                   document.getElementById("siren").setAttribute('enabled', 'true');
                   document.getElementById("propsound").setAttribute('enabled', 'true');
           setTimeout(function(){
           
           swal({
                   title: "Wow!!!",
                   text: "Zip 400 is spinning motors",
                   icon: "success",
                   button: false,
                   timer: 3000
                 });
           document.getElementById("siren").setAttribute('enabled', 'false');
         }, 800);
          }
       else 
           {
              swal({
                   title: "Hey!!!",
                   text: "You did not release E-stop",
                   icon: "error",
                   button: "oh noez!",
                 });
           }              
    }
    function mute(){
        if(document.getElementById("mute").getAttribute('enabled')=='true'){
            document.getElementById("mute").setAttribute('enabled', 'false');
        }
        else{
             document.getElementById("mute").setAttribute('enabled', 'true');
        }
    }
$(document).on("click", "#sub", function(e){
var name = $("#yname").val();
var role = $("#role").val();
var nest = $("#nest").val();
var comments = $("#comments").val();
var postData1 = 'name='+name+'&role='+role+'&nest='+nest+'&comments='+comments;
$.ajax({
 url : "feedback.php",
 type: "POST",
 data : postData1,
 cache: false,
 dataType: "json",
 success: function(result)
 {
 swal("feedback sent", {
       buttons: false,
       timer: 800,
     }); 
}, error: function ()
 {
     //if fail show error and server status
 swal("record not sent", {
           buttons: false,
           timer: 800,
         });         
 }
});
});

$(document).on("click", "#submit", function(e){
var fname = $("#fname").val();
var lname = $("#lname").val();

var postData2 = 'fname='+fname+'&lname='+lname;
$.ajax({
 url : "users.php",
 type: "POST",
 data : postData2,
 cache: false,
 dataType: "json",
 success: function(result)
 {
}, error: function ()
 {
     //if fail show error and server status
 swal("data not sent", {
           buttons: false,
           timer: 800,
         });         
 }
});
});