const API = 'https://youtube138.p.rapidapi.com/playlist/videos/?id=PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr';
const content = null || document.getElementById('main');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f5a372ea49msheaddaae5c553af5p11d781jsn7cfc59c5e1f6',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let Iview = `
      ${videos.contents.map(item => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${item.video.thumbnails[0].url}" alt="${item.video.title}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${item.video.title}
            </h3>
          </div>
        </div>
      `).slice(0, 4).join('')}
    `;
    content.innerHTML = Iview;
  } catch (error) {
    console.error(error);
  }
})();