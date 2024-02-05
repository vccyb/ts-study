export interface DataEntity {
  id: string;
}
export interface Movie extends DataEntity {
  director: string;
}
export interface Song extends DataEntity {
  singer: string;
}

export type DataEntityMap = {
  movie: Movie;
  song: Song;
};

export class DataStore {
  data: DataEntityMap;
}

const ds = new DataStore();
ds.addSong({ id: "song-123", singer: "The Flaming Lips" });
ds.addMovie({
  id: "movie-456",
  director: "Stephen Spielberg",
});
ds.getSong("song-123"); // returns the song
ds.getMovie("movie-456"); // returns the movie
ds.getAllSongs(); // array of all songs
ds.getAllMovies(); // array of all movies
ds.clearSongs(); // clears all songs
ds.clearMovies(); // clears all movies
