// module/api.js

const apiUrl = 'https://api.github.com/repos/wanitamurahan/wanitamurahan.github.io/contents/media/video';

let xData = null;

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    xData = data;
    return xData;
  } catch (error) {
    console.error('There was a problem fetching the data:', error);
    throw error;
  }
}

export default new Promise((resolve, reject) => {
  fetchData()
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
});