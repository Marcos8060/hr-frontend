//------------------------ Backend APIs ----------------------//
export const API_URL = {


    /***************** AUTHENTICATION APIS **********************/
    LOGIN: 'http://localhost:3000/api/login',
    

    /***************** PROFILE APIS **********************/
    FETCH_PROFILE_DETAILS: 'http://localhost:3000/api/get-profile',
    UPDATE_PROFILE_DETAILS: 'http://localhost:3000/api/update-profile',
    

   

}


//------------------------ Application APIs ----------------------//
export const APP_API_URL = {

    /***************** AUTH **********************/
    LOGIN: '/api/login',

    /***************** PROFILE **********************/
    FETCH_PROFILE_DETAILS: '/api/profile/get-profile',
    UPDATE_PROFILE_DETAILS: '/api/profile/update-profile',


   
}

export const API_METHODS = {
    GET:'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
