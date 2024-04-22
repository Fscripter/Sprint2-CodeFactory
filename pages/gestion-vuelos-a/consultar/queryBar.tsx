'use client'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import SendIcon from '@mui/icons-material/Send'
import {
  TextField,
  InputAdornment,
  Button,
  Stack,
  FormControl,
  OutlinedInput,
  FormHelperText,
} from '@mui/material'

const SearchBar: React.FC = (props: any) => {
  const [searchTerm, setSearchTerm] = useState('')
  console.log(props)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    props.updateQuery(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <Stack
        spacing={12}
        justifyContent="center"
        direction="row"
        flexWrap="wrap"
        sx={{ width: '50%' }}
      >
        <TextField
          label="Busqueda por codigo de vuelo"
          id="outlined-start-adornment"
          sx={{ width: '70%', color: 'black !important' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {<SearchIcon></SearchIcon>}
              </InputAdornment>
            ),
          }}
          color="primary"
          value={searchTerm}
          onChange={handleSearchChange}
          id="search"
        />
        <Button variant="contained" sx={{ width: '15%' }} color="warning">
          Filtrar
        </Button>
      </Stack>
    </>
  )
}

export default SearchBar
