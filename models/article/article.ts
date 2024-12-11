export interface Article {
    id: string;
    title: string;
    content: string;
    author: string;
    publishedDate: Date;
    imageUrl?: string;
    category?: string;
}
