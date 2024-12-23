
/////////////////--------------UC-1--------------////////////

let Attendancemark=Math.floor(Math.random() + 0.5);


    if(Attendancemark==1){
        console.log('Employee Is Present');
    }
    else{
        console.log('Employee is Absent Today')
    }


/////////////////--------------UC-2--------------//////////////

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




