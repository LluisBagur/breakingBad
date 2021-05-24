import { render } from "@testing-library/react";
import React from "react";
import translationProperties from "../../helpers/testing/translationProperties";
import {renderWithRouter} from "../../helpers/testing/withRouter";
import Card from "./card";

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

describe("When Card is rendered", () => {
  test('it should render the component with its props', () => {
    const { queryByText, queryByTestId, queryByAltText } = renderWithRouter(
      <Card
        item={detailInfo}
        {...translationProperties}
      />
    );
    expect(queryByText("Walter White")).toBeInTheDocument();
    expect(queryByTestId("img-character")).toBeInTheDocument();
    expect(queryByAltText("character")).toBeInTheDocument();
  });
});
