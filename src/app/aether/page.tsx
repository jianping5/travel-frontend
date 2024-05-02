'use client'
import { getAccount } from "@/utils/contract";
import { Contract, ethers } from "ethers";
import { useEffect } from "react";

const Index = () => {
  let signer = null;
  let provider: any;

  // const getAccount = async () => {
  //   if (window.ethereum == null) {
  //     // If MetaMask is not installed, we use the default provider,
  //     // which is backed by a variety of third-party services (such
  //     // as INFURA). They do not have private keys installed,
  //     // so they only have read-only access
  //     console.log("MetaMask not installed; using read-only defaults")
  //     provider = ethers.getDefaultProvider()
  //   } else {
  //     // Connect to the MetaMask EIP-1193 object. This is a standard
  //     // protocol that allows Ethers access to make all read-only
  //     // requests through MetaMask.
  //     provider = new ethers.BrowserProvider(window.ethereum)

  //     // It also provides an opportunity to request access to write
  //     // operations, which will be performed by the private key
  //     // that MetaMask manages for the user.
  //     try {
  //       signer = await provider.getSigner();
  //       console.log("当前活动账户", signer)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  // }

  // const interactContract = async () => {
  //   // The contract ABI (fragments we care about)
  //   let abi = [
  //     "function ownerOf(uint256 tokenId) public view returns (address)"
  //   ]

  //   // Create a contract; connected to a Provider, so it may
  //   // only access read-only methods (like view and pure)
  //   let contract = new Contract("0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9", abi, provider)
  //   let address = await contract.ownerOf(1)
  //   console.log(address)
  // }

  // useEffect(() => {
  //   getAccount()
  //   interactContract()
  // }, [])


  return (
    <>
    123
    </>
  )
}

export default Index;