module.exports = {
    models: [
        {
            name: 'Person',
            displayField: 'name',
            searchField: 'name',
            rowDetailField: 'age'
        },
        {
            name: 'Pet',
            displayField: 'name',
            searchField: 'name',
            rowDetailField: 'name'
        },
        {
            name: 'Animal_type',
            displayField: 'name',
            searchField: 'name',
            rowDetailField: 'name'
        }
    ]
}