export default {
    name: 'education',
    type: 'document',
    title: 'Education',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'title should unique compare to previous title'
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string'
        },
        {
            name: 'description1',
            title: 'Description1',
            type: 'text',
        },
        {
            name: 'description2',
            title: 'Description2',
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