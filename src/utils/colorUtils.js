import COLORS from "../styles/utils/Colors";

const colorMap = {
    "orange": COLORS.universal.orange500,
    "purple": COLORS.universal.purple500,
    "gray": COLORS.universal.gray500,
    "red": COLORS.universal.red500,
    "green": COLORS.universal.green500,
}

export const getColorValue = (colorName) => {
    return colorMap[colorName];
}
