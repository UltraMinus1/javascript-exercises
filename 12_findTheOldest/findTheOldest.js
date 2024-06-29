const currentYear = new Date().getFullYear();
const findTheOldest = function(people) {
    let ages = people.map((obj) => {
        if ('yearOfDeath' in obj) {
            return obj.yearOfDeath - obj.yearOfBirth;
        } else {
            return currentYear - obj.yearOfBirth;
        }
        
    });
    //console.log(typeof(ages))
    let bigestI 
    let bigestAge = 0
    for (let i = 0; i < ages.length; i++) {
        if (bigestAge < ages[i]) {
            bigestAge = ages[i];
            bigestI = i;
        }
    }
    return people[bigestI]
};

// Do not edit below this line
module.exports = findTheOldest;
