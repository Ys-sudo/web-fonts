      
       
        
        
        
        
      let x = ["font-family: 'Dancing Script' ;","font-family: 'Lora';","font-family: 'Pacifico';",
                "font-family: 'Abril Fatface';","font-family: 'Sigmar One' ;","font-family: 'Comfortaa' ;",
                 "font-family: 'Righteous' ;","font-family: 'Fredoka One' ;","font-family: 'Caveat' ;",
                 "font-family: 'Satisfy'","font-family: 'Kaushan Script' ;","font-family: 'Lobster Two' ;",
                 "font-family: 'Sacramento' ;","font-family: 'Poiret One' ;","font-family: 'Ultra' ;",
                 "font-family: 'IBM Plex Mono' ;","font-family: 'Press Start 2P' ;","font-family: 'Luckiest Guy' ;",
                 "font-family: 'Unica One' ; ","font-family: 'Oleo Script' ;","font-family: 'Gothic A1' ;",
                 "font-family: 'Carter One' ; ","font-family: 'Modak';","font-family: 'Oranienbaum' ;",
                 "font-family: 'Anonymous Pro' ;","font-family: 'Petit Formal Script' ;","font-family: 'Knewave' ;",
                 "font-family: 'Poller One' ;","font-family: 'GFS Didot'","font-family: 'Amita' ;","font-family: 'Wallpoet' ;",
                 "font-family: 'Bungee Shade' ;","font-family: 'Permanent Marker' ;"  
                ];
      
        
        
      //to do: add the import function and head link function.
      let y = ["@import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');","@import url('https://fonts.googleapis.com/css?family=Lora&display=swap');","@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');"
                  
              ];
        
      
      function closes(){
           document.getElementById("popup").style.display ="none";
      }

      
       let dark = false;

        function changeBackground() {

          if(dark==false){
   document.body.style.background = "rgb(5,5,5)";
            document.body.style.color = "whitesmoke";
            document.getElementById("darklight").style.background ="whitesmoke";
            document.getElementById("darklight").style.color ="gray";
             document.getElementById("darklight").innerHTML ="Light Mode";
            
            
            document.getElementById("entry").style.color="white";
            
            document.getElementById("prevone").style.background="rgb(30,30,30)";
            document.getElementById("prevtwo").style.background="rgb(30,30,30)";
            document.getElementById("prevone").style.color="white";
            document.getElementById("prevtwo").style.color="white";
            document.getElementById("myCodeInput").style.background="rgb(30,30,30)";
            document.getElementById("myCodeInput").style.color="white";
            
            

            
            dark = true;
            return dark;
          } else if(dark==true) {

          document.getElementById("darklight").style.background ="rgb(20,20,20)";
            document.getElementById("darklight").style.color ="whitesmoke";
             document.getElementById("darklight").innerHTML ="Dark Mode";
            
          document.getElementById("entry").style.color="darkgray";
            
            document.getElementById("prevone").style.background="lightgray";
            document.getElementById("prevtwo").style.background="lightgray";
            document.getElementById("prevone").style.color="darkgray";
            document.getElementById("prevtwo").style.color="darkgray";

            document.body.style.background = "whitesmoke";
            document.body.style.color = "rgb(30,30,03)";
            dark = false;
            return dark;
          }
}
        
        
        //copy the css 1 - 33
        function copyCSS() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[0];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[0];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS1() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[1];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[1];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS2() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[2];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[2];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS3() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[3];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[3];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        
        function copyCSS4() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[4];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[4];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS5() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[5];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[5];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS6() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[6];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[6];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS7() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[7];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[7];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS8() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[8];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[8];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS9() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[9];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[9];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS10() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[10];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[10];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS11() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[11];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[11];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS12() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[12];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[12];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS13() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[13];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[13];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS14() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[14];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[14];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS15() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[15];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[15];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS16() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[16];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[16];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS17() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[17];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[17];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS18() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[18];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[18];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        
        function copyCSS19() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[19];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[19];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        
        function copyCSS20() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[20];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[20];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS21() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[21];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[21];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS22() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[22];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[22];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS23() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[23];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[23];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS24() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[24];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[24];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS25() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[25];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[25];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS26() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[26];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[26];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
          
        
          
        }
        function copyCSS27() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[27];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[27];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS28() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[28];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[28];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS29() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[29];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[29];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS30() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[30];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[30];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS31() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[31];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[31];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }
        function copyCSS32() {
              
          
        let copyText = document.getElementById("myCodeInput");
        copyText.value = x[32];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + x[32];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
          
        
          
        }


// function @import css 

function importcss0(){
  let copyText = document.getElementById("myCodeInput");
        copyText.value = y[0];
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          
        
 

        let tooltip = document.getElementById("myTooltip");
 
  
        tooltip.style.display = 'block';

        tooltip.innerHTML ="copied!<br><br>" + y[0];
        setTimeout(function(){tooltip.style.display="none";},3000);  
          
  
}