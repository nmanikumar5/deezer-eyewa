import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import "../../setupTests";
import Tracks from "../../components/Tracks";
import { Row, Table } from "../../components/common";
import * as redux from "react-redux";

describe("Tracks", () => {
  let mountedWrapper;

  jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
  }));
  let useSelectorStub;
  let useDispatchStub;
  let dispatchSpy;

  const wrapper = (props = {}) => {
    if (!mountedWrapper) {
      mountedWrapper = shallow(<Tracks {...props} />);
    }
    return mountedWrapper;
  };

  beforeEach(() => {
    mountedWrapper = undefined;
    useSelectorStub = sinon.stub(redux, "useSelector");
    useSelectorStub.returns([
      {
        deezer: {
          selectedArtist: { name: "test" },
          albumList: [
            {
              id: 123,
              title: "Title",
              cover_medium: "image_linkid",
            },
          ],
          selectedAlbum: {
            id: 3080,
            title: "Crash Test Dummies",
            cover_medium: "image_linkid",
          },
          trackList: [
            {
              id: 14885346,
              readable: true,
              title: "Superman's Song",
              title_short: "Superman's Song",
              title_version: "",
              isrc: "CAV169101324",
              link: "https://www.deezer.com/track/14885346",
              duration: 270,
              track_position: 1,
              disk_number: 1,
              rank: 76252,
              explicit_lyrics: false,
              explicit_content_lyrics: 0,
              explicit_content_cover: 2,
              preview:
                "https://cdns-preview-0.dzcdn.net/stream/c-08f083ded59f7bfc1b2beb377ebf24fe-3.mp3",
              md5_image: "a93ac4f6d3e1e5704c16511121948110",
              artist: {
                id: 3080,
                name: "Crash Test Dummies",
                tracklist: "https://api.deezer.com/artist/3080/top?limit=50",
                type: "artist",
              },
              type: "track",
            },
          ],
        },
      },
    ]);

    // Mock useDispatch hook
    useDispatchStub = sinon.stub(redux, "useDispatch");
    // Mock dispatch function returned from useDispatch
    dispatchSpy = sinon.spy();
    useDispatchStub.returns(dispatchSpy);
  });

  it("should render Row, and Table", () => {
    const component = wrapper();
    expect(component.find(Row).length).toEqual(2);
    expect(component.find(Table).length).toEqual(1);
  });
});
