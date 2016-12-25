module.exports = {
    models: [
        {
            model: 'Person',
            displayField: 'name',
            searchField: 'name',
            detailField: ['age']
        },
        {
            model: 'Place',
            displayField: 'city',
            searchField: 'state',
            detailFields: ['state', 'zip']
        }
    ]
}