export interface SeriesChapter {
    id: string;
    title: string;
    available: boolean;
}

export interface SeriesContentResponse {
    error: boolean;
    message: string;
    body: SeriesChapter[];
}

export interface SeriesDetail {
    error: boolean;
    message: string;
    body: {
        id: string;
        userId: string;
        userName: string;
        title: string;
        caption: string;
        description?: string;
        tags: string[];
        publishedContentCount: number;
        createDate: string;
        updateDate: string;
        firstNovelId: string;
        latestNovelId: string;
        xRestrict: number;
        isOriginal: boolean;
        cover: {
            urls: {
                original: string;
                small?: string;
                regular?: string;
                original_square?: string;
            };
        };
        extraData: {
            meta: {
                title: string;
                description: string;
                canonical: string;
                ogp: {
                    description: string;
                    image: string;
                    title: string;
                    type: string;
                };
            };
        };
    };
}

export interface SeriesFeed {
    title: string;
    description: string;
    image: string;
    link: string;
    item: Array<{
        title: string;
        description: string;
        link: string;
        pubDate?: Date;
        author?: string;
        category?: string[];
    }>;
}
