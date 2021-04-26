import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import "../../setupTests";
import ShowAlbums from "../../components/ShowAlbums";
import Album from "../../components/ShowAlbums/Album";
import { Paragraph } from "../../components/common";
import * as redux from "react-redux";

describe("ShowAlbums", () => {
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
      mountedWrapper = shallow(<ShowAlbums {...props} />);
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
            id: 123,
            title: "Title",
            cover_medium: "image_linkid",
          },
        },
      },
    ]);

    // Mock useDispatch hook
    useDispatchStub = sinon.stub(redux, "useDispatch");
    // Mock dispatch function returned from useDispatch
    dispatchSpy = sinon.spy();
    useDispatchStub.returns(dispatchSpy);
  });

  it("should render Paragraph and Album", () => {
    const component = wrapper();
    expect(component.find(Paragraph).length).toEqual(2);
    expect(component.find(Album).length).toEqual(1);
  });
});
