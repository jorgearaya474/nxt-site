import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Works from '../../pages/works';

const mockProps = {
  projects: [
    {
      slug: 'example-project',
      title: 'Example project',
      image: '../../public/images/projects/rubik-site.jpg',
      link: 'https://test.link',
      description: 'Test project description',
      technologies: 'PHP, WordPress, JavaScript, CSS',
    },
  ],
};

describe('Projects page', () => {
  it('renders projects page', () => {
    render(<Works {...mockProps} />);

    const pageTitle = screen.getByText(/Latest Projects/i);
    expect(pageTitle).toBeInTheDocument();
  });

  it('renders projects list', () => {
    render(<Works {...mockProps} />);

    const projectsList = screen.getByTestId('projects-list');
    expect(projectsList).toBeInTheDocument();
  });
});
