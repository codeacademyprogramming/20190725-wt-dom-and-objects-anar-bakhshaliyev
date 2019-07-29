"use strict";


let scoreList = document.querySelector("#scores");
let studentList = document.querySelector("#students");

let inputName = document.querySelector("#name");
let inputSurname = document.querySelector("#surname");
let inputEmail = document.querySelector("#email");
let inputBirthday = document.querySelector("#birthday");

let studEmail = document.querySelector("#studEmail");
let studScore = document.querySelector("#studScore");

let studentArray = [];


function Student(ad, soyad, email, birthday){
    this.Name = ad;
    this.Surname = soyad;
    this.Email = email;
    this.Birthday = birthday;
    this.Score = [];

    this.AddScore = function(value){
        this.Score.push(value);
    };

    this.GetAverageScore = function(){
        let average = 0;

        if(this.Score.length > 0){
            for(let i = 0; i < this.Score.length; i++){
                average += this.Score[i];
            }
            average = average / this.Score.length;
        }
      
        return average;
    };
}


function addStudent(){

    let s1 = new Student(inputName.value, inputSurname.value);
    studentArray.push(s1);

    let liElem = document.createElement("li");
    liElem.setAttribute("data-index", (employeeArray.length-1));
    liElem.innerHTML = s1.Name + " " + s1.Surname;
    liElem.addEventListener("dblclick", function(){
        let studIndex = this.getAttribute("data-index");

        console.log(studentArray[studIndex].GetAverageScore());
    });

    studentList.appendChild(liElem);

    inputName.value = "";
    inputSurname.value = "";
    console.log(studentList);

}



function AddScore(){
    let index =  studentArray.findIndex((val, ind, arr)=>{
        if(val.Name.toLowerCase() == studName.value.toLowerCase()){
            return true;
        }
        return false;
    });

    if(index != -1) {
        studentArray[index].AddScore(Number(studScore.value));


        scoreList.innerHTML = "";
    
        for(let i = 0; i < studentArray[index].Score.length; i++){
            let li = document.createElement("li");
            li.innerText = studentArray[index].Score[i];
    
            scoreList.appendChild(li);
        }
    }
 
}


function showAverageScore(){

}

console.log(studentArray);
