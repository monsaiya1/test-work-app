import { get } from "lodash";
import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components";

const CustomInput = styled(TextInput)`
  border: 1px gray solid;
  border-radius: 8px;
  margin-bottom: 8px;
  padding-left: 14px;
  height: 40px;
`;

const TextInputCustom = (props) => {
  return (
    <CustomInput
      {...props}
      onChangeText={props.handleChange(props.name)}
      onBlur={props.handleBlur(props.name)}
      value={get(props.values, `${props.name}`, "")}
      placeholder={props.placeholder ? props.placeholder : props.name}
    />
  );
};

export default TextInputCustom;
