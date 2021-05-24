import { render } from "@testing-library/react";
import React from "react";
import translationProperties from "../../helpers/testing/translationProperties";
import {renderWithRouter} from "../../helpers/testing/withRouter";
import ExtendedCard from "./extendedCard";

jest.mock("../../components/Loading/Loading", () => () => (
  <p>Loading</p>
));

const detailInfo = {
  char_id: 1,
  name: "Walter White",
  birthday: "09-07-1958",
  occupation: ["High School Chemistry Teacher", "Meth King Pin"],
  img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
  status: "Deceased",
  appearance: [1, 2, 3, 4, 5],
  nickname: "Heisenberg",
  portrayed: "Bryan Cranston",
};

describe("When ExtendedCard is rendered", () => {
  test('it should render the component with its props', () => {
    const { queryByText, queryByAltText } = renderWithRouter(
      <ExtendedCard
        item={detailInfo}
        quote={["random quote"]}
        loading={false}
        {...translationProperties}
      />
    );
    expect(queryByText("Walter White")).toBeInTheDocument();
    expect(queryByText("Alias: Heisenberg")).toBeInTheDocument();
    expect(queryByText("Representado por: Bryan Cranston")).toBeInTheDocument();
    expect(queryByText("Cumpleaños: 09-07-1958")).toBeInTheDocument();
    expect(queryByText("random quote")).toBeInTheDocument();
    expect(queryByAltText("character")).toBeInTheDocument();
  });
  test('it should render the component without quote prop', () => {
    const { queryByText, queryByAltText } = renderWithRouter(
      <ExtendedCard
        item={detailInfo}
        quote={[]}
        loading={false}
        {...translationProperties}
      />
    );
    expect(queryByText("Walter White")).toBeInTheDocument();
    expect(queryByText("Alias: Heisenberg")).toBeInTheDocument();
    expect(queryByText("Representado por: Bryan Cranston")).toBeInTheDocument();
    expect(queryByText("Cumpleaños: 09-07-1958")).toBeInTheDocument();
    expect(queryByText("No se han encontrado frases celebres")).toBeInTheDocument();
    expect(queryByAltText("character")).toBeInTheDocument();
  });
  test('it should render Loading component when is Loading quote', () => {
    const { queryByText, queryByAltText } = renderWithRouter(
      <ExtendedCard
        item={detailInfo}
        quote={[]}
        loading={true}
        {...translationProperties}
      />
    );
    expect(queryByText("Walter White")).toBeInTheDocument();
    expect(queryByText("Alias: Heisenberg")).toBeInTheDocument();
    expect(queryByText("Representado por: Bryan Cranston")).toBeInTheDocument();
    expect(queryByText("Cumpleaños: 09-07-1958")).toBeInTheDocument();
    expect(queryByText("No se han encontrado frases celebres")).not.toBeInTheDocument();
    expect(queryByText("random quote")).not.toBeInTheDocument();
    expect(queryByAltText("character")).toBeInTheDocument();
    expect(queryByText("Loading")).toBeInTheDocument();

  });
});
