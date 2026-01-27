export default {
  name: 'testimonial',
  title: '💬 Testimonials',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Testimonial ID',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'clientTitle',
      title: 'Client Title/Company',
      type: 'string',
      description: 'e.g., "Homeowner", "Business Owner", etc.'
    },
    {
      name: 'avatar',
      title: '📷 Client Photo',
      type: 'image',
      description: 'Client profile photo (recommended: 200x200px)',
      options: {
        hotspot: true
      }
    },
    {
      name: 'rating',
      title: '⭐ Rating',
      type: 'number',
      description: 'Rating from 1 to 5',
      validation: Rule => Rule.required().min(1).max(5)
    },
    {
      name: 'testimonial',
      title: 'Testimonial Text',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    },
    {
      name: 'serviceUsed',
      title: 'Service Used',
      type: 'string',
      description: 'Which service did they use?'
    },
    {
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Show this testimonial on the homepage',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'testimonial',
      media: 'avatar'
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: title,
        subtitle: subtitle ? subtitle.substring(0, 60) + '...' : ''
      }
    }
  }
}
