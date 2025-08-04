export function getFullYear() {
    return new Date().getFullYear();
}

export default getFooterCopy(isIndex) {
    if (isIndex) {
        return "ALX";
    } else {
        return "ALX main dashboard";
    }

}