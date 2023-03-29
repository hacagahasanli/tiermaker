//regex pattern for username and password

export const checkFieldCorrectnessRgx = (fieldName) => {
    const pattern = /^[0-9A-Za-z?\.@]+$/;
    const isValidField = pattern.test(fieldName)

    return isValidField
}
