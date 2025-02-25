import { render, screen } from "@testing-library/react";
//import App from './App';
import BookingForm from '../src/components/BookingForm';
test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();

});
//test('renders learn react link', () => {
 // render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
//});
