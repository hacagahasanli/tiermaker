import { checkFieldCorrectnessRgx } from "utils/regex";

const errorMessage = {
    emptyPass: 'Are u okay ? Set your password!',
    emptyUsername: 'Okay , Set your username!',
    notMatchFields: "Speechless , Passwords did not match !",
    incorrect_short: 'Password must be at least 4 characters long !',
    iccorrect_long: 'Password must be less than 17 !',
    onlyCanBeUsed: 'Only letters and numbers are allowed',
    noCoverPhoto: "",
    emptyTemplateName: "Are u okay? Set template name!",
    notSelectedCategory: "Select any category",
    longDescription: "Long description (max desc length 100)",
    tierListImagesLength: "You can select max 25 images",
    longTemplateName: "Max length of template name is 50"
}

const helperAuth = (fieldValue) => {
    return !checkFieldCorrectnessRgx(fieldValue)

}

export const authValidate = (values) => {
    const authErrors = {};
    const { password, repeatedPassword, username } = values

    if (!password)
        authErrors.password = errorMessage.emptyPass;
    else {
        helperAuth(password)
            ? authErrors.password = errorMessage.onlyCanBeUsed
            : null
    }

    if (!username)
        authErrors.username = errorMessage.username;
    else {
        helperAuth(username)
            ? authErrors.username = errorMessage.onlyCanBeUsed
            : null
    }

    if (repeatedPassword !== undefined && repeatedPassword !== password)
        authErrors.repeatedPassword = errorMessage.notMatchFields

    if (password?.length && password.length < 4)
        authErrors.password = errorMessage.incorrect_short;

    if (password?.length > 17)
        authErrors.password = errorMessage.iccorrect_long

    return authErrors;
};

export const tierListTemplateValidater = (values) => {
    const templateErrors = {}
    const {
        templateName,
        selectCategory,
        selectImageOrientation,
        templateDescription,
        coverPhoto,
        tierlistImages,
    } = values

    if (!templateName)
        templateErrors.templateName = errorMessage.emptyTemplateName;
    else {
        helperAuth(templateName)
            ? templateErrors.templateName = errorMessage.onlyCanBeUsed
            : null
    }

    if (templateName.length > 50)
        templateErrors.templateName = errorMessage.longTemplateName

    if (selectCategory === "Select a Category")
        templateErrors.selectCategory = errorMessage.notSelectedCategory

    if (templateDescription.length > 100)
        templateErrors.templateDescription = errorMessage.longDescription

    if (Object.entries(tierlistImages).length > 25)
        templateErrors.tierlistImages = errorMessage.tierListImagesLength

    return templateErrors
}