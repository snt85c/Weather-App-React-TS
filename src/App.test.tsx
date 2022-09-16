import { render, screen } from '@testing-library/react';
import App from './App';


describe("general testing",()=>{

  it('checks for searchbar render', () => {
    render(<App />);
    const linkElement = screen.getByPlaceholderText(/search/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it(" execute snapshot test",()=>{
    const container = render(<App/>)
    expect(container).toMatchSnapshot()
  })
  
})