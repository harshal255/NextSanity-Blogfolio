export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'id',
            title: 'Project ID',
            type: 'number',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'projecttag',
            title: 'Project Tag',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Project Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Web Applications', value: 'web-applications' },
                    { title: 'Website', value: 'website' }
                ]
            }
        },
        {
            name: 'titledescription',
            title: 'Title Description',
            type: 'text',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'githublink',
            title: 'Github Link',
            type: 'string',
        },
        {
            name: 'linkedinlink',
            title: 'LinkedIn Link',
            type: 'string',
        },
        {
            name: 'livedemolink',
            title: 'Live Demo',
            type: 'string',
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'gifUrl',
            title: 'GifUrl(optional)',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            "name": "tags",
            "title": "Tags",
            "type": "array",
            "of": [
              {
                "type": "string"
              }
            ]
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
            name: 'endAt',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today'
            }

        },

    ],
    orderings: [
        {
          title: 'Popularity',
          name: 'popularityAsc',
          by: [
            {field: 'id', direction: 'asc'}
          ]
        }
      ]
    
}



