import { updateAsset } from '../features/cryptoSlice';

function getRandomChange() {
  return (Math.random() * 2 - 1).toFixed(2); 
}

function getRandomVolumeChange() {
  return Math.floor(Math.random() * 100000);
}

export function startSimulation(dispatch) {
  setInterval(() => {
    dispatch((dispatch, getState) => {
      const assets = getState().crypto.assets;
      const updatedAssets = assets.map(asset => ({
        ...asset,
        price: asset.price + parseFloat(getRandomChange()),
        percent1h: (parseFloat(asset.percent1h) + parseFloat(getRandomChange())).toFixed(2),
        percent24h: (parseFloat(asset.percent24h) + parseFloat(getRandomChange())).toFixed(2),
        percent7d: (parseFloat(asset.percent7d) + parseFloat(getRandomChange())).toFixed(2),
        volume24h: asset.volume24h + getRandomVolumeChange(),
      }));
      
      updatedAssets.forEach(asset => {
        dispatch(updateAsset(asset));
      });
    });
  }, 3000);
}
