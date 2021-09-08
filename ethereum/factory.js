import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x6291df2793f4D8BDCd5C4495244dCcA424df66c8"
);

export default instance;
