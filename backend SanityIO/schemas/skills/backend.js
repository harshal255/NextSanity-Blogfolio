export default {
    name: 'backend',
    title: 'Backend',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Name should unique compare to previous title'
        },
        {
            name: 'id',
            title: 'Id',
            type: 'string',
            description: 'id should unique compare to previous id'
        },
       
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
       
    ],

}



