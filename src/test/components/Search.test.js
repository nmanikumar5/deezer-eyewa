import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import sinon from "sinon";
import Search from "../../components/Search";
import { Row, Col, SearchInput, Button } from "../../components/common";

describe("Search", () => {
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
      mountedWrapper = shallow(<Search {...props} />);
    }
    return mountedWrapper;
  };

  beforeEach(() => {
    mountedWrapper = undefined;
  });

  it("should render Row, Col, SearchInput and Button", () => {
    const component = wrapper();
    expect(component.find(Row).length).toEqual(1);
    expect(component.find(Col).length).toEqual(2);
    expect(component.find(SearchInput).length).toEqual(1);
    expect(component.find(Button).length).toEqual(1);
  });
});
