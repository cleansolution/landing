export default {
  name: 'teamMember',
  title: '👥 Team Members',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Member ID',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'position',
      title: 'Position/Role',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: '📷 Profile Photo',
      type: 'image',
      description: 'Team member photo (recommended: 400x400px square)',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 5,
      description: 'Short bio about the team member'
    },
    {
      name: 'experience',
      title: 'Years of Experience',
      type: 'string'
    },
    {
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url'
        },
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image'
    }
  }
}
