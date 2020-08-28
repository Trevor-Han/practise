flag = "btn1"; 
function btn1(){ 
  document.getElementById("btn2").style.color = "black"; 
//   document.getElementById("btn3").style.color = "black"; 
  document.getElementById("btn1").style.color = "red"; 
} 
function btn2(){ 
  document.getElementById("btn1").style.color = "black"; 
  document.getElementById("btn2").style.color = "red"; 
//   document.getElementById("btn3").style.color = "black"; 
} 
//  修改按纽切换颜色
function btn(num){ 
    if(num == 1){ 
      document.getElementById(flag).style.color = "#275695"; 
      document.getElementById(flag).style.backgroundColor = "#0c142e"; 
      document.getElementById("btn1").style.color = "#1f457b"; 
      document.getElementById("btn1").style.backgroundColor = ""; 
      flag = "btn1"; 
    } 
    if(num == 2){ 
    //   document.getElementById(flag).style.color = "black"; 
      document.getElementById(flag).style.backgroundColor = "#0c142e"; 
      document.getElementById("btn2").style.color = "#1f457b"; 
      document.getElementById("btn2").style.backgroundColor = "#275695"; 
      flag = "btn2"; 
    } 

} 