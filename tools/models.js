module.exports = {
    models: [
        {
            name: 'Person',
            displayField: 'name',
            searchField: 'name',
            rowDetailField: 'age'
        },
        {
            name: 'Place',
            displayField: 'city',
            searchField: 'state',
            rowDetailField: 'state'
        }
    ]
}