const CordovaContactType = require('./cordova-contact-type');
const profilePantryToCordovaContact = require('./profile-pantry-to-cordova-contact');

module.exports = {
    CordovaContactType: CordovaContactType,
    CordovaContactAdaptor: profilePantryToCordovaContact
};
