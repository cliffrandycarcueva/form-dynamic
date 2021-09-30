// import axios from "axios";

// //suppose to be api call but having cors issue
// export const getData = (): Promise<any> =>
//   axios({
//     method: "get",
//     url: `https://7ys8lfh4mc.execute-api.eu-west-1.amazonaws.com/beta/coding-challenge/configuration`,
//     headers: {
//       Accept: "application/json, application/xml, text/play, text/html, *.*",
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//   });

export const getData = () => {
  return {
    data: [
      {
        type: "field",
        input: "email",
        label: {
          en: "Email",
          fr: "E-mail",
        },
        order: 3,
      },
      {
        type: "header",
        order: 0,
        text: {
          en: "Enter your details below to win a prize!",
        },
      },
      {
        type: "paragraph",
        order: 1,
        text: {
          en: "You can win £5, £10, £20 or a trip to Disneyland",
        },
      },
      {
        type: "field",
        input: "checkbox",
        order: 5,
        property: "terms_and_conditions",
        label: {
          en: "Terms and conditions",
          fr: "Termes et conditions",
        },
      },
      {
        type: "field",
        input: "text",
        order: 2,
        property: "name",
        label: {
          en: "Name",
          fr: "Nom",
        },
      },
      {
        type: "field",
        input: "datepicker",
        order: 4,
        property: "dob",
        label: {
          en: "Date of birth",
          fr: "Date de naissance",
        },
      },
    ],
  };
};
