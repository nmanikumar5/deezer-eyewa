import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import sinon from "sinon";
import App from "../../components/App";
import { Row } from "../../components/common";

describe("App", () => {
  let mountedWrapper;
  const getAlbumsSpy = sinon.spy();
  const getArtistsSpy = sinon.spy();

  const defaultProps = {
    artistName: "TEST",
    getArtists: getArtistsSpy,
    artistList: [],
    getAlbums: getAlbumsSpy,
    selectedArtist: {},
    selectedAlbum: [],
  };

  const wrapper = (props = defaultProps) => {
    if (!mountedWrapper) {
      mountedWrapper = shallow(<App {...props} />);
    }
    return mountedWrapper;
  };

  beforeEach(() => {
    mountedWrapper = undefined;
  });

  it("should render Row", () => {
    const component = wrapper();
    expect(component.find(Row).length === 1).toBeTruthy();
  });
});
