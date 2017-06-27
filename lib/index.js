/**
 * A module for adapting Verizon's Profile Pantry attributes to the Cordova `Contact` interface.
 * @author Greg Swindle <gregory.jay.swindle@verizon.com>
 * @module cordova-contacts
 */

/**
 * @ignore
 */
const CordovaContactType = require('./cordova-contact-type');

/**
 * @ignore
 */
const profilePantryToCordovaContact = require('./profile-pantry-to-cordova-contact');

module.exports = {
    CordovaContactType,
    CordovaContactAdaptor: profilePantryToCordovaContact
};
