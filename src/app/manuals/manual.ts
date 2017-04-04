/* Defines the product entity */
export interface IManual {
    id: number;
    fileDate: string;
    itemDescription: string;
    itemModel: string;
    itemManufacturer: string;
    fileLocation: number;
    equipLocation: string;
    tags?: string[];
    modelUrl: string;
}
