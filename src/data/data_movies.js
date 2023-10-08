export const TrailerComponent = ({ data }) => (
  <a href={data.url} target="_blank" rel="noopener noreferrer">
    trailer...
  </a>
)
 
export const moviesConfig = [
  {
    title: "title",
    field: "Title",
  },
  {
    title: "Year",
    field: "Year",
  },
  {
    title: "Rated",
    field: "Rated",
  },
  {
    title: "Released",
    field: "Released",
  },
  {
    title: "Runtime",
    field: "Runtime",
  },
  {
    title: "Genre",
    field: "Genre",
  },
  {
    title: "Director",
    field: "Director",
  },
  {
    title: "Writer",
    field: "Writer",
  },
  {
    title: "Actors",
    field: "Actors",
  },
  {
    title: "Plot",
    field: "Plot",
  },
  {
    title: "Poster",
    field: "Poster",
   },
  {
    title: "imdbRating",
    field: "imdbRating",
  },
  {
    title: "imdbVotes",
    field: "imdbVotes",
  },
  {
    title: "imdbID",
    field: "imdbID",
  },
  {
    title: "Type",
    field: "Type",
  },
  {
    title: "Response",
    field: "Response",
  },
  {
    title: "trailer",
    field: "Trailer",
    component: TrailerComponent,
  },
]
