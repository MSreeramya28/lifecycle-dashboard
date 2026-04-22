import { render, screen } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";
import { MockedProvider } from "@apollo/client/testing";
import { GET_COUNTRIES } from "../services/queries";
import "@testing-library/jest-dom";

const mocks = [
  {
    request: { query: GET_COUNTRIES },
    result: {
      data: {
        countries: [{ code: "IN", name: "India", capital: "Delhi" }]
      }
    }
  }
];

test("dashboard renders data", async () => {
  render(
    <MockedProvider mocks={mocks}>
      <Dashboard />
    </MockedProvider>
  );

  expect(await screen.findByText("India")).toBeInTheDocument();
});