interface Gif {
    id: string;
    title: string;
    url: string;
}

interface GifResponse {
    data: Gif[];
}

export { Gif, GifResponse };
