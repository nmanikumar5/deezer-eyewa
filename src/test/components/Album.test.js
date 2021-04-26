import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import sinon from "sinon";
import Album from "../../components/ShowAlbums/Album";
import { Row, Paragraph, StyledImage } from "../../components/common";

describe("Search", () => {
  let mountedWrapper;
  const handleClickSpy = sinon.spy();

  const defaultProps = {
    data: {},
    handleClick: handleClickSpy,
  };

  const wrapper = (props = defaultProps) => {
    if (!mountedWrapper) {
      mountedWrapper = shallow(<Album {...props} />);
    }
    return mountedWrapper;
  };

  beforeEach(() => {
    mountedWrapper = undefined;
  });

  it("should render Row, StyledImage and Paragraph", () => {
    const component = wrapper();
    expect(component.find(Row).length).toEqual(1);
    expect(component.find(StyledImage).length).toEqual(1);
    expect(component.find(Paragraph).length).toEqual(1);
  });
});
