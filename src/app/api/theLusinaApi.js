/**
 * @author lusinabrian on 08/10/17.
 * @notes: API that handles network calls to external services
 */
import axios from "axios";

/**
 * send form data function, this will return a promise that the call side should either
 * Resolve or Reject
 * @param {Object} formData form data object containing sender email, name and message
 * */
export function sendFormDataApi(formData){
    return axios.post("https://formspree.io/lusinabrian@gmail.com", formData);
}