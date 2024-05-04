var testGrade = Math.floor(Math.random() * 100);

console.log(testGrade);

if (testGrade >= 90) {
    console.log('A');
} else if (testGrade >= 80 && testGrade < 90) {
    console.log('B');
} else if (testGrade >= 70 && testGrade < 80) {
    console.log('C');
} else if (testGrade > 65 && testGrade < 70) {
    console.log('D');
} else if (testGrade >= 0 && testGrade <=65) {
    console.log('F');
} else console.log('Incomplete Test');

