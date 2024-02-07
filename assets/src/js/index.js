// index.js
import Navigation from './module/navigation.js';


import xDataPromise from './module/api.js';

export default class Home {
  constructor() {
    this.corruptedData = null;
    this.corruptInit();
  }

  async corruptInit() {
    this.corruptedData = await xDataPromise;
  }

  async getCorruptedData() {
    await this.corruptInit();
    return this.corruptedData;
  }
}

const home = new Home();
(async () => {
  console.log('Ini data yang dari luar getXData():', await home.getCorruptedData());
})();