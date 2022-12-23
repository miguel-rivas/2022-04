export default [
  {
    id: "socrates",
    name: ["Sócrates", "Francisco"],
    familyName: ["Hernández", "Polanco"],
    spouse: [
      {
        id: "ma-elena",
        children: [
          {
            id: "cinthya",
            name: ["Cinthya", "Leticia"],
            spouse: [
              {
                id: "sergio-cinthya",
              }
            ]
          },
          {
            id: "juan-fran",
            name: ["Juan", "Francisco"],
            spouse: [
              {
                id: "dayanna-juan",
                children: [
                  {
                    name: ["Juan", "David"],
                  },
                ]
              },
              {
                id: "suleydi",
                children: [
                  {
                    name: ["Francisco", "Zavier"],
                  },
                  {
                    name: ["Juan", "Ramon"],
                  },
                ]
              }
            ]
          }
        ],
      }
    ]
  },
]