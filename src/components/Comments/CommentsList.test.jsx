import React from 'react';
import CommentsList from './CommentsList';
import { render } from '../../testUtils';

it("renders no comments text for book view when there's no comments", () => {
  const { getByText } = render(<CommentsList bookComments={[]}></CommentsList>);
  expect(
    getByText('No comments for this book yet. Wanna share your thoughts?')
  ).toBeInTheDocument();
});

it("renders a comment when there's one", () => {
  const { getByText } = render(
    <CommentsList
      bookComments={[
        {
          id: 'p365liwqbfp78xevm0cgn',
          parentId: '58mscurq9ul3c7hm5mimk2',
          creationDate: 1584535896050,
          body: 'Testing',
          author: 'user_x0bqyq5zllbh4kw2kby8u',
          deleted: false
        }
      ]}
    ></CommentsList>
  );
  expect(getByText('Testing')).toBeInTheDocument();
});
