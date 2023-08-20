/**
 * Minimum Hours of Training to Win a Competition
 */
var minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
    let hours = 0;
    for (let i = 0; i < energy.length; i++) {
        if (energy[i] >= initialEnergy) {
            hours += energy[i] - initialEnergy + 1;
            initialEnergy += energy[i] - initialEnergy + 1;
        }
        if (experience[i] >= initialExperience) {
            hours += experience[i] - initialExperience + 1;
            initialExperience += experience[i] - initialExperience + 1;
        }
        initialEnergy -= energy[i];
        initialExperience += experience[i];
    }
    return hours;
};
let initialEnergy = 5, initialExperience = 3, energy = [1,4,3,2], experience = [2,6,3,1];
let res=minNumberOfHours(initialEnergy,initialExperience,energy,experience);
console.log(res);