module.exports = {
    models: [
        {
            name: 'Person',
            displayField: 'name',
            searchField: 'name',
            rowDetailFields: ['age', 'handicap'],
            collections: ['pets']  // this is to tell the controller to populate collections
        },
        {
            name: 'Pet',
            displayField: 'name',
            searchField: 'name',
            rowDetailFields: ['color']
        },
        {
            name: 'Animal_type',
            displayField: 'name',
            searchField: 'name',
            rowDetailFields: ['life_expectancy']
        }
    ]
}