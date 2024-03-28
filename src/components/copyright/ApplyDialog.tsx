import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, TextField } from '@mui/material';

function ApplicationDialog() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');
  const [applicant, setApplicant] = useState('123');
  const [contact, setContact] = useState('123');
  const [upload, setUpload] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setType("")
    setUrl("")
    setApplicant("123")
    setContact("123")
    setUpload(false)
  };

  const handleApply = () => {
    // 处理申请逻辑
    console.log('Type:', type);
    console.log('URL:', url);
    console.log('Applicant:', applicant);
    console.log('Contact:', contact);
    console.log('Upload:', upload);

    // 提交申请后的其他操作

    // 关闭弹窗
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" sx={{ borderRadius:'7px'}} onClick={handleClickOpen}>Apply Copyright</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Apply Copyright</DialogTitle>
        <DialogContent>
        <FormControl fullWidth sx={{ marginTop: 1 }}>
          <InputLabel>类型</InputLabel>
          <Select
            labelId="type-label"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            label="Type"
          >
            <MenuItem value="类型1">类型1</MenuItem>
            <MenuItem value="类型2">类型2</MenuItem>
            <MenuItem value="类型3">类型3</MenuItem>
          </Select>
        </FormControl>

          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="URL"
            type="url"
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <TextField
            margin="dense"
            id="applicant"
            label="Applicant"
            fullWidth
            value={applicant}
            onChange={(e) => setApplicant(e.target.value)}
            InputProps={{ readOnly: true }}
          />
          <TextField
            margin="dense"
            id="contact"
            label="Contact"
            fullWidth
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            InputProps={{ readOnly: true }}
          />
          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <FormControlLabel
              control={<Switch checked={upload} onChange={(e) => setUpload(e.target.checked)} />}
              label="Upload to IPFS"
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancle</Button>
          <Button onClick={handleApply}>Apply</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ApplicationDialog;
