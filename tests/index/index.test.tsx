import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders home page sections', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /hello, i'm jorge araya/i,
    });
    const photo = screen.getByAltText(/Picture of the author/i);
    const contactBtn = screen.getByRole('link', { name: /contact me/i });
    const aboutSection = screen.getByRole('heading', {
      name: /About me/i,
    });
    const contactSection = screen.getByRole('heading', {
      name: /Contact/i,
    });

    expect(heading).toBeInTheDocument();
    expect(photo).toBeInTheDocument();
    expect(contactBtn).toBeInTheDocument();
    expect(aboutSection).toBeInTheDocument();
    expect(contactSection).toBeInTheDocument();
  });
});