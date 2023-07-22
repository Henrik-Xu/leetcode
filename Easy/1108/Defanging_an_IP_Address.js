/**
 * Defanging an IP Address
 */
let defangIPaddr = function(address) {
    return address.split('.').join('[.]');
};