import { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, TextField } from '@mui/material';
import { ItemType } from '@/api/enum';
import { createCopyright, mintCopyright } from '@/api/social/social-api';
import { getAccount, mint } from '@/utils/contract';
// import { upload2IPFS } from "@/utils/ipfs";

type ApplicationDialogProps = {
  userInfo?: UserInfoResp;
  onApply: () => void;
}

const ApplicationDialog: React.FC<ApplicationDialogProps> = ({userInfo, onApply}) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(0);
  const [url, setUrl] = useState('');
  const [applicant, setApplicant] = useState(userInfo?.account);
  const [contact, setContact] = useState(userInfo?.email);
  const [upload, setUpload] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setType(0)
    setUrl("")
    setUpload(true)
  };

  // 申请版权（待测试）
  const handleCreateCopyright = async (): Promise<any> => {
    try {
      const searchParams = new URLSearchParams(url.split('?')[1]);
      const id = searchParams.get('id') || '0';
      const req: CopyrightCreateReq = {
        itemType: type,
        itemId: parseInt(id),
        uploadSwitch: upload,
      }
      const res = await createCopyright(req)
      const data = res.data
      return data.ipfsHash
    } catch (err) {
      console.log(err)
    }
  }

  // mint 版权
  const handleMintCopyright = async (tokenId: number, accountAddress: string) => {
    try {
      const searchParams = new URLSearchParams(url.split('?')[1]);
      const id = searchParams.get('id') || '0';
      const req: CopyrightMintReq = {
        itemType: type,
        itemId: parseInt(id),
        tokenId: tokenId,
        accountAddress: accountAddress,
      }
      await mintCopyright(req)
    } catch (err) {
      console.log(err)
    }
  }

  const handleApply = async () => {
    // 创建版权，获取 ipfsHash
    const ipfsHash = await handleCreateCopyright()
    const ipfsPath = "ipfs://" + ipfsHash
    console.log(ipfsPath)
    // const ipfsPath = "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq"

    // mint NFT（调用智能合约）
    const signer = await getAccount()
    const accountAddress = signer.address
    // console.log('accountAddress', accountAddress)
    const tokenIdn = await mint(accountAddress, ipfsPath)
    // console.log('tokenId', parseInt(tokenId))
    const tokenId = parseInt(tokenIdn)

    // mint NFT（更新数据库）
    await handleMintCopyright(tokenId, accountAddress)

    // 获取最新版权列表
    onApply()

    // 关闭弹窗
    handleClose()
  };

  return (
    <div>
      <Button variant="text" sx={{ borderRadius:'7px',}} onClick={handleClickOpen}>Apply Copyright</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Apply Copyright</DialogTitle>
        <DialogContent>
        <FormControl fullWidth sx={{ marginTop: 1 }}>
          <InputLabel>Type</InputLabel>
          <Select
            labelId="type-label"
            id="type"
            value={type}
            onChange={(e) => setType(typeof e.target.value === 'string' ? parseInt(e.target.value) : e.target.value)}
            label="Type"
          >
            <MenuItem value={ItemType.VIDEO}>Video</MenuItem>
            <MenuItem value={ItemType.ARTICLE}>Article</MenuItem>
          </Select>
        </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="URL"
            type="url"
            fullWidth
            placeholder='e.g. http://travel/video?id=1'
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
          <Button onClick={() => handleApply()}>Apply</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ApplicationDialog;

