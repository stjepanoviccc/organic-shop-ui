// loading local images
const useCheckImagePath = (localhost, github) => {
    const isLocalhost = window.location.href.includes('localhost');
    const url = isLocalhost ? localhost : github;
    return url;
};

export default useCheckImagePath;