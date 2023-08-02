export default {
    name: 'myschooljourney',
    type: 'document',
    title: 'My School Journey',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'title should unique compare to previous title'
        },
        {
            name:'id',
            title:'Id',
            type:'string'
        },
       
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}