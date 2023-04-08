export interface MovieInfo {
  Title: string;
  Actors: string;
  Director: string;
  Genre: string;
  Year: string;
  imdbRating: string;
  Metascore: string;
  Ratings: { Source: string; Value: string }[];
  Released: string;
}

export const MoviesDefaultValue = {
  Title: "",
  Actors: "",
  Director: "",
  Genre: "",
  Year: "",
  imdbRating: "",
  Metascore: "",
  Ratings: [{ Source: "", Value: "" }],
  Released: "",
};

export const DefaultMovieInfoArr = (items: MovieInfo) => [
  { label: "Tytuł", path: items.Title },
  { label: "Aktorzy", path: items.Actors },
  { label: "Reżyser", path: items.Director },
  { label: "Gatunek", path: items.Genre },
  { label: "Rok produkcji", path: items.Year },
  { label: "Ocena imdb", path: items.imdbRating },
  { label: "Ocena metascore", path: items.Metascore },
  { label: "Ratings", path: items.Ratings },
  { label: "Data wydania", path: items.Released },
];
