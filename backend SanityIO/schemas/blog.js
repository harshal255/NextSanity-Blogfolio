import { copyPaste } from '@superside-oss/sanity-plugin-copy-paste'

export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'id',
            type: 'number',
            title: 'Id',
            description: 'Id should unique compare to previous title'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
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
        // {
        //     name: 'content',
        //     title: 'Content',
        //     type: 'array',
        //     of: [
        //         {
        //             type: 'block'
        //         },
        //         {
        //             type: 'image',
        //             options: {
        //                 hotspot: true
        //             },
        //             fields: [
        //                 {
        //                     type: 'text',
        //                     name: 'alt',
        //                     title: 'Alternative text',
        //                     options: {
        //                         isHighlighted: true
        //                     }
        //                 }
        //             ]
        //         }
        //     ],
        //     inputComponent: copyPaste // Add this line to include the copyPaste plugin
        // },
        {
            name: 'metadesc',
            type: 'text',
            title: 'Meta Description'
        },
        {
            name: 'blogtag',
            type: 'string',
            title: 'Blog Tag'
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
                isHighlighted: true // <-- make this field easily accessible
            }
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
            name: 'paraone',
            type: 'text',
            title: 'Paragraph1'
        },
        {
            name: 'paratwo',
            type: 'text',
            title: 'Paragraph2'
        },
        {
            name: 'parathree',
            type: 'text',
            title: 'Paragraph3'
        },
        {
            name: 'parafour',
            type: 'text',
            title: 'Paragraph4'
        },

        {
            title: 'Blog Image',
            name: 'blogimage',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
        },
        {
            title: 'Created At',
            name: 'createdAt',
            type: 'datetime',
        },
        {
            name: 'author',
            type: 'object',
            fields: [
                {
                    title: 'Author',
                    name: 'author',
                    type: 'reference',
                    to: [{ type: 'author' }]
                }
            ]
        }
    ]
}