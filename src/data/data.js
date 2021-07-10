const { Titles, Members } = require("./consts");

export const data = [
  {
    episodeName: "Best of the Worst Episode 1",
    url: "https://www.youtube.com/watch?v=q6TY-nBkxqY",
    members: [Members.JAY, Members.JESS, Members.JOSH, Members.MIKE],
    titles: [
      Titles.RUSSIAN_TERMINATOR,
      Titles.NINJA_VENGENCE,
      Titles.NEVER_TOO_YOUNG_TO_DIE,
    ],
    airdate: "2013-01-18",
  },
  {
    episodeName:
      "Best of the Worst: The New Gladiators, Exterminator 2, and Aftermath",
    url: "https://www.youtube.com/watch?v=cnDJa_HZVP0",
    members: [Members.JAY, Members.RICH, Members.JOSH, Members.JACK],
    titles: [
      Titles.THE_NEW_GLADIATORS,
      Titles.EXTERMINATOR_2,
      Titles.THE_AFTERMATH,
    ],
    airdate: "2013-02-01",
  },
];
