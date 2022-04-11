// read address data with ethersjs
const { ethers } = require('ethers');
const rpcURL = `https://cloudflare-eth.com`;
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const address = `0xf35074bbD0a9AEE46F4Ea137971FEEC024Ab704e`;

const main = async () => {
  const balance = await provider.getBalance(address);

  console.log(
    `ETH balance of ${address} ==> ${ethers.utils.formatEther(balance)} ETH!`
  );
};

main();
