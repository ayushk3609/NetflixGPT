
export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const AVATAR = "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUMx6z-7bB7tyN-OZXt6i8BXuZHN5EWBr7MQy7ilhubrpI2yOofVtT-QmoO6VJt7I1ewosmuQa29BGFfOOVcJxdKx1sT-co.png?r=201"

export const API_OPTIONS = {

    headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': `${process.env.REACT_APP_TRAKT_API_KEY}`
    }

};

export const POSTER_URL_OMDB = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=`

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const NO_PREVIEW = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/No_image_available_450_x_600.svg/450px-No_image_available_450_x_600.svg.png"

export const authErrors = {
    INVALID_LOGIN_CREDENTIALS: "auth/invalid-credential",
    CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
    EMAIL_EXISTS: "auth/email-already-in-use",
    INTERNAL_ERROR: "auth/internal-error",
    INVALID_API_KEY: "auth/invalid-api-key",
    INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
    INVALID_EMAIL: "auth/invalid-email",
    INVALID_PASSWORD: "auth/wrong-password",
    REJECTED_CREDENTIAL: "auth/rejected-credential",
    TIMEOUT: "auth/timeout",
    USER_DELETED: "auth/user-not-found",
    WEAK_PASSWORD: "auth/weak-password",
    TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests"

}