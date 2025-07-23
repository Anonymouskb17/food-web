import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, TextField, Button, Typography, FormControlLabel, Checkbox, Link, Divider } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import foodImg from '../images/food.jpg'
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Mật khẩu không khớp");
      return;
    }
    setError("");
    alert("Đăng ký thành công!");
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#f5f6fa" }}>
      <Card sx={{ width: 450,mt: 5,mb: 5,borderRadius: 10 }}>
        <CardMedia
          component="img"
          height="250"
          image="/images/food.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" align="left" gutterBottom>
            Đăng ký
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PeopleAltOutlinedIcon />
                </InputAdornment>
              ),
            }}
              label="Họ và tên"
              placeholder="Nhập họ và tên"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              fullWidth
              className="custom-input"
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              label="Email"
              placeholder="Nhập email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              fullWidth
              className="custom-input"
            />
            <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyOutlinedIcon />
                </InputAdornment>
              ),
            }}
              label="Mật khẩu"
              placeholder="Nhập mật khẩu"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              fullWidth
              className="custom-input"
            />
            <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyOutlinedIcon />
                </InputAdornment>
              ),
            }}
              label="Nhập lại mật khẩu"
              placeholder="Nhập lại mật khẩu"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              fullWidth
              className="custom-input"
            />
            <FormControlLabel
              control={<Checkbox name="remember" checked={form.remember} onChange={handleChange} color="primary" />}
              label="Ghi nhớ đăng nhập"
            />
            {error && (
              <Typography color="error" variant="body2" align="center">
                {error}
              </Typography>
            )}
            <Button type="submit" variant="contained" 
            sx={{backgroundColor: '#df7020',
              borderRadius: 50,
              py: 2,
              
            }} 
            fullWidth>
              Đăng ký
            </Button>

            <Divider sx={{ my: 3 }} textAlign="center">
              Or sign up with
            </Divider>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 2 }}>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{
                  borderRadius: 5,
                  textTransform: 'none',
                  bgcolor: 'grey.100',
                  color: 'black',
                  px: 3,
                  minWidth: 120,
                  boxShadow: 1,
                  '&:hover': { bgcolor: 'grey.200' }
                }}
                fullWidth={false}
              >
                Google
              </Button>
              <Button
                variant="outlined"
                startIcon={<AppleIcon />}
                sx={{
                  borderRadius: 5,
                  textTransform: 'none',
                  bgcolor: 'grey.100',
                  color: 'black',
                  px: 3,
                  minWidth: 120,
                  boxShadow: 1,
                  '&:hover': { bgcolor: 'grey.200' }
                }}
                fullWidth={false}
              >
                Apple
              </Button>
            </Box>
          </Box>
          
          
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Đã có tài khoản?{" "}
            <Link href="/login">Đăng nhập</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}