const useImagePathHandler = (baseUrl) => {
    const fileId = baseUrl.match(/\/file\/d\/([^/]+)/)[1];
    const newUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
    return newUrl;
};

export default useImagePathHandler;