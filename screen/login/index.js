import { Formik } from "formik";
import { isEmpty } from "lodash";
import React from "react";
import { Button, Image, View } from "react-native";
import styled from "styled-components";
import TextInput from "../../component/TextInput";
import * as Yup from "yup";
import { useCallback } from "react";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const ButtonCustom = styled(Button)`
  border-radius: 16px;
  margin-bottom: 8px;
  padding-left: 14px;
  height: 40px;
`;

const MainLayout = styled(View)`
  padding: 24px;
  display: flex;
`;

const CustomImage = styled(Image)`
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
  align-self: center;
`;

const Login = (props) => {
  const onSubmit = useCallback((values, propsSubmit) => {
    propsSubmit.resetForm();
    props.navigation.push("Home");
  }, []);
  return (
    <Formik
      initialValues={{}}
      onSubmit={onSubmit}
      validationSchema={SignupSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <MainLayout>
          <CustomImage source={require("../../assets/fa-logo.gif")} />
          <TextInput
            name="username"
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
          />
          <TextInput
            name="password"
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
          />
          <ButtonCustom
            onPress={handleSubmit}
            title="Login"
            disabled={!isEmpty(errors)}
          />
        </MainLayout>
      )}
    </Formik>
  );
};

export default Login;
