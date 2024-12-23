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


function calculateMonthlyWage() {
    let totalMonthlyWage = 0;

   
    for (let day = 1; day <= 20; day++) {
        let workHours = getWorkingHours();
        let dailyWage = calculateDailyWage(workHours);
        totalMonthlyWage += dailyWage; 
    }

    return totalMonthlyWage;
}


let attendanceMark = Math.floor(Math.random() + 0.5);  

if (attendanceMark === 1) {
    console.log('Present');
    
    let monthlyWage = calculateMonthlyWage();
    console.log('Monthly Wage:' + monthlyWage);
} else {
    console.log(' Absent');
}
