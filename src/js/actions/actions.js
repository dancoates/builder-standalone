
/**
 *
 * Update info constant
 * @type {string}
 */

export const UPDATE_INFO = 'UPDATE_INFO';


/**
 *
 * The main action used to pass simple data from the form to the store
 * @param {string} name is the name of the field
 * @param {string} data is the data contained in the field
 *
 */

export function updateInfo(name, data) {
    return {
        type : UPDATE_INFO,
        name : name,
        data : data
    };
}