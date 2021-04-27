const students = [
    {id: 33, name: 'Parul Akhter'},
    {id: 34, name: 'Taslima Panna'},
    {id: 35, name: 'Mona'},
    {id: 36, name: 'Rimpy'}
];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 33);
const biggerOne = students.find(s => s.id > 33);
console.log(names, ids, bigger, biggerOne);