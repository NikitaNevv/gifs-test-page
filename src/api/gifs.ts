export const getGifs = async() => {
    try {
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/random?api_key=Y4j9s5hA6eEKy9i7UFvz4Dc6Udg0SAn8`
        );

        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error);
    }
};

