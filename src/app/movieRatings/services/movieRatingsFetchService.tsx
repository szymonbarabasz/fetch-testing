import { MovieInfo } from "../data/movieRatingsDataModel";

export default function movieRatingsFetchService(
  title: string,
  abortControl: AbortController
): Promise<MovieInfo> {
  return fetch(`https://www.omdbapi.com/?t=${title}&apikey=63e8f48b`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    signal: abortControl.signal,
  }).then((res) => res.json());
}
