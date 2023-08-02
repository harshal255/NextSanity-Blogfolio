export default {
    name: 'mycollegejourney',
    type: 'document',
    title: 'My College Journey',
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
            name:'role',
            title:'Role',
            type:'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'text',
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            title: 'Created At',
            name: 'launchAt',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today'
            }

        },
        {
            title: 'Ended At',
            name: 'EndedAt',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today'
            }

        },

    ],
}