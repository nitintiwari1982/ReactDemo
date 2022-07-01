import { render, screen } from '@testing-library/react';
import Register from './Register';

// test("test Header",() =>{
//   render(<Register />);
//   const childElement = screen.getByText("User Registration Form");
//   expect(childElement).toBeInTheDocument();
// });

// test("test Labels",() =>{
//   render(<Register />);
//   const childElementFirst = screen.getByLabelText("FirstName");
//   expect(childElementFirst).toBeInTheDocument();
//   const childElementLast = screen.getByLabelText("Last Name");
//   expect(childElementLast).toBeInTheDocument();
// });

describe("Registration form Test", () =>{

  test("to check button", async () =>{

    render(<Register />);
    const childs = await screen.findAllByRole("button");
    expect(childs).toHaveLength(1);

  })

});