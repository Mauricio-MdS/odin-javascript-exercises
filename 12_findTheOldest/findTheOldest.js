const findTheOldest = function(people) {
    const sortedPeople = people.sort((a , b) => {
        const aAge = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
        const bAge = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
        return bAge - aAge;
    }
    
    );
    console.table(sortedPeople);
    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
