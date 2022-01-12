export const mlInputUtils = {
  genderList: [
    {
      genderId: 1,
      value: "O",
      description: "Others",
    },
    {
      genderId: 1,
      value: "F",
      description: "Female",
    },
    {
      genderId: 3,
      value: "M ",
      description: "Male",
    },
  ],

  hstnlHeadings: ["First Draw", "Second Draw", "Third Draw"],

  getStyles: (name, personName, theme) => {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  },

  menuProps: () => {
    const ITEM_HEIGHT = 48,
      ITEM_PADDING_TOP = 8;
    return {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };
  },
};
