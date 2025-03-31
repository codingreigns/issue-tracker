import { TextField } from '@radix-ui/themes'
import React from 'react'
import { IoSearch } from 'react-icons/io5'

const SearchBar = () => {
  return (
    <TextField.Root placeholder="Search the docs…">
	<TextField.Slot>
		<IoSearch height="16" width="16" />
	</TextField.Slot>
</TextField.Root>
  )
}

export default SearchBar