export class Attraction {
    constructor(name: string, city: string, images_url: string[], description: string, isAccessible: boolean) {
        this.name = name;
        this.city = city;
        this.images_url = images_url;
        this.description = description;
        this.isAccessibleForDisabled = isAccessible;
    }
    
    name: string;
    city: string;
    images_url: string[];
    description: string;
    isAccessibleForDisabled: boolean;
}
