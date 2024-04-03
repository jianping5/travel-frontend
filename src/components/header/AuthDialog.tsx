'use client'
import React, { useState, useSyncExternalStore } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { login } from '@/api/user/user-api';

interface AuthDialogProps {
  open: boolean;
  onClose: () => void;
  onLogin: () => void;  
}

const AuthDialog: React.FC<AuthDialogProps> = ({ open, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async () => {
    try {
      // 在这里执行登录或注册的逻辑，可以调用父组件传递的回调函数进行处理
      const response = await login({account: username, password: password})
      const data = response.data

      // 设置登录态
      localStorage.setItem("loginStatus", "true")
      localStorage.setItem("token", data.accessToken)

      onClose();
      onLogin();
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{isLogin ? 'Login' : 'Register'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Username"
          type="text"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>{isLogin ? 'Login' : 'Register'}</Button>
      </DialogActions>
      <Button onClick={handleSwitch} sx={{ position: 'absolute', top: 15, right: 15 }}>{isLogin ? 'Switch to Register' : 'Switch to Login'}</Button>
    </Dialog>
  );
};

export default AuthDialog;
