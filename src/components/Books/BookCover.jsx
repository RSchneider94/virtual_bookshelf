import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import StyledCard from '../UI/StyledCard';
import StyledCardContent from '../UI/StyledCardContent';

export default function BookCover({ id, title }) {
  return (
    <Link to={`/books/${id}`}>
      <StyledCard>
        <StyledCardContent>
          <Typography variant="h4" component="h3">
            {title}
          </Typography>
        </StyledCardContent>
      </StyledCard>
    </Link>
  );
}
