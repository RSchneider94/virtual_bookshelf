import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import BookCover from './BookCover';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  noBooksText: {
    textAlign: 'center'
  }
});

export default function Category({ categoryKey, categoryName }) {
  const classes = useStyles();

  const booksInCategory = useSelector(state => {
    if (categoryKey === 'noCategory') {
      return state.books.filter(
        book => book.category === null || book.category === categoryKey
      );
    }
    return state.books.filter(book => book.category === categoryKey);
  });

  const bookElements = booksInCategory.map(book => (
    <BookCover key={book.id} title={book.title}></BookCover>
  ));

  return (
    <Box>
      <Typography variant="h4" component="h2" className={classes.title}>
        {categoryName}
      </Typography>
      {bookElements.length ? (
        <Slider
          infinite={false}
          slidesToShow={4}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]}
        >
          {bookElements}
        </Slider>
      ) : (
        <Typography variant="body1" className={classes.noBooksText}>
          No books for this category. What about creating one?{' '}
          <span role="img" aria-label="emoji">
            😊
          </span>
        </Typography>
      )}
    </Box>
  );
}
