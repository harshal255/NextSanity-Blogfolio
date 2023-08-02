export default {
    name: 'titlequotes',
    title: 'Title Quotes',
    type: 'document',
    fields: [
        {
            name: 'pagequotes',
            title: 'Page Quotes',
            type: 'object',
            fields: [
                {
                    name: 'about',
                    title: 'About Page Quotes',
                    type: 'string',
                },
                {
                    name: 'skill',
                    title: 'Skill Page Quotes',
                    type: 'string',
                },
                {
                    name: 'experience',
                    title: 'Experience Page Quotes',
                    type: 'string',
                },
                {
                    name: 'project',
                    title: 'Project Page Quotes',
                    type: 'string',
                },
                {
                    name: 'blog',
                    title: 'Blog Page Quotes',
                    type: 'string',
                },
                {
                    name: 'contact',
                    title: 'Contact Page Quotes',
                    type: 'string',
                },
            ],
        },
    ],
};
