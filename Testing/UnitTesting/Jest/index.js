const sorter = [
    { name: 'saddm', age: '8' },
    { name: 'smesam', age: '18' },
    { name: 'dd', age: '81' },
];

const sortByAge = () => {
    const value = sorter.sort((a, b) => {
        return a.age - b.age;
    });

    return value;
};

console.log(sortByAge());

module.exports = { sortByAge };