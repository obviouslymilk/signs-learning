export default defineNuxtPlugin({
  name: 'device-plugin',
  enforce: 'pre',
  setup() {
    const LOCAL_STORAGE_KEY = 'deviceid';
    const deviceIdStored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (deviceIdStored) return;

    const deviceIdGenerated = crypto.randomUUID();
    localStorage.setItem(LOCAL_STORAGE_KEY, deviceIdGenerated);
  },
});
