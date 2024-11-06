//------------------------ Backend APIs ----------------------//
export const API_URL = {


    /***************** AUTHENTICATION APIS **********************/
    LOGIN: 'http://localhost:3000/api/login',
    

    /***************** PROFILE APIS **********************/
    FETCH_PROFILE_DETAILS: 'http://localhost:3000/api/get-profile',
    ADD_PROFILE_DETAILS: 'http://localhost:3000/api/create-profile',
    UPDATE_PROFILE_DETAILS: 'http://localhost:3000/api/update-profile',


    /***************** USERS APIS **********************/
    FETCH_USERS: 'http://localhost:3000/api/users',

   

}


//------------------------ Application APIs ----------------------//
export const APP_API_URL = {

    /***************** AUTH **********************/
    LOGIN: '/api/login',

    /***************** PROFILE **********************/
    FETCH_PROFILE_DETAILS: '/api/profile/get-profile',
    ADD_PROFILE_DETAILS: '/api/profile/create-profile',
    UPDATE_PROFILE_DETAILS: '/api/profile/update-profile',


    /***************** USERS **********************/
    FETCH_USERS: '/api/users/fetch-users',
   
}

export const API_METHODS = {
    GET:'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
