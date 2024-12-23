function getWorkingHours() {
    let workingHour = Math.trunc(Math.random() * 3); 
    
    const isPartTime = 4;  
    const isFullTime = 8;  
    const noTime = 0;      

    let workHour = 0;  

    switch (workingHour) {
        case 0:
            workHour = noTime; 
            break;
        case 1:
            workHour = isPartTime; 
            break;
        case 2:
            workHour = isFullTime; 
            break;
        default:
            workHour = noTime;
    }

    return workHour;
}

function calculateDailyWage(workHours) {
    const wagePerHour = 20; 
    return workHours * wagePerHour;
}

let attendanceMark = Math.floor(Math.random() + 0.5); 

if (attendanceMark === 1) {
    console.log('Present');
    let workHours = getWorkingHours();
    console.log('Working Hours: ' + workHours);
    let dailyWage = calculateDailyWage(workHours);
    console.log('Daily Wage: $' + dailyWage);
} else {
    console.log('Employee is Absent Today');
}


