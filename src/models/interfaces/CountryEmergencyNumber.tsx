import {IsoCode} from "../types/IsoCode";

export interface CountryEmergencyNumber {
    [key: IsoCode]: {
        countryName: string,
        ambulance: string,
        fire: string,
        police: string
    }
}
