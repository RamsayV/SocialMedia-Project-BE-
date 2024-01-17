import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    friends: [],
    location: "San Fran, CA",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Sam",
    lastName: "Altman",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "sam_altman.jpeg",
    friends: [],
    location: "San Fran, CA",
    occupation: "Open AI CEO",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Some",
    lastName: "Guy",
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p4.jpeg",
    friends: [],
    location: "Canada, CA",
    occupation: "Data Scientist Hacker",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "John",
    lastName: "Carmack",
    email: "whatchadoing@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p6.jpeg",
    friends: [],
    location: "Shawnee Mission, Kansas",
    occupation: "Software Engineer",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpeg",
    friends: [],
    location: "The Worldwide Web",
    occupation: "PlaceHolder",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Abraham",
    lastName: "Lincoln",
    email: "harveydunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "Abe.jpeg",
    friends: [],
    location: "Washington, D.C",
    occupation: "President",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Ada",
    lastName: "LoveLace",
    email: "carlyvowel@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "Ada.jpeg",
    friends: [],
    location: "Marylebone, London",
    occupation: "Genius and LadyBoss",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Golem /",
    lastName: "Sméagol",
    email: "jessicadunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "Golem.jpeg",
    friends: [],
    location: "Mordoor",
    occupation: "Jewlery Enthusiast",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Sam",
    lastName: "Altman",
    location: "San Fran, CA",
    description: "Creating AI requires a lot of brain food",
    picturePath: "post1.jpeg",
    userPicturePath: "sam_altman.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "This Chat-GPt thing will never takeoff",
      "AI is going to ruin mankind",
      "Is it true you've been fired?",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "John",
    lastName: "Carmack",
    location: "Shawnee Mission, Kansas",
    description:
      "I've been working on this game called Quake, any thoughts?",
    picturePath: "quake.jpeg",
    userPicturePath: "John_Carmack.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "Is it like Flappy Bird?",
      "I'll stick to MineCraft thanks",
      "This might be a cult classic someday",
      "All hail Gabe",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Jane",
    lastName: "Doe",
    location: " The Worldwide Web",
    description:
      "I keep getting calls from the bank. Apparently people keep using my identity!",
    picturePath: "fraud.jpeg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "Jane Doe isn't real, just a myth!",
      "Isn't Jane Doe a fictional character?",
      "Jane Doe's not real, purely symbolic.",
      "Everyone knows Jane Doe doesn't exist.",
      "Jane Doe, the classic nonexistent entity!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Abraham",
    lastName: "Lincoln",
    location: "Washington, D.C",
    description:
      "'Quote of the Day: Don't believe everything you see on the internet.' Abe Lincoln. Check out my new house as well!",
    picturePath: "whitehouse.jpeg",
    userPicturePath: "Abe.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "Abe Lincoln on the internet? Timeless!",
      "Imagine Abe Lincoln tweeting his thoughts.",
      "Lincoln's internet presence would be epic!",
      "Abe online? Would've been a great blogger.",
      "Lincoln surfing the web? Historically amusing!"
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Ada",
    lastName: "Lovelace",
    location: "Chicago, IL",
    description:
    "Just a brief note from me, Ada Lovelace - the original programming hipster. Before it became mainstream, I was crafting algorithms, kickstarting this whole field. I set the stage for all modern computing noobs.",
    picturePath: "Ada.jpeg",
    userPicturePath: "meme.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "Ada Lovelace on Chatter Pulse? Genius move!",
      "Following Ada's Chatter Pulse for daily inspiration.",
      "Ada's algorithms are groundbreaking, even on Chatter Pulse!",
      "Her Chatter Pulse posts are tech gold!",
      "Ada Lovelace, the Chatter Pulse tech queen!"
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Golem /",
    lastName: "Sméagol",
    location: "Mordoor",
    description:
    "Just a quick post from Middle-earth. It's me, Gollum, finally seeking help for my overwhelming addiction to the precious ring. After centuries of obsession, I've realized it's time to let go and find a healthier path. Even creatures from Lord of the Rings need a little help sometimes. Off to my support group, less 'my precious', more 'my wellness'.",
    picturePath: "Support.jpeg",
    userPicturePath: "Golem.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      "So proud of Gollum for seeking help!",
      "Incredible step forward, congratulations on your journey!",
      "Gollum taking positive steps? Truly inspiring!",
      "Supporting your path to wellness, Gollum!",
      "Great to see Gollum embracing change!"
    ],
  },
];