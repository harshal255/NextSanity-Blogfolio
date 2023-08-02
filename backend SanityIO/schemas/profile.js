export default {
    name: 'profile',
    type: 'document',
    title: 'Profile',
    fields: [
        {
            name: 'websitelogo',
            type: 'image',
            title: 'Website Logo',
            options: {
                hotspot: true
            },

        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'homeabout',
            type: 'string',
            title: 'Homeabout'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true
            },

        },
        {
            name: 'aboutimage',
            type: 'image',
            title: 'Aboutimage',
            options: {
                hotspot: true
            },

        },
        {
            name: 'aboutlabel',
            type: 'string',
            title: 'Label'
        },
        {
            name: 'aboutone',
            type: 'string',
            title: 'Aboutone'
        },
        {
            name: 'abouttwo',
            type: 'text',
            title: 'Abouttwo'
        },
        {
            name: 'aboutquotes',
            type: 'string',
            title: 'Aboutquotes'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email Id'
        },
        {
            title: 'Resume Link',
            name: 'resume',
            type: 'text'
        },

    ],
    description: "All Feilds are required"
}