const startingMinutes=5;
let time=startingMinutes*60;











function check(){
var c=0;
const q1=document.quiz.question1.value;
const q2=document.quiz.question2.value;
const q3=document.quiz.question3.value;
const q4=document.quiz.question4.value;
const q5=document.quiz.question5.value;
var result=document.getElementById("res");
if(q1=="1") {c++;}
if(q2=="3") {c++;}
if(q3=="1") {c++;}
if(q4=="2") {c++;}
if(q5=="3") {c++;}
result.textContent=`${c}`;
if(c==5)
{
  alert("Поздравляю &#127942 Ты получил 5/5 балла!")
}
else if(c==4)
{
  alert("Ты получил 4/5 балла");
}
else if(c==3)
{
  alert("Ты получил 3/5 балла");
}
else if(c==2)
{
  alert("Ты получил 2/5 балла");
}
else if(c==1)
{
  alert("Ты получил 1/5 балла");
}
else
{
  alert("Ты получил 0/5");
}
};
