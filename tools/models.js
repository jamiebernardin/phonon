module.exports = {
    models: [
        {
            name: 'Person',
            displayField: 'name',
            searchField: 'name',
            rowDetailFields: ['age', 'handicap'],
            collections: ['pets']
        },
        {
            name: 'Pet',
            displayField: 'name',
            searchField: 'name',
            rowDetailFields: ['name']
        },
        {
            name: 'Animal_type',
            displayField: 'name',
            searchField: 'name',
            rowDetailFields: ['name']
        }
    ]
}