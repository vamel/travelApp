import {MAPS_API_KEY} from "@env";

export const getMapPreview = (lat, lon) => {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon},`+
        `&zoom=15&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lon}&key=${MAPS_API_KEY}`;
}

export const getAddress = async (lat, lon) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${MAPS_API_KEY}`;
    const response = await fetch(url);

    const data = await response.json();
    return data.results[0].formatted_address;
}
