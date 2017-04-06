/* Defines the tool entity */
export interface ITool {
    id: number;
    item: string;
    location: string;
	qty: number;
    size: string;
    partOfSet: number;
    dateBought: string;
    comment: string;
}