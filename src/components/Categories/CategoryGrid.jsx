import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import BookCover from '../Books/BookCover';

const useStyles = makeStyles({
  title: {
    marginTop: 60,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.5)'
  },
  noBooksText: {
    textAlign: 'center',
    color: '#fff'
  }
});

export default function CategoryGrid({ categoryKey, categoryName }) {
  const classes = useStyles();

  const booksInCategory = useSelector(state => {
    if (categoryKey === 'noCategory') {
      return state.books.filter(
        book =>
          !book.deleted &&
          (book.category === null || book.category === categoryName)
      );
    }
    return state.books.filter(
      book => !book.deleted && book.category === categoryName
    );
  });

  const bookElements = booksInCategory.map(book => (
    <BookCover key={book.id} id={book.id} title={book.title}></BookCover>
  ));

  return (
    <Box>
      <Link to={`/categories/${categoryKey}`}>
        <Typography variant="h4" component="h2" className={classes.title}>
          {categoryName}
        </Typography>
      </Link>
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
