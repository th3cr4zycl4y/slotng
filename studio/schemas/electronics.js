export default {
  name: "electronics",
  title: "Electronics",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Device Name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "image",
      title: "Device Image",
      type: "image",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "inStock",
      title: "In Stock",
      type: "boolean",
    },
    {
      name: "sku",
      title: "SKU",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
