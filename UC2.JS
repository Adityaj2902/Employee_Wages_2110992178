let workingHour =Math.trunc(Math.random()*3);

console.log(workingHour);

const isPartTime=4;
const isFullTime=8;
const noTime=0

let workHour=0;

switch(workingHour){

    case 0:workHour=noTime;

    case 1:workHour=isPartTime;
                     break;


    case 2:workHour=isFullTime;
                     break;
}


console.log(workHour);