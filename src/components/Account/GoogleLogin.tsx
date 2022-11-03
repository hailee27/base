import React from "react";
import { useGoogleLogin } from "react-google-login";
import GoogleIcon from "@mui/icons-material/Google";
import { ButtonGoogle } from "../../libs/MuiComponents";

const clientId: any = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const GoogleLogin = () => {
  const onSuccess = (res: any) => {
    console.log("Login Success: currentUser:", res);
    alert(`Logged in successfully welcome ${res.profileObj.name} `);
  };
  const onFailure = (res: any) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login.`);
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
  });
  return (
    <ButtonGoogle
      fullWidth
      variant="contained"
      sx={{ mt: 1, mb: 2, backgroundColor: "tomato" }}
      startIcon={<GoogleIcon />}
      onClick={signIn}
    >
      Đăng Nhập Bằng Google
    </ButtonGoogle>
  );
};

export default React.memo(GoogleLogin);
