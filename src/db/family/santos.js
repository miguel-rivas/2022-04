export default [
  {
    id: "juanito-america",
    name: ["Juan", "Ramon"],
    familyName: ["Santos", "Jimenez"],
    spouse: {
      id: "america",
      children: [
        {
          id: "carmensita",
          name: ["Maria", "Del Carmen"],
          spouse: [
            {
              id: "nano",
            }
          ],
        },
        {
          id: "teresa",
          name: ["Maria", "Teresa"],
          spouse: [
            {
              id: "mario-teresa"
            }
          ]
        },
        {
          id: "ricardo",
          name: ["Jose", "Ricardo"],
          spouse: [
            {
              id: "isis",
              children: [
                {
                  name: ["Juan", "Anibal"],
                },
                {
                  name: ["Abel", "Ricardo"],
                },
              ],
            }
          ],
        },
        {
          id: "ney",
          name: ["Faustino"],
          spouse: [
            {
              id: "rosa-ney",
              children: [
                {
                  id: "bertilia",
                  name: ["Ana", "Bertilia"],
                  spouse: [
                    {
                      id: "ricardo-bertilia",
                    },
                    {
                      id: "luis-bertilia",
                    },
                  ],
                },
              ],
            },
            {
              id: "doris",
              children: [
                {
                  name: ["Fausto", "Danel"],
                },
                {
                  name: ["Sandy", "Noel"]
                },
                {
                  name: ["Jose", "Luis"],
                },
              ],
            },
            {
              id: "maritza-ney",
              children: [
                {
                  name: ["Rosemary"],
                },
              ],
            },
            {
              id: "mama-anabel",
              children: [
                {
                  name: ["Anabel"],
                },
              ],
            },
          ],
        },
        {
          id: "ma-elena",
          name: ["Maria", "Elena"],
          spouse: [
            {
              id: "socrates",

            },
            {
              id: "olegario",

            },
          ],
        },
        {
          id: "charo",
          name: ["Maria", "Del Rosario"],
          spouse: [
            {
              id: "victor-charo",
            },
            {
              id: "felix-charo",
            },
          ],
        },
      ]
    }
  },
  // ---------------------------
  {
    id: "isis",
    name: ["Isis"],
    familyName: ["Santos"],
    spouse: [
      {
        id: "ricardo"
      }
    ]
  },
]