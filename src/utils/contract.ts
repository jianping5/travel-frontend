// @ts-nocheck
'use client'
import { ExpandMoreOutlined } from "@mui/icons-material";
import { Contract, ethers } from "ethers";

let signer: any;
let provider: any;
// nftAbi
let nftAbi = [
  "function mint(string memory _tokenURI) external returns(uint)",
  "function approve(address to, uint256 tokenId) public",
  "event NFTMinted(address indexed owner, uint indexed tokenId, string tokenURI)"
]
// nftSwapAbi
let nftSwapAbi = [
  "function list(address _nftAddr, uint256 _tokenId, uint256 _price) public",
  "function purchase(address _nftAddr, uint256 _tokenId) public payable",
  "function revoke(address _nftAddr, uint256 _tokenId) public",
  "function update(address _nftAddr, uint256 _tokenId, uint256 _newPrice) public"
]
let nftContractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
let nftSwapContractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

// 获取当前账户
export async function getAccount() {
  if (window.ethereum == null) {
    // If MetaMask is not installed, we use the default provider,
    // which is backed by a variety of third-party services (such
    // as INFURA). They do not have private keys installed,
    // so they only have read-only access
    console.log("MetaMask not installed; using read-only defaults")
    provider = ethers.getDefaultProvider()
  } else {
    // Connect to the MetaMask EIP-1193 object. This is a standard
    // protocol that allows Ethers access to make all read-only
    // requests through MetaMask.
    provider = new ethers.BrowserProvider(window.ethereum)

    // It also provides an opportunity to request access to write
    // operations, which will be performed by the private key
    // that MetaMask manages for the user.
    try {
      signer = await provider.getSigner();
      console.log("当前活动账户", signer)
      return signer
    } catch (err) {
      console.log(err)
    }
  }
}

export async function interactContract() {
  // The contract ABI (fragments we care about)
  let abi = [
    "function ownerOf(uint256 tokenId) public view returns (address)"
  ]

  // Create a contract; connected to a Provider, so it may
  // only access read-only methods (like view and pure)
  let contract = new Contract("0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9", abi, provider)
  let address = await contract.ownerOf(1)
  console.log(address)
}

// 铸造版权 NFT
export async function mint(owner: string, _tokenURI: string) {
  let nftContract = new Contract(nftContractAddress, nftAbi, provider)
  const nftSigner = nftContract.connect(signer);

  const tx = await nftSigner.mint(_tokenURI);
  const receipt = await tx.wait(); // 等待交易确认
  // console.log("tx", tx)
  // console.log("receipt", receipt)

  // 获取 tokenId
  let tokenId;

  // 过滤 NFTMinted 事件
  const filter = nftContract.filters.NFTMinted(owner, null, null);
  const events = await nftContract.queryFilter(filter, receipt.blockNumber);
  // console.log("events", events)

  if (events.length > 0) {
    tokenId = events[0].args.tokenId;
    // console.log("New NFT Minted:");
    // console.log("Token ID:", tokenId);
  }

  return tokenId;
}

// 授权 NFT
export async function approve(tokenId: number) {
  let nftContract = new Contract(nftContractAddress, nftAbi, provider)
  const nftSigner = nftContract.connect(signer);

  const tx = await nftSigner.approve(nftSwapContractAddress, tokenId);
  await tx.wait(); // 等待交易确认
}

// 上架 NFT
export async function list(tokenId: number, price: number) {
  let nftSwapContract = new Contract(nftSwapContractAddress, nftSwapAbi, provider)
  const nftSwapSigner = nftSwapContract.connect(signer);

  const tx = await nftSwapSigner.list(nftContractAddress, tokenId, price);
  await tx.wait(); // 等待交易确认
}

// 购买 NFT
export async function purchase(tokenId: number) {
  let nftSwapContract = new Contract(nftSwapContractAddress, nftSwapAbi, provider)
  const nftSwapSigner = nftSwapContract.connect(signer);

  const tx = await nftSwapSigner.purchase(nftContractAddress, tokenId);
  await tx.wait(); // 等待交易确认
}

// 下架 NFT
export async function revoke(tokenId: number) {
  let nftSwapContract = new Contract(nftSwapContractAddress, nftSwapAbi, provider)
  const nftSwapSigner = nftSwapContract.connect(signer);

  const tx = await nftSwapSigner.revoke(nftContractAddress, tokenId);
  await tx.wait(); // 等待交易确认
}

// 更新价格
export async function update(tokenId: number, newPrice: number) {
  let nftSwapContract = new Contract(nftSwapContractAddress, nftSwapAbi, provider)
  const nftSwapSigner = nftSwapContract.connect(signer);

  const tx = await nftSwapSigner.update(nftContractAddress, tokenId, newPrice);
  await tx.wait(); // 等待交易确认
}
