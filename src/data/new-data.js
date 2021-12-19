// @ts-ignore
var json = require("./data-1639914279550.json");

const { Members } = require("./consts");
// Since I always keep it open - a few snippets to keep in mind:
// imr - import react
// usf useState
// uef - useEffect

const EMPTY_MOVIE_OBJECT = {
  title: "",
  year: "",
  technology: "",
  studio: "",
};

export const getNewEmptyMovieObject = () => {
  return JSON.parse(JSON.stringify(EMPTY_MOVIE_OBJECT));
};

const EMPTY_VIDEO_OBJECT = {
  id: "",
  episodeName: "",
  url: "",
  members: [],
  guests: [],
  subtitle: "",
  releaseDate: 0,
  editors: [],
  description: "",
  moviesData: [],
};

export const getNewEmptyVideoObject = () => {
  return JSON.parse(JSON.stringify(EMPTY_VIDEO_OBJECT));
};

export const data = json;
