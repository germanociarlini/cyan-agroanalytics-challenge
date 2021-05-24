import { act, render, screen } from "@testing-library/react";
import nock from "nock";
import LoadModal from "../LoadModal";

const mockCollections = [
  {
    id: 1,
    name: "my-collection",
    createdAt: "2021-05-15T00:07:32.183Z",
    updatedAt: "2021-05-15T00:07:32.183Z",
  },
  {
    id: 2,
    name: "test-collection",
    createdAt: "2021-05-17T11:38:37.017Z",
    updatedAt: "2021-05-17T11:38:37.017Z",
  },
  {
    id: 3,
    name: "abc",
    createdAt: "2021-05-18T20:34:08.232Z",
    updatedAt: "2021-05-18T20:34:08.232Z",
  },
];

const BaseUrl = "http://localhost:3001";

xdescribe("Tests with LoadModal", () => {
  it("should render LoadModal", async () => {
    nock(BaseUrl).get("/collections").reply(200, mockCollections);
    await act(async () => {
      const onLoad = (collection) => console.log(collection);
      render(<LoadModal onLoad={onLoad} />);
    });
    expect(screen.getByText("Load Feature Collection")).toBeInTheDocument();
  });
});
