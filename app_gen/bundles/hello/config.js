module.exports = {
    models: [
        {
            name: 'Hello',
            displayField: 'greeting',
            searchField: 'greeting',
            rowDetailFields: ['description']
        },
        {
            name: 'Language',
            displayField: 'name',
            searchField: 'name',
            rowDetailFields: ['description']
        }
    ]
}