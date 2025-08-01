export function getFullYear() {
    return new Date().getFullYear();
}

export default getFooterCopy(isIndex) {
    if (isindex) {
        return "ALX";
    } else {
        return "ALX main dashboard";
    }

}