function akanNames(){
    var input =document.getElementById('birthday').value;
    var AD,BD,AY ;
    var f =new Date (input);
    
    AY= f.getFullYear(); 
    BD=f.getMonth();
    BD=BD+1;
     
   AD = f.getDate();
    
    
          
    
        var century = (AY-1)/100+1;
        var CC=parseFloat(century);
        var femaleNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'] ;
        var dayOfBirth=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
        var day = parseFloat ( ( (CC/4) -2*CC-1) + ((5*AY/4) ) + ((26*(BD+1)/10)) + AD ) % 7;
        var day= (day.toFixed(0));
        
        if( document.getElementById("male").checked){
          var gender = document.getElementById('male').value;
        }else{
          var gender =document.getElementById('female').value;
        }
        

          if( gender=='female' && day==1){
            document.getElementById("p2").innerHTML= dayOfBirth[1]  + ' your akan name is '+ femaleNames[1];

            } else if( gender=='female' && day==2){
              document.getElementById("p2").innerHTML= dayOfBirth[2]  + ' your akan name is '+ femaleNames[2];
            } else if( gender=='female' &&day==3 ){
              document.getElementById("p2").innerHTML= dayOfBirth[3] +' your akan name is '+ femaleNames[3];
            } else if(gender=='female' &&day==4){
              document.getElementById("p2").innerHTML= dayOfBirth[4] +' your akan name is '+ femaleNames[4];
            } else if(gender=='female' &&day==5){
              document.getElementById("p2").innerHTML= dayOfBirth[5] +' your akan name is '+ femaleNames[5];
            } else if(gender=='female' &&day==6){
              document.getElementById("p2").innerHTML= dayOfBirth[6] +' your akan name is '+ femaleNames[6];
            }else if(gender=='female' &&day==0){
              document.getElementById("p2").innerHTML= dayOfBirth[0] +' your akan name is '+ femaleNames[0];
            }else if(gender=="male" &&day==1){
              document.getElementById("p2").innerHTML= dayOfBirth[1] +' your akan name is '+ maleNames[1];
            } else if(gender=="male" &&day==2){
              document.getElementById("p2").innerHTML= dayOfBirth[2] +' your akan name is '+ maleNames[2];
            } else if(gender=="male" &&day==3){
              document.getElementById("p2").innerHTML= dayOfBirth[3] +' your akan name is '+ maleNames[3];
            } else if(gender=="male" &&day==4){
              document.getElementById("p2").innerHTML= dayOfBirth[4] +' your akan name is '+ maleNames[4];
            } else if(gender=="male" &&day==5){
              document.getElementById("p2").innerHTML= dayOfBirth[5] +' your akan name is '+ maleNames[5];
            } else if(gender=="male" &&day==6){
              document.getElementById("p2").innerHTML= dayOfBirth[6] +' your akan name is '+ maleNames[6];
            }else if (gender=="male" &&day==0){
              document.getElementById("p2").innerHTML= dayOfBirth[0] +' your akan name is '+ maleNames[0];
            } else {
              document.getElementById("p2").innerHTML='Please fill the form';
            }
          }
          