export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of the Dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'price',
      title: 'Price of the Dish in Rs',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
}
