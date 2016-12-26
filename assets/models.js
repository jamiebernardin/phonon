module.exports = {
    models: [
        {
            name: 'Person',
            displayField: 'name',
            searchField: 'name',
            detailField: ['age']
        },
        {
            name: 'Place',
            displayField: 'city',
            searchField: 'state',
            detailFields: ['state', 'zip']
        }
    ]
}