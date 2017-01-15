module.exports = {
    models: [
        {
            name: 'Worker',
            displayField: 'name',
            searchField: 'name',
            rowDetailFields: ['skill'],
            collections: ['assigned', 'watching']  // this is to tell the controller to populate collections
        },
        {
            name: 'Ticket',
            displayField: 'name',
            searchField: 'description',
            rowDetailFields: ['description'],
            collections: ['watchers']
        },
        {
            name: 'Priority_type',
            displayField: 'name',
            searchField: 'name',
            rowDetailFields: ['description']
        },
        {
            name: 'Ticket_status',
            displayField: 'name',
            searchField: 'name',
            rowDetailFields: ['description']
        },
        {
            name: 'Skill_type',
            displayField: 'name',
            searchField: 'name',
            rowDetailFields: ['description']
        }
    ]
}