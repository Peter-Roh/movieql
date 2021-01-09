export const people = [
    {
        id: '0',
        name: 'nico',
        age: 19,
        gender: 'male'
    },
    {
        id: '1',
        name: 'lynn',
        age: 20,
        gender: 'female'
    },
    {
        id: '2',
        name: 'Daal',
        age: 31,
        gender: 'male'
    },
    {
        id: '3',
        name: 'Ma',
        age: 30,
        gender: 'male'
    },
    {
        id: '4',
        name: 'JD',
        age: 32,
        gender: 'female'
    }
];

export const getById = id => {
    return people.find(person => id === people.id);
}
