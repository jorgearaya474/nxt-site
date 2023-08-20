import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Blog from '../../pages/blog/index'

const mockProps = {
  posts: [
    {
      slug: 'example-post',
      title: 'Example Post',
      image: '../../public/images/why-use-wordpress-in-2023-thumbnail.jpg',
      excerpt: 'This is an example post excerpt.',
      date: '2023-08-19',
    },
  ],
};

describe('Blog page', () => {
  it('renders blog and posts', () => {
    render(<Blog {...mockProps} />)

    const pageTitle = screen.getByText(/Latest Articles/i);
    expect(pageTitle).toBeInTheDocument();
  });

  it('renders posts lis', () => {
    render(<Blog {...mockProps} />);

    const postsList = screen.getByTestId('posts-list');
    expect(postsList).toBeInTheDocument();
  });
});