// read contract data with ethersjs
const { ethers } = require('ethers');
const rpcURL = `https://cloudflare-eth.com`;
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const ERC20_ABI = [
  'function name() view returns(string)',
  'function symbol() view returns(string)',
  'function totalSupply() view returns(uint)',
  'function balanceOf(address) view returns(uint)',
];

const address = `0x6B175474E89094C44Da98b954EedeAC495271d0F`; // DAI contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();

  console.log(`Reading data from ${address}`);
  console.log(`Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Total Supply: ${totalSupply}`);

  const balance = await contract.balanceOf(address);

  console.log(`Balance returned: ${balance} `);
  console.log(`Balance formatted: ${ethers.utils.formatEther(balance)} ETH`);
};

main();
