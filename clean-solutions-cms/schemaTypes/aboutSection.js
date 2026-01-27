export default {
  name: 'aboutSection',
  title: '🏢 About Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'e.g., "About Us"',
      validation: Rule => Rule.required()
    },
    {
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    },
    {
      name: 'image1',
      title: '📷 First Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'image2',
      title: '📷 Second Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'feature'}]}]
    }
  ],
  preview: {
    select: {
      title: 'mainTitle',
      subtitle: 'sectionTitle'
    }
  }
}
