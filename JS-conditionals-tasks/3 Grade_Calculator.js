/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// const score = 90;
const score = 11;


if(score >= 90 && score <= 100){
    console.log('grade: A+')
}
else if(score >= 80 && score <= 89){
    console.log('grade: A')
}
else if(score >= 70 && score <= 79){
    console.log('grade: A-')
}
else if(score >= 60 && score <= 69){
    console.log('grade: B')
}
else {
    console.log('grade: Fail')
}

