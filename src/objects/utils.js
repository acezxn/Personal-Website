import sha256 from 'crypto-js/sha256';
import hex from 'crypto-js/enc-hex';

export default class Utils {
    static hexToRgbArray(hex) {
        hex = hex.replace('#', '');

        // Handle 3-digit shorthand hex
        if (hex.length === 3) {
            hex = hex.split('').map(function (hex) {
                return hex + hex;
            }).join('');
        }

        // Convert hex to RGB(A) values
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        // Optionally handle alpha channel (if hex is in #RRGGBBAA format)
        var a = 255; // Default alpha value (255 means fully opaque)
        if (hex.length === 8) {
            a = (bigint >> 24) & 255;
        }

        return (hex.length === 8) ? [r, g, b, a] : [r, g, b];
    }

    static createSHA256Hash(inputString) {
        const hash = sha256(inputString);
        return hash.toString(hex);
    }

    static capitalize(inputString) {
        return inputString.charAt(0).toUpperCase() + inputString.slice(1);
    }
}