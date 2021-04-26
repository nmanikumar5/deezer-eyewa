// @ts-nocheck
import React, { useState } from "react";
import { Input, Ul, Li, SuggestContainer } from "./style";
import { Row, Col } from "..";

const SearchInput = ({
  options,
  requests,
  onClickFunction,
  placeholder,
  titleField,
}) => {
  const [inputValue, setInputValue] = useState("");

  const updateValue = (newValue) => {
    setInputValue(newValue);
    requests(newValue);
  };

  const handleSlctdClick = (selectedData) => {
    setInputValue(selectedData[titleField]);
    onClickFunction(selectedData);
  };

  return (
    <Row>
      <Col>
        <Input
          value={inputValue}
          onChange={(evt) => updateValue(evt.target.value)}
          placeholder={placeholder}
        />
      </Col>
      {options?.length > 0 && (
        <Col>
          <SuggestContainer>
            <Ul>
              <Li key="search-results" disabled={true}>
                Search Results
              </Li>
              {options?.map((value, index) => (
                <Li
                  key={`${value.id}-${index}`}
                  onClick={() => handleSlctdClick(value)}
                >
                  {value[titleField]}
                </Li>
              ))}
            </Ul>
          </SuggestContainer>
        </Col>
      )}
    </Row>
  );
};

export default SearchInput;
