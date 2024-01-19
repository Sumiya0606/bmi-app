let but=document.getElementById("calc");
but.addEventListener('click',calc);
function calc()
{
   let h=document.getElementById("hieght").value;
   let w=document.getElementById("wieght").value;
   let bmi=w/(h*h);
 let res=document.getElementById("result");
   if(bmi.toFixed(2)<16){
       res.style.display="block";
res.innerHTML="Underweight";
}else if(   ((bmi.toFixed(2))>=18.5)&&((bmi.toFixed(2))<=25)){  res.style.display="block";
res.innerHTML="Normal";}
else if(   ((bmi.toFixed(2))>25)){  res.style.display="block";
res.innerHTML="Overweight";}
document.getElementById("hieght").value='';
document.getElementById("wieght").value='';
}