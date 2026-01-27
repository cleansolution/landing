export default {
  name: 'service',
  title: '🛠️ Services',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Service ID',
      type: 'number',
      description: 'Unique identifier for the service',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'img',
      title: '📷 Service Image',
      type: 'image',
      description: 'Main service image (recommended: 800x600px)',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'svg',
      title: '🎨 SVG Icon',
      type: 'image',
      description: 'SVG icon for the service',
      options: {
        accept: 'image/svg+xml'
      }
    },
    {
      name: 'link',
      title: 'Page Link',
      type: 'string',
      description: 'URL path for the service page (e.g., /carpet-cleaning)'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'desc',
      media: 'img'
    }
  }
}
