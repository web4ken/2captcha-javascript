/**
 *  
 * ### Renaming captcha parameters
 * 
 * Description: parameter names used in the API may differ from those used in the library, in such cases parameter names are renamed in accordance with those used in the API.
 * 
 * @param params - captcha parameters as an object
 * @returns returns new object with renamed params
 * 
 */
export default function renameParams(params: any) {
  let newParams: any = new Object();

  /**  
  * Captcha parameters that need to be renamed before sent to the API.
  */
  const replaceParams: any = {
    "cols" : "recaptchacols",
    "rows" : "recaptcharows",
    "minClicks" : "min_clicks",
    "maxClicks" : "max_clicks",
    "canSkip" : "can_no_answer",
    "previousId" : "previousID",
    "imgType" : "img_type"
  }

  for(let key in params) {
    if(replaceParams.hasOwnProperty(key)) {
      newParams[replaceParams[key]] = params[key]
    } else {
      newParams[key] = params[key]
    }
  }

  return newParams
}