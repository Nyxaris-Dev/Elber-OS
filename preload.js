const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getAppInfo: () => ({
    name: 'Robot OS v2.0',
    version: '2.0.1'
  })
});