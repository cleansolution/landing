export default {
  name: 'feature',
  title: '⭐ Features',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Feature ID',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: '🎯 Icon',
      type: 'image',
      description: 'SVG or PNG icon for the feature',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Feature Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'icon'
    }
  }
}
