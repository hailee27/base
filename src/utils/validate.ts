/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
const validate = (datForm: any) => {
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassWord] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const handleBlur = (e: any) => {
    const { name } = e.target;
    switch (name) {
      case "fullname":
        validateFullname(datForm.fullname);
        break;
      case "password":
        validatePassword(datForm.password);
        break;
      case "email":
        validateEmail(datForm.email);
        break;
      case "name":
        validateNameGame(datForm.name);
        break;
      default:
    }
  };

  const validateFullname = (fullname: string) => {
    if (!fullname) {
      setErrorName("*Không được thiếu Name");
    } else {
      setErrorName("");
      fullname.length <= 10 && setErrorName("*Phải lớn hơn 10 kí tự");
    }
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setErrorPassWord("*Không được thiếu Password");
    } else {
      setErrorPassWord("");
      password.length <= 8 && setErrorPassWord("*Phải có ít nhất 8 kí tự");
    }
  };
  const validateEmail = (email: string) => {
    let res;
    if (!email) {
      setErrorEmail("*Không được thiếu Email");
    } else {
      const pattern =
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      res = pattern.test(String(email));
      !res ? setErrorEmail("*Không đúng Email") : setErrorEmail("");
    }
  };
  const validateNameGame = (name: string) => {
    if (!name) {
      setErrorName("*Không được thiếu Name");
    } else {
      setErrorName("");
      name.length <= 10 && setErrorName("*Phải lớn hơn 10 kí tự");
    }
  };

  return {
    errorName,
    errorEmail,
    errorPassword,
    setErrorName,
    setErrorPassWord,
    setErrorEmail,
    handleBlur,
  };
};
export default validate;
