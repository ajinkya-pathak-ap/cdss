export const utils = {
  // mapJsonResponse: (_obj) => {
  //   _obj.result.configurations.forEach((items, index) => {
  //     if (items.ruleSectionName.toLocaleLowerCase() === "generate") {
  //       if (items.rules.length > 0) {
  //         /**create rules dom here */
  //         items.rules.forEach((item_0) => {
  //           /**declare default & checked */
  //           setGenrateDefault(item_0.isDefault);
  //           setGenerateRS(item_0.isChecked);
  //           if (item_0.categories.length > 0) {
  //             item_0.categories.forEach((item_1) => {
  //               /**create values categories */
  //               if (item_1.categoryDefinition.toLocaleLowerCase() === "age") {
  //                 setOperatorOne(item_1.operator);
  //                 setAgeArr(item_1);
  //               } else {
  //                 setOperatorTwo(item_1.operator);
  //                 setHstnlArr(item_1);
  //               }
  //             });
  //           }
  //         });
  //       } else {
  //         setGenrateDefault(true);
  //         setGenerateRS(true);
  //       }
  //     } else if (items.ruleSectionName.toLocaleLowerCase() === "display") {
  //       if (items.rules.length > 0) {
  //         /**create rules dom here */
  //         items.rules.forEach((item_0) => {
  //           /**declare default & checked */
  //           setDisplayDefault(item_0.isDefault);
  //           setDisplayRS(item_0.isChecked);
  //           if (item_0.categories.length > 0) {
  //             item_0.categories.forEach((item_1, ind) => {
  //               /**create values categories */
  //               // setOperatorTwo(item_1.operator);
  //               setDisplayArr(item_1);
  //             });
  //           }
  //         });
  //       }
  //     } else if (items.ruleSectionName.toLocaleLowerCase() === "other") {
  //       if (items.rules.length > 0) {
  //         /**create rules dom here */
  //         items.rules.forEach((item_0) => {
  //           /**declare default & checked */
  //           setOtherDefault(item_0.isDefault);
  //           setOtherRS(item_0.isChecked);
  //           if (item_0.categories.length > 0) {
  //             item_0.categories.forEach((item_1) => {
  //               /**create values categories */
  //               setOtherArr(item_1);
  //             });
  //           }
  //         });
  //       }
  //     }
  //   });
  // },
};
