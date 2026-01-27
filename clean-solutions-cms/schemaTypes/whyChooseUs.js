export default {
  name: 'whyChooseUs',
  title: '🎯 Why Choose Us',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'e.g., "Why Choose Us"',
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
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'benefits',
      title: 'Benefits List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'id',
              title: 'ID',
              type: 'number'
            },
            {
              name: 'text',
              title: 'Benefit Text',
              type: 'string',
              validation: Rule => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'text'
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1)
    }
  ],
  preview: {
    select: {
      title: 'mainTitle',
      subtitle: 'sectionTitle'
    }
  }
}
