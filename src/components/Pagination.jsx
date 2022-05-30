import React, { useState } from "react";
import { Button, ButtonGroup, Select } from '@chakra-ui/react';

const Pagination = () => {
  const[page, setPage] = useState(1);

  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={() => setPage(1)}>first</Button>
      <Button data-cy="pagination-previous-button"onClick={() => setPage(page - 1)}>previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={() => setPage(page + 1)}>next</Button>
      <Button data-cy="pagination-last-button" onClick={() => setPage(Math.max(page))}>last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
