export const toTitle = (text) => {
    return text.toLowerCase().split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    }).join(' ');
}
