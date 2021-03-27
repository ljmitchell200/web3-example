async function getGasPrice() {
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3("https://eth-mainnet.alchemyapi.io/v2/meMVEhLc1VBSRRDRA1eT31eZWZ1aou-r");
    const gasPrice = await web3.eth.getGasPrice();
    console.log("The current gas price is " + gasPrice);
  }
  getGasPrice();
  