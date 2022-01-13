export const utils = {
  properties: {
    operators: [">", "<", ">=", "<=", "=", "Between"],
    label: {
      inputProps: {
        "aria-label": "Checkbox demo",
      },
    },

    generateRule: {
      ageRule: {
        ageOne: "",
        ageTwo: "",
      },
      troponinRule: {
        hstnlOne: "",
        hstnlTwo: "",
      },
      ageValues: {
        categoryDefinition: "Age",
        operator: "",
        values: [],
      },
      hstnlValues: {
        categoryDefinition: "hstnl",
        operator: "",
        values: [],
      },
    },

    displayRule: {
      displayValues: {
        displayOne: "0%",
        displayTwo: "1%",
      },
      defaultDisplay: {
        categoryDefinition: "hstnl",
        operator: "Between",
        values: [],
      },
    },

    otherRule: {
      otherValues: {
        categoryDefinition: "other",
        operator: "",
        values: [],
      },
    },
  },
  methods: {},
};
