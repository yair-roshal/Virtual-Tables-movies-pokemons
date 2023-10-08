export const PokemonNameComponent = ({ data }) => (
  <span style={{ textTransform: "capitalize" }}>{data}</span>
)

export const pokemonConfig = [
  {
    title: "pokedex #",
    field: "Number",
  },
  {
    title: 'name',
    field: 'Name',
    component: PokemonNameComponent
  },
  {
    title: 'link',
    field: 'Link',
   },
]

