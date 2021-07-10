const { Members } = require("./consts");

export const data = [
  {
    id: 1,
    episodeName: "Best of the Worst Episode 1",
    url: "https://www.youtube.com/watch?v=q6TY-nBkxqY",
    members: [Members.JAY, Members.JESS, Members.JOSH, Members.MIKE],
    titles: ["Russian Terminator", "Ninja Vengence", "Never Too Young To Die"],
    airdate: "2013-01-18",
    editors: [Members.MIKE],
    subtitle: "Action Movies",
    description: "The gang views and reviews three terrible films.",
    season: 1,
  },
  {
    id: 2,
    episodeName:
      "Best of the Worst: The New Gladiators, Exterminator 2, and Aftermath",
    url: "https://www.youtube.com/watch?v=cnDJa_HZVP0",
    members: [Members.JAY, Members.RICH, Members.JOSH, Members.JACK],
    titles: ["The New Gladiators", "Exterminator 2", "The Aftermath"],
    airdate: "2013-02-01",
    editors: [Members.MIKE],
    subtitle: "Future Dystopian Movies",
    description:
      "The gang decides to check out some science-fiction dystopian movies.",
    season: 1,
  },
  {
    id: 3,
    episodeName:
      "Best of the Worst Episode 3: The Killer Eye, They Bite, and Xtro",
    url: "https://www.youtube.com/watch?v=vcBkm1nOI5k",
    members: [Members.JESS, Members.MIKE, Members.JOSH, Members.JACK],
    titles: ["The New Gladiators", "Exterminator 2", "The Aftermath"],
    airdate: "2013-02-01",
    editors: [Members.MIKE],
    subtitle: "Three Bewb-filled Creature Features",
    description:
      "The gang decides to check out some science-fiction dystopian movies.",
    season: 1,
  },
];
