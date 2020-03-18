import React from 'react';
import Comment from './Comment';
import { render } from '../../testUtils';

it('renders the comment content', () => {
  const { getByText } = render(
    <Comment
      id="p365liwqbfp78xevm0cgn"
      author="user_x0bqyq5zllbh4kw2kby8u"
      creationDate={1584535896050}
      body="Testing"
    ></Comment>
  );
  expect(getByText('Testing')).toBeInTheDocument();
});
