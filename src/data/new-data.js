const { Members } = require("./consts");

export const data = [
  {
    id: "1",

    episodeName: "Best of the Worst Episode 1",
    url: "https://www.youtube.com/watch?v=q6TY-nBkxqY",
    members: [Members.JAY, Members.JESS, Members.JOSH, Members.MIKE],
    guests: [],
    subtitle: "Action Movies",
    releaseDate: 1358463600000,
    editors: "Mike Stoklasa",
    description: "The gang views and reviews three terrible films.",
    moviesData: [
      {
        title: "Russian Terminator",
        year: "1990",
        technology: "Technicolor",
        studio: "Arena Home Video",
      },
      {
        title: "Ninja Vengeance",
        year: "1988",
        technology: "Color",
        studio: "21st Century Corporation",
      },
      {
        title: "Never Too Young to Die",
        year: "1986",
        technology: "Metrocolor",
        studio: "Paul Entertainment",
      },
    ],
  },
  {
    id: "2",

    episodeName:
      "Best of the Worst: The New Gladiators, Exterminator 2, and Aftermath",
    url: "https://www.youtube.com/watch?v=cnDJa_HZVP0",
    members: [Members.JAY, Members.RICH, Members.JOSH, Members.JACK],
    guests: [],
    subtitle: "Future Dystopian Movies",
    releaseDate: 1359673200000,
    editors: "Mike Stoklasa",
    description:
      "The gang decides to check out some science-fiction dystopian movies.",
    moviesData: [
      {
        title: "The New Gladiators",
        year: "I guerrieri dell'anno 2072",
        technology: "1984",
        studio: "Color",
      },
      {
        title: "Exterminator 2",
        year: "1984",
        technology: "Color",
        studio: "The Cannon Group",
      },
      {
        title: "The Aftermath",
        year: "1982",
        technology: "Metrocolor",
        studio: "The Nautilus Film Company",
      },
    ],
  },
  {
    id: "3",

    episodeName:
      "Best of the Worst Episode 3: The Killer Eye, They Bite, and Xtro",
    url: "https://www.youtube.com/watch?v=vcBkm1nOI5k",
    members: [Members.JESS, Members.MIKE, Members.JOSH, Members.JACK],
    guests: [],
    subtitle: "Three Bewb-filled Creature Features",
    releaseDate: 1360710000000,
    editors: "Jay Bauman",
    description: "The gang watches some creature features.",
    moviesData: [
      {
        title: "The Killer Eye",
        year: "1999",
        technology: "Color",
        studio: "Full Moon Entertainment",
      },
      {
        title: "They Bite",
        year: "1996",
        technology: "Color",
        studio: "Trio Entertainment",
      },
      {
        title: "Xtro",
        year: "1983",
        technology: "Color",
        studio: "Amalgamated Film Enterprises",
      },
    ],
  },
  {
    id: "4",
    episodeName:
      "Best of the Worst: Deadly Prey, Hard Ticket to Hawaii, and Miami Connection",
    url: "https://www.youtube.com/watch?v=mbWTthXfdBc",
    members: [Members.RICH, Members.JAY, Members.JOSH, Members.JACK],
    guests: [],
    subtitle: "Warm Climes",
    releaseDate: 1364079600000,
    editors: "Jay Bauman",
    description:
      "To stave off seasonal affective disorder, the gang watches three movies set in warm climes.",
    moviesData: [
      {
        title: "Deadly Prey",
        year: "1987",
        technology: "Color",
        studio: "Action International Pictures",
      },
      {
        title: "Hard Ticket to Hawaii",
        year: "1987",
        technology: "Color",
        studio: "Malibu Bay Films",
      },
      {
        title: "Miami Connection",
        year: "1987",
        technology: "Color",
        studio: "P.J.K. Group",
      },
    ],
  },
  {
    id: "5",

    episodeName: "Best of the Worst: The Wheel of the Worst",
    url: "https://www.youtube.com/watch?v=JkWk_chVcJk",
    members: [Members.JESS, Members.MIKE, Members.RICH, Members.JAY],
    guests: [],
    subtitle: "The Wheel of the Worst 1",
    releaseDate: 1367272800000,
    editors: "Stoklasa/Bauman",
    description:
      "To deal with the glut of weird videos in their inventory, the gang uses the Wheel of the Worst to randomly select videos for review.",
    moviesData: [
      {
        title: "Candid Camera 6",
        year: "1982",
        technology: "Color",
        studio: "Amazing Film Productions",
      },
      {
        title: "Let's Rap About Fire Safety",
        year: "1986",
        technology: "Color",
        studio: "De Laurentiis Entertainment Group",
      },
      {
        title: "The Dance of Birth",
        year: "2012",
        technology: "Color",
        studio: "KillerWolf Films",
      },
    ],
  },
  {
    id: "6",
    episodeName:
      "Best of the Worst: The Vindicator, Cyber Tracker, Robot Jox, and R.O.T.O.R.",
    url: "https://www.youtube.com/watch?v=s76vZATqLrE",
    members: [Members.JACK, Members.RICH, Members.JOSH, Members.JAY],
    guests: [],
    subtitle: "Robot Movies",
    releaseDate: 1368662400000,
    editors: "Jay Bauman",
    description:
      "An attempt to watch some bad robot movies nearly ends in failure.",
    moviesData: [
      {
        title: "The Vindicator",
        year: "1986",
        technology: "Color",
        studio: "Frank & Stein Film Productions",
      },
      {
        title: "Cyber Tracker",
        year: "1994",
        technology: "Color",
        studio: "PM Entertainment Group",
      },
      {
        title: "Robot Jox",
        year: "1989",
        technology: "Color",
        studio: "Empire Pictures",
      },
      {
        title: "R.O.T.O.R.",
        year: "1988",
        technology: "Color",
        studio: "Manson International",
      },
    ],
  },
  {
    id: "7",
    episodeName:
      "Best of the Worst: Playing Dangerous, Shapeshifter, and Thunderpants",
    url: "https://www.youtube.com/watch?v=WGI-BKctOK8",
    members: [Members.MIKE, Members.JESS, Members.RICH, Members.JAY],
    guests: [],
    subtitle: "Stupid Kids Movies",
    releaseDate: 1369692000000,
    editors: "Jay Bauman",
    description:
      "The gang watches and reviews three alleged children's films. Rich picks a special movie for Jessi.",
    moviesData: [
      {
        title: "Playing Dangerous",
        year: "1995",
        technology: "Color",
        studio: "Mosaic Films",
      },
      {
        title: "Shapeshifter",
        year: "1999",
        technology: "Color",
        studio: "Canarom Productions",
      },
      {
        title: "Thunderpants",
        year: "2002",
        technology: "Color",
        studio: "CP Medien AG",
      },
    ],
  },
  {
    id: "8",
    episodeName: "Best of the Worst: Wheel of the Worst #2",
    url: "https://www.youtube.com/watch?v=7Kf00CUxMto",
    members: [Members.MIKE, Members.RICH, Members.JOSH, Members.JACK],
    guests: [],
    subtitle: "Wheel of the Worst 2",
    releaseDate: 1375912800000,
    editors: "Stoklasa/Bauman",
    description:
      "In the second Wheel of the Worst installment, the gang tackles the next set of terrible videos.",
    moviesData: [
      {
        title: "Key Matters",
        year: "1982",
        technology: "Color",
        studio: "Amazing Film Productions",
      },
      {
        title: "Gary Coleman in For Safety's Sake",
        year: "1986",
        technology: "Color",
        studio: "De Laurentiis Entertainment Group",
      },
      {
        title: "The Family Guide to the Internet",
        year: "2012",
        technology: "Color",
        studio: "KillerWolf Films",
      },
    ],
  },
  {
    id: "9",
    episodeName:
      "Best of the Worst: V-World Matrix, The Amazing Bulk, and ????",
    url: "https://www.youtube.com/watch?v=o4HOlhADlZo",
    members: [Members.MIKE, Members.JAY, Members.RICH],
    guests: ["Colin Cunningham"],
    subtitle: "Visual Effects Driven Turds",
    releaseDate: 1377640800000,
    editors: "Jay Bauman",
    description:
      "After meeting visual effects artist Colin, the gang watches two visual effects-driven films and a mystery movie.",
    moviesData: [
      {
        title: "V-World Matrix",
        year: "1999",
        technology: "Color",
        studio: "Sterling Entertainment",
      },
      {
        title: "The Amazing Bulk",
        year: "2010",
        technology: "Color",
        studio: "Laybl Productions",
      },
      {
        title: "Gymkata",
        year: "2002",
        technology: "Color",
        studio: "CP Medien AG",
      },
    ],
  },
  {
    id: "10",
    episodeName:
      "Best of the Worst: Bloody Birthday, Crazy Fat Ethel II, and Psycho From Texas",
    url: "https://www.youtube.com/watch?v=x94zXO02VPU",
    members: [Members.JAY, Members.MIKE, Members.JACK],
    guests: ["Gillian Bellinger"],
    subtitle: "Slasher Flicks",
    releaseDate: 1379455200000,
    editors: "Jay Bauman",
    description:
      "After Jay stops Feeding Frenzy star Gillian from committing larceny, the gang watches several slasher flicks.",
    moviesData: [
      {
        title: "Bloody Birthday",
        year: "1981",
        technology: "Color",
        studio: "Judica Productions",
      },
      {
        title: "Crazy Fat Ethel II",
        year: "1987",
        technology: "Color",
        studio: "I.R.M.I. Films Corporation",
      },
      {
        title: "Psycho From Texas",
        year: "1975",
        technology: "Color",
        studio: "Feazell / Limited Pictures",
      },
    ],
  },
  {
    id: "11",
    episodeName:
      "Best of the Worst: Night Beast, Trick or Treat, and Skull Forest",
    url: "https://www.youtube.com/watch?v=J7eSdXLmj9A",
    members: [Members.JACK, Members.MIKE, Members.RICH, Members.JAY],
    guests: [],
    subtitle: "Halloween Episode",
    releaseDate: 1383174000000,
    editors: "Mike Stoklasa",
    description:
      "It is Rich's birthday, but after watching three Halloween movies, the gang suspects he may be cursed.",
    moviesData: [
      {
        title: "Nightbeast",
        year: "1982",
        technology: "Color",
        studio: "Amazing Film Productions",
      },
      {
        title: "Trick or Treat",
        year: "1986",
        technology: "Color",
        studio: "De Laurentiis Entertainment Group",
      },
      {
        title: "Skull Forest",
        year: "2012",
        technology: "Color",
        studio: "KillerWolf Films",
      },
    ],
  },
  {
    id: "12",
    episodeName: "Best of the Worst: Wheel of the Worst #3",
    url: "https://www.youtube.com/watch?v=5fkjMstO-t0",
    members: [Members.JAY, Members.RICH, Members.MIKE, Members.JESS],
    guests: [],
    subtitle: "Wheel of the Worst 3",
    releaseDate: 1385074800000,
    editors: "Mike Stoklasa",
    description:
      "In the third installment of Wheel of the Worst, the gang tackles yet another set of terrible videos.",
    moviesData: [
      {
        title: "Tree Stand Safety",
        year: "1982",
        technology: "Color",
        studio: "Amazing Film Productions",
      },
      {
        title: "Where Did I Come From?",
        year: "1986",
        technology: "Color",
        studio: "De Laurentiis Entertainment Group",
      },
      {
        title: "Instant Adoring Boyfriend",
        year: "2012",
        technology: "Color",
        studio: "KillerWolf Films",
      },
    ],
  },
  {
    id: "13",
    episodeName:
      "Best of the Worst: Playing Dangerous 2, The Exterminator, and The Deadliest Prey",
    url: "youtube.com/watch?v=kdGfGjusufo",
    members: [Members.JACK, Members.JAY, Members.RICH, Members.JOSH],
    guests: [],
    subtitle: "Sequel Episode",
    releaseDate: 1385769600000,
    editors: "Jay Bauman",
    description:
      "To get a sense of the complete story, the gang watches the sequels to previously reviewed movies.",
    moviesData: [
      {
        title: "Playing Dangerous 2",
        year: "1996",
        technology: "Color",
        studio: "Blue Arbor Films",
      },
      {
        title: "The Exterminator",
        year: "1980",
        technology: "Color",
        studio: "Interstar",
      },
      {
        title: "The Deadliest Prey",
        year: "2013",
        technology: "Color",
        studio: "Night Claws Productions",
      },
    ],
  },
  {
    id: "14",
    episodeName:
      "Best of the Worst: Elves, Santa Claus, and Christmas Vacation 2",
    url: "https://www.youtube.com/watch?v=3plH6M1LadY",
    members: [Members.JESS, Members.RICH, Members.JACK, Members.MIKE],
    guests: [],
    subtitle: "Christmas Special",
    releaseDate: 1387753200000,
    editors: "Stoklasa/Bauman",
    description:
      "Rich Evans is pleased that it is Christmas, but no one seems to share his enthusiasm. As Rich watches three Christmas themed movies with the gang, his mood and optimism gradually sour.",
    moviesData: [
      {
        title: "Elves",
        year: "1989",
        technology: "Color",
        studio: "Action International Pictures",
      },
      {
        title: "Santa Claus",
        year: "1959",
        technology: "Eastmancolor",
        studio: "Cinematográfica Calderón S.A.",
      },
      {
        title: "Christmas Vacation 2",
        year: "2003",
        technology: "Color",
        studio: "Warner Bros. Television",
      },
    ],
  },
  {
    id: "15",

    episodeName:
      "Best of the Worst: Robo-C.H.I.C., Alien Seed, and Yor: The Hunter from the Future",
    url: "https://www.youtube.com/watch?v=Hb_VwaOT4QQ",
    members: [Members.JAY, Members.MIKE, Members.RICH, Members.JOSH],
    guests: [],
    subtitle: "Otherworldly Sci-fi Movies",
    releaseDate: 1390950000000,
    editors: "Mike Stoklasa and Jay Bauman",
    description:
      "An attempt to watch three 1980s science-fiction movies goes horribly wrong.",
    moviesData: [
      {
        title: "Robo-C.H.I.C.",
        year: "Cyber-C.H.I.C.",
        technology: "1990",
        studio: "Color",
      },
      {
        title: "Alien Seed",
        year: "1990",
        technology: "Color",
        studio: "Action International Pictures",
      },
      {
        title: "Yor: The Hunter from the Future",
        year: "Il mondo di Yor",
        technology: "1983",
        studio: "Eastmancolor",
      },
    ],
  },
  {
    id: "16",

    episodeName: "Best of the Worst: Wheel of the Worst #4",
    url: "https://www.youtube.com/watch?v=kakU6kQDmU4",
    members: [Members.JAY, Members.RICH, Members.JESS, Members.MIKE],
    guests: [],
    subtitle: "Wheel of the Worst 4",
    releaseDate: 1392336000000,
    editors: "Mike Stoklasa",
    description:
      "In the fourth installment of Wheel of the Worst, the gang drudges through another set of terrible videos.",
    moviesData: [
      {
        title: "Kitten Kommotion",
        year: "1982",
        technology: "Color",
        studio: "Amazing Film Productions",
      },
      {
        title:
          "Dunkin' Donuts 1994 Fall Donut Event Finishing Video with Bob Rosenberg",
        year: "1986",
        technology: "Color",
        studio: "De Laurentiis Entertainment Group",
      },
      {
        title: "Dunkin' Donuts: Uniformity",
        year: "2012",
        technology: "Color",
        studio: "KillerWolf Films",
      },
      {
        title: "The Shoji Tabuchi Show",
        year: "2012",
        technology: "Color",
        studio: "KillerWolf Films",
      },
    ],
  },
  {
    id: "17",
    episodeName:
      "Best of the Worst: Supergirl, Captain America (1990), and Roger Corman's Fantastic Four",
    url: "youtube.com/watch?v=d-O_RzwrZPw",
    members: [Members.JACK, Members.JAY, Members.RICH, Members.JOSH],
    guests: [],
    subtitle: "Superhero Movies",
    releaseDate: 1394319600000,
    editors: "Jay Bauman",
    description:
      "In anticipation of the new wave of comic books movies, the gang watches some old comic book movies.",
    moviesData: [
      {
        title: "Supergirl",
        year: "1984",
        technology: "Rankcolor",
        studio: "Artistry Limited",
      },
      {
        title: "Captain America",
        year: "1990",
        technology: "Eastmancolor",
        studio: "21st Century Film Corporation",
      },
      {
        title: "Fantastic Four",
        year: "1994",
        technology: "Color",
        studio: "New Horizons",
      },
    ],
  },
  {
    id: "18",
    episodeName: "Best of the Worst: Ninja Movies",
    url: "https://www.youtube.com/watch?v=ZERv4Q92vXA",
    members: [Members.JAY, Members.MIKE, Members.RICH],
    guests: ["Len Kabasinski"],
    subtitle: "Ninja Movies!",
    releaseDate: 1398981600000,
    editors: "Mike Stoklasa",
    description:
      "After having his films criticized by the gang, Len Kabasinski arrives at the Red Letter Media headquarters to exact revenge.",
    moviesData: [
      {
        title: "Ninja III: The Domination",
        year: "1984",
        technology: "Metrocolor",
        studio: "Shout! Factory",
      },
      {
        title: "Ninja Warriors",
        year: "1985",
        technology: "Color",
        studio: "Avid Home Video",
      },
      {
        title: "For Hire",
        year: "1991",
        technology: "Color",
        studio: "Vintage Home Entertainment",
      },
    ],
  },
  {
    id: "19",
    episodeName: "Best of the Worst: Wheel of the Worst #5",
    url: "https://www.youtube.com/watch?v=ceUSZBMeREY",
    members: [Members.MIKE, Members.JAY, Members.RICH, Members.JACK],
    guests: [],
    subtitle: "Wheel of the Worst 5",
    releaseDate: 1401746400000,
    editors: "Jay Bauman",
    description: "The Wheel of the Worst makes a triumphant return.",
    moviesData: [
      {
        title: "Cleared for Takeoff",
        year: "1994",
        technology: "Color",
        studio: "Fred Levine Productions",
      },
      {
        title: "Tales from Genesis Space",
        year: "2000",
        technology: "Color",
        studio: "Everwhen Productions",
      },
      {
        title: "SOS",
        year: "1989",
        technology: "Color",
        studio: "Aurora Productions",
      },
    ],
  },
  {
    id: "20",
    episodeName:
      "Best of the Worst: Ghetto Blaster, Terror in Beverly Hills, and Killing American Style",
    url: "https://www.youtube.com/watch?v=AND1YZSp6YI",
    members: [Members.RICH, Members.JAY],
    guests: ["Colin Cunningham", "Jim Maxwell"],
    subtitle: "American Action Movies",
    releaseDate: 1404338400000,
    editors: "Stoklasa/Bauman",
    description:
      "Canadian pals Colin and Jim meet up with the gang in Milwaukee to watch three American action movies.",
    moviesData: [
      {
        title: "Ghetto Blaster",
        year: "1989",
        technology: "Color",
        studio: "Prism Entertainment",
      },
      {
        title: "Terror in Beverly Hills",
        year: "1989",
        technology: "Color",
        studio: "Passion Productions",
      },
      {
        title: "Killing American Style",
        year: "1990",
        technology: "Color",
        studio: "Cinema Epoch",
      },
    ],
  },
  {
    id: "21",
    episodeName: "Best of the Worst: High Voltage, Death Spa, and Space Mutiny",
    url: "https://www.youtube.com/watch?v=6pgbB9ORqRg",
    members: [Members.JAY, Members.MIKE, Members.RICH, Members.JOSH],
    guests: [],
    subtitle: "Battle of the Genres",
    releaseDate: 1406757600000,
    editors: "Mike Stoklasa",
    description:
      "The gang watch three movies and see which is the most successful in meeting the requirements of its genre.",
    moviesData: [
      {
        title: "High Voltage",
        year: "1984",
        technology: "Metrocolor",
        studio: "Golan-Globus Productions",
      },
      {
        title: "Death Spa",
        year: "1985",
        technology: "Color",
        studio: "Silver Star",
      },
      {
        title: "Space Mutiny",
        year: "1991",
        technology: "Color",
        studio: "RBC Entertainment",
      },
    ],
  },
  {
    id: "22",
    episodeName: "Best of the Worst: Shakma, Python II, and Beaks: The Movie",
    url: "https://www.youtube.com/watch?v=QAzZceRTmpc",
    members: [Members.JACK, Members.JAY, Members.RICH, Members.MIKE],
    guests: [],
    subtitle: "When Animals Attack!!!",
    releaseDate: 1409090400000,
    editors: "Mike Stoklasa",
    description: "The gang watch three attacking animal movies.",
    moviesData: [
      {
        title: "Shakma",
        year: "1984",
        technology: "Metrocolor",
        studio: "Golan-Globus Productions",
      },
      {
        title: "Python II",
        year: "1985",
        technology: "Color",
        studio: "Silver Star",
      },
      {
        title: "Beaks: The Movie",
        year: "1991",
        technology: "Color",
        studio: "RBC Entertainment",
      },
    ],
  },
  {
    id: "23",
    episodeName: "Best of the Worst: Wheel of the Worst #6",
    url: "https://www.youtube.com/watch?v=aA2Z16QiNsE",
    members: [Members.MIKE, Members.JESS],
    guests: ["Colin Cunningham", "Jim Maxwell"],
    subtitle: "Wheel of the Worst 6",
    releaseDate: 1410991200000,
    editors: "Mike Stoklasa",
    description:
      "The gang's sufferings are shared with their Canadian friends in the sixth installment of Wheel of the Worst.",
    moviesData: [
      {
        title: "How Can I Tell If I'm Really in Love?",
        year: "1992",
        technology: "Color",
        studio: "Paramount Pictures",
      },
      {
        title: "The Osteoporosis Dance",
        year: "1997",
        technology: "Color",
        studio: "University of Connecticut Health Center",
      },
      {
        title: "American Flatulators",
        year: "1995",
        technology: "Color",
        studio: "Madacy Entertainment Group",
      },
    ],
  },
  {
    id: "24",
    episodeName:
      "Best of the Worst: Theodore Rex, Carnosaur, Tammy and the T-Rex",
    url: "https://www.youtube.com/watch?v=t4pJL1eAh00",
    members: [Members.JOSH, Members.RICH, Members.JACK, Members.JAY],
    guests: [],
    subtitle: "Dinosaur Movies!",
    releaseDate: 1412460000000,
    editors: "Stoklasa/Bauman",
    description: "The gang gets together to watch 1990s dinosaur movies.",
    moviesData: [
      {
        title: "Theodore Rex",
        year: "1984",
        technology: "Metrocolor",
        studio: "Golan-Globus Productions",
      },
      {
        title: "Carnosaur",
        year: "1985",
        technology: "Color",
        studio: "Silver Star",
      },
      {
        title: "Tammy and the T-Rex",
        year: "1991",
        technology: "Color",
        studio: "RBC Entertainment",
      },
    ],
  },
  {
    id: "25",
    episodeName: "Best of the Worst: The Item, The Crawlers, and Blood Lock",
    url: "https://www.youtube.com/watch?v=n747ktceuwI",
    members: [Members.JESS, Members.JOSH, Members.MIKE, Members.JAY],
    guests: [],
    subtitle: "Halloween Spooktacular!!!",
    releaseDate: 1414623600000,
    editors: "Stoklasa/Bauman",
    description:
      "When the power goes out at the Red Letter Media studio, the gang finishes their discussion at the haunted Brumder Mansion. Meanwhile, Rich Evans realizes he may never be free from the malevolent spirit of the Showbiz Pizza Bear.",
    moviesData: [
      {
        title: "The Item",
        year: "1999",
        technology: "Color",
        studio: "Artisan Entertainment",
      },
      {
        title: "The Crawlers",
        year: "1993",
        technology: "Color",
        studio: "Columbia TriStar Home Entertainment",
      },
      {
        title: "Blood Lock",
        year: "2008",
        technology: "Color",
        studio: "Echo Bridge Home Entertainment",
      },
    ],
  },
  {
    id: "26",

    episodeName: "Best of the Worst: Wheel of the Worst #7",
    url: "https://www.youtube.com/watch?v=wZFuyATj5EI",
    members: [Members.MIKE, Members.JAY, Members.RICH],
    guests: ["Freddie Williams"],
    subtitle: "Wheel of the Worst 7",
    releaseDate: 1418860800,
    editors: "Mike Stoklasa",
    description:
      "While stealing the Horse Ninja comic, graphic artist Freddie Williams II is discovered and roped into a Wheel of the Worst session.",
    moviesData: [
      {
        title: "Ice Dams: Causes, Combats, and Cures",
        year: "1996",
        technology: "Color",
        studio: "LIberty Mutal Group",
      },
      {
        title: "Kids and Airbags",
        year: "2000",
        technology: "Color",
        studio: "Everwhen Productions",
      },
      {
        title: "How to Become a Teenage Ninja",
        year: "1990",
        technology: "Color",
        studio: "Stony Point Productions",
      },
      {
        title: "Dog Sitter VHS",
        year: "2000",
        technology: "Color",
        studio: "Everwhen Productions",
      },
    ],
  },
  {
    id: "27",
    episodeName: "Best of the Worst: The Star Wars Holiday Special",
    url: "https://www.youtube.com/watch?v=_CtUd0yuYN4",
    members: [Members.MIKE, Members.JACK, Members.RICH, Members.JAY],
    guests: [],
    subtitle: "The Star Wars Holiday Special (1978, Color, CBS)",
    releaseDate: 1419462000000,
    editors: "Stoklasa/Bauman",
    description:
      "Appalled by the Star Wars Holiday Special, the gang decides to bootleg the feature so everyone can watch it.",
    moviesData: [
      {
        title: "The Star Wars Holiday Special",
        year: "1978",
        technology: "Color",
        studio: "CBS",
      },
    ],
  },
  {
    id: "28",
    episodeName:
      "Best of the Worst: Alienator, Alien from the Deep, and Hands of Steel",
    url: "https://www.youtube.com/watch?v=z5PnYARAyUw",
    members: [Members.RICH, Members.MIKE, Members.JACK, Members.JAY],
    guests: [],
    subtitle: "Weird Things on the Left Arm Sci-Fi-Extravaganza!!!",
    releaseDate: 1392678000000,
    editors: "Mike Stoklasa",
    description:
      "The gang checks out three sci-fi action movies, which coincidentally all involve weird things on characters' left arms.",
    moviesData: [
      {
        title: "Alienator",
        year: "1990",
        technology: "Color",
        studio: "Prism Entertainment Corporation",
      },
      {
        title: "Alien from the Deep",
        year: "1989",
        technology: "Color",
        studio: "One 7 Movies",
      },
      {
        title: "Hands of Steel",
        year: "Vendetta dal futuro",
        technology: "1986",
        studio: "Color",
      },
    ],
  },
];
