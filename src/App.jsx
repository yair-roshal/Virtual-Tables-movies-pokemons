import React from "react"
import SettingsGrid from "./SettingsGrid"
import movies from "./data/data_a"
import pokemon from "./data/data_b"
import {moviesConfig} from "./data/data_movies"
import {pokemonConfig} from "./data/data_pokemons"
import {Box, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

const TypographyHeader = styled(Typography)` 
  margin: 18px ; 
`;

const App = () => (
  <Box>
    <TypographyHeader variant="h3" align="center" >Movies</TypographyHeader>
    <SettingsGrid config={moviesConfig} data={movies} nameTable="Movies" />

    <TypographyHeader variant="h3" align="center" >Pokemons</TypographyHeader>
    <SettingsGrid config={pokemonConfig} data={pokemon} nameTable="Pokemons" />

  </Box>
)

export default App
