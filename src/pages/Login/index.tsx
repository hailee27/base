import React, { useEffect, useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  IconButton,
  InputAdornment,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import type { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { login, setInitialState } from "../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images";
import GoogleLogin from "../../components/Account/GoogleLogin";
import { checkAuth } from "../../libs/localStorage";

// customize
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.vtvlive.vn/">
        VTVlive
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const accessToken: string = checkAuth();
  const [showPassWord, setShowPassWord] = useState(false);
  const [email, setEmail] = useState("email");
  const [password, setPassWord] = useState("password");
  const { error, loading } = useSelector((state: any) => state.auth);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataForm = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (!dataForm.email || !dataForm.password) {
      setEmail("");
      setPassWord("");
    }
    dispatch(login(dataForm));
    navigate("/home");
  };

  useEffect(() => {
    accessToken && navigate("/");
    if (error) {
      setEmail("");
      setPassWord("");
    }
  }, [accessToken, error, navigate]);

  return (
    <Container component="main" maxWidth="xs">
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => dispatch(setInitialState())}
      >
        <Alert
          severity="error"
          onClose={() => dispatch(setInitialState())}
          sx={{ width: "100%" }}
        >
          Đăng nhập thất bại
        </Alert>
      </Snackbar>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={images.Logo} alt="Logo" />
        <Typography component="h1" variant="h4">
          Đăng Nhập
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            error={!email && true}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            aria-describedby="component-error-text"
            helperText={email ? "" : "Vui lòng nhập đúng email*"}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            error={!password && true}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassWord ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            helperText={password ? "" : "Vui lòng nhập đúng PassWord*"}
            onChange={(e) => setPassWord(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassWord(!showPassWord)}>
                    {showPassWord ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            disabled={loading}
            variant="contained"
            sx={{ mt: 3, mb: 1 }}
          >
            {loading ? (
              <CircularProgress size={25} color="inherit" />
            ) : (
              " Đăng Nhập"
            )}
          </Button>

          {/* login with google */}
          <GoogleLogin />

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Login;
