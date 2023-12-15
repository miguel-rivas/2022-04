const user = {
  "name": "Jesus",
  "middleName": "Miguel",
  "lastName": "Rivas",
  "title": "Frontend Developer",
  "website": "miguel-rivas.github.io",
  "email": "miguelrivas.kkqym@simplelogin.fr",
  "phone": "(202) 983-0839",
  "phoneLink": "2029830839",
  "location": {
    "city": "Spokane",
    "state": "WA"
  },
  "media": {
    "codepen": {
      "user": "koturno"
    },
    // "issuu": {
    //   "user": "jemiguelrivas"
    // },
    "linkedin": {
      "user": "jemiguelrivas"
    },
    "github": {
      "user": "jmiguelrivas",
      "development": "miguel-rivas-lab",
      "production": "miguel-rivas"
    }
  }
};

const linkGithub = `https://github.com/${user.media.github.user}`;
const linkLinkedin = `https://www.linkedin.com/in/${user.media.linkedin.user}`

export { user, linkGithub, linkLinkedin };