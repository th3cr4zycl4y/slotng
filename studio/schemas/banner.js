export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "heroBanner",
      title: "Hero banner",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "sideBanner",
      title: "Side Banner",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "middleBanner",
      title: "Middle Banner",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "bottomBanner",
      title: "Bottom Banner",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "smallBanner",
      title: "Small Banner",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
