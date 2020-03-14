import React from 'react';
import { Typography } from '@material-ui/core';
import StyledCard from '../UI/StyledCard';
import StyledCardContent from '../UI/StyledCardContent';

export default function BookCover({ title }) {
  return (
    <StyledCard>
      <StyledCardContent>
        <Typography variant="h4" component="h3">
          {title}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
}
