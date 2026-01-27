export default {
  name: 'blogPost',
  title: '📝 Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Post ID',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Post Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short preview text for the blog listing'
    },
    {
      name: 'featuredImage',
      title: '📷 Featured Image',
      type: 'image',
      description: 'Main blog post image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'}
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: {hotspot: true}
        }
      ]
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Cleaning Tips', value: 'tips'},
          {title: 'Company News', value: 'news'},
          {title: 'Industry Updates', value: 'industry'},
          {title: 'How-To Guides', value: 'guides'}
        ]
      }
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the title',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      subtitle: 'category'
    }
  }
}
