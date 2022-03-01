const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '92c5d560d95dec56f2be2b1123913a75',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;