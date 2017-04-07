/* Defines the manual entity */
export interface ILocation {
    id: number;
    location: string;
    defaultType: string;
    description: string;
    locationArea: string;
    locationActive: boolean;
    locationInUse: boolean;
    locationPutawayTo: boolean;
    locationPutawayFrom: boolean;    
    locationAudited: boolean;
}