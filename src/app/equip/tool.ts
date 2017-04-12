/* Defines the tool entity */
export interface ITool {
    toolId: number;
    item: string;
    location: string;
	qty: number;
    size: string;
    partOfSet: number;
    dateBought: string;
    comment: string;
    imageUrl: string;
}