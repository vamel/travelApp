import {IsoCode} from "../types/IsoCode";

export interface ICountryEmergencyNumber {
    [key: IsoCode]: {
        countryName: string,
        ambulance: string,
        fire: string,
        police: string
    }
}
