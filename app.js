console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count > 0) {
        for(let i = 0; i <= count; i++) {
            if(i % 2 !== 0) {
                console.log(i);
            }
        }
    } else {
        for(let i = 0; i >= count; i--) {
            if(i % 2 !== 0) {
                console.log(i);
            }
        }
    }
    return count;
}
printOdds(200);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    if (!userName && !age) {
        return "Please provide a valid username and age";
    }

    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age >= 16) {
        return aboveSixteen;
    } else {
        return belowSixteen;
    }
    
}
console.log(checkAge("Ricky", 16));

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

function cartesianPlane(x, y) {
    if(x == 0) {
        return `(${x}, ${y}) is on the y axis`;
    } else if(y == 0) {
        return `(${x}, ${y}) is on the x axis`;
    } else if(x > 0 && y > 0) {
        return `(${x}, ${y}) is in Quadrant 1`;
    } else if(x < 0 && y > 0) {
        return `(${x}, ${y}) is in Quadrant 2`;
    } else if(x < 0 && y < 0) {
        return `(${x}, ${y}) is in Quadrant 3`;
    } else {
        return `(${x}, ${y}) is in Quadrant 4`;
    }
}
console.log(cartesianPlane(3, 0)); // x-axis
console.log(cartesianPlane(0, 3)); // y-axis
console.log(cartesianPlane(3, 7)); // q1
console.log(cartesianPlane(-3, 7)); // q2
console.log(cartesianPlane(-3, -7)); // q3
console.log(cartesianPlane(3, -7)); // q4

// Exercise 4 
console.log("EXERCISE 4:\n==========\n");

function validTriangles(side1, side2, side3) {
    return side1 + side2 >= side3 && side1 + side3 >= side2 && side2 + side3 > side1;
}

function lengthsOfTriangles(side1, side2, side3) {
    let valid = validTriangles(side1, side2, side3);
    if(valid) {
        if(side1 == side2 && side2 == side3) {
            return `Sides ${side1}, ${side2}, ${side3} make an equilateral triangle`;
        } else if(side1 == side2 || side2 == side3 || side1 == side3) {
           return `Sides ${side1}, ${side2}, ${side3} make an isosceles triangle`;
        } else {
           return `Sides ${side1}, ${side2}, ${side3} make a scalene triangle`;
        }
    } else {
        return `Sides ${side1}, ${side2}, ${side3} make a invalid triangle`;
    }
}

console.log(lengthsOfTriangles(3, 7, 7)); // isoceles triangle
console.log(lengthsOfTriangles(3, 3, 3)); // equilateral triangle
console.log(lengthsOfTriangles(3, 7, 9)); // scalene triangle
console.log(lengthsOfTriangles(3, 3, 7)); // invalid triangle

// Exercise 5
console.log("EXERCISE 5:\n==========\n");
/* 15 days used, 15 days remaining
Average daily use: 3.333 GB/day
You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To stay below your data plan, use no more than 2.93 GB/day.*/

function dataPlanStatus(planLimit, day, usage) {
    let lengthOfPeriod = 30;
    let remainingDays = lengthOfPeriod - day;
    let remainingData = planLimit - usage;
    let currentAvg = (usage / day).toFixed(2);
    let dailyAvg = (planLimit / lengthOfPeriod).toFixed(2);
    let projectedUsg = currentAvg * lengthOfPeriod;
    let exceededUsg = (projectedUsg - planLimit).toFixed(1);

    if(currentAvg > dailyAvg) {
        currentStatus = "EXCEEDING";
    } else if(currentAvg < dailyAvg) {
        currentStatus = "UNDER";
    } else {
        currentStatus = "AT";
    }
    console.log(`${day} days used, ${remainingDays} days remaining \nAverage daily use: ${dailyAvg} GB/day\n`);
    console.log(`You are ${currentStatus} your average daily use (${currentAvg} GB/day \ncontinuing this high usage, you'll exceed your data plan by \n${exceededUsg} GB.`);
    console.log(`To stay below your data plan, use no more than ${(remainingData / remainingDays).toFixed(2)} GB/day.`);
}
console.log(dataPlanStatus(100, 15, 56));