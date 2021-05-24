import { render } from "@testing-library/react";
import React from "react";
import translationProperties from "../../helpers/testing/translationProperties";
import MockRenderChildren from "../../helpers/testing/MockRenderChildren";
import { CharDetail } from "./charDetail";

jest.mock("../../components/extendedCard/extendedCard", () => () => (
  <p>ExtendedCard</p>
));
jest.mock("../../components/layout/layout", () =>  MockRenderChildren);


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

describe("When charDetail is rendered", () => {
  test("it should render their components", () => {
    const { queryByText } = render(
      <CharDetail
        detailInfo={detailInfo}
        fetchRandomQuote={() => {}}
        randomQuote={[]}
        loadingQuote={false}
        {...translationProperties}
      />
    );
    expect(queryByText("ExtendedCard")).toBeInTheDocument();
  });
});
