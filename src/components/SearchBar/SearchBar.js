import { useState } from 'react';
import { BoxSubmit, Button, Input } from './SearchBar.styled';
import PropTypes  from 'prop-types';

const SearchBar = ({submitQuery}) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim()) return;
    submitQuery(value.trim());
  };

   return (
    <BoxSubmit>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          onChange={e =>setValue(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
    </BoxSubmit>
  );
};

export default SearchBar;
SearchBar.propTypes = { submitQuery: PropTypes.func.isRequired };