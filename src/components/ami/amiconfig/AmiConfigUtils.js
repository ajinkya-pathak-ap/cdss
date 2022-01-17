export const utils = {
  properties: {
    operators: [">", "<", ">=", "<=", "=", "Between"],

    label: {
      inputProps: {
        "aria-label": "Checkbox demo",
        fontWeight: "bold",
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
      generateDefault: {
        default: true,
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
      displayDefault: {
        default: true,
      },
    },

    otherRule: {
      otherValues: {
        categoryDefinition: "other",
        operator: "",
        values: [],
      },
      displayDefault: {
        default: true,
      },
    },
  },
  methods: {},
};
