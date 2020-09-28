function akanNames(){
    var input =document.getElementById('birthday').value;
    var DD,MM,YY ;
    var d =new Date (input);
    
    YY = d.getFullYear(); 
    MM=d.getMonth();
    MM=MM+1;
     
    DD = d.getDate();
    
    
          
    
        var century = (YY-1)/100+1;
        var CC=parseFloat(century);
        var names=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'] ;
        var dayOfBirth=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
        var day = parseFloat ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
        var day= (day.toFixed(0));
        
        if( document.getElementById("male").checked){
          var gender = document.getElementById('male').value;
        }else{
          var gender =document.getElementById('female').value;
        }
        

          if( gender=='female' && day==1){
            document.getElementById("p2").innerHTML='You were born on '+ dayOfBirth[1]  + ' your akan name is '+ names[1];
            } else if( gender=='female' && day==2){
              document.getElementById("p2").innerHTML=' You were born on '+ dayOfBirth[2]  + ' your akan name is '+ names[2];
            } else if( gender=='female' &&day==3 ){
              document.getElementById("p2").innerHTML=' You were born on '+ dayOfBirth[3] +' your akan name is '+ names[3];
            } else if(gender=='female' &&day==4){
              document.getElementById("p2").innerHTML=' You were born on '+ dayOfBirth[4] +' your akan name is '+ names[4];
            } else if(gender=='female' &&day==5){
              document.getElementById("p2").innerHTML=' You were born on '+ dayOfBirth[5] +' your akan name is '+ names[5];
            } else if(gender=='female' &&day==6){
              document.getElementById("p2").innerHTML=' You were born on '+ dayOfBirth[6] +' your akan name is '+ names[6];
            }else if(gender=='female' &&day==0){
              document.getElementById("p2").innerHTML=' You were born on '+ dayOfBirth[0] +' your akan name is '+ names[0];
            }else if(gender=="male" &&day==1){
              document.getElementById("p2").innerHTML=' You were born on '+ dayOfBirth[1] +' your akan name is '+ maleNames[1];
            } else if(gender=="male" &&day==2){
              document.getElementById("p2").innerHTML=' You were born on '+ dayOfBirth[2] +' your akan name is '+ maleNames[2];
            } else if(gender=="male" &&day==3){
              document.getElementById("p2").innerHTML=' You were born on '+ dayOfBirth[3] +' your akan name is '+ maleNames[3];
            } else if(gender=="male" &&day==4){
              document.getElementById("p2").innerHTML=' You were born on '+ dayOfBirth[4] +' your akan name is '+ maleNames[4];
            } else if(gender=="male" &&day==5){
              document.getElementById("p2").innerHTML=' You were born on '+ dayOfBirth[5] +' your akan name is '+ maleNames[5];
            } else if(gender=="male" &&day==6){
              document.getElementById("p2").innerHTML=' You were born on '+ dayOfBirth[6] +' your akan name is '+ maleNames[6];
            }else if (gender=="male" &&day==0){
              document.getElementById("p2").innerHTML=' You were born on '+ dayOfBirth[0] +' your akan name is '+ maleNames[0];
            } else {
              document.getElementById("p2").innerHTML='Please fill the form';
            }
          }
          