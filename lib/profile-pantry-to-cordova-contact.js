const {
    clone,
    map,
    startCase,
    toLower
} = require('lodash');
const cordovaContactType = require('./cordova-contact-type');
const nullCordovaContact = require('./null-cordova-contact');
const WORK = 'work';
const contactUrls = require('./contact-urls');



/**
 * Assign ContactAddresses.
 *
 * @private
 * @param {Contact} contact       Cordova Contact
 * @param {object} profilePantry Profile Pantry
 *
 * @returns {void}
 */
const assignAddresses = (contact, profilePantry) => {
    const GEO_ADDR_WORK = cordovaContactType.geographic.WORK;
    contact.addresses[GEO_ADDR_WORK].type =
        cordovaContactType.geographic[cordovaContactType.geographic.WORK];
    contact.addresses[GEO_ADDR_WORK].country = profilePantry.workCountry;
    contact.addresses[GEO_ADDR_WORK].formatted = `${profilePantry.workStreet} ${profilePantry.mailCode}, ${profilePantry.workCity}, ${profilePantry.workState} ${profilePantry.workPostalCode} ${profilePantry.workCountry}`;
    contact.addresses[GEO_ADDR_WORK].locality = profilePantry.workCity;
    contact.addresses[GEO_ADDR_WORK].postalCode = profilePantry.workPostalCode;
    contact.addresses[GEO_ADDR_WORK].pref = true;
    contact.addresses[GEO_ADDR_WORK].region = profilePantry.workState;
    contact.addresses[GEO_ADDR_WORK].streetAddress = `${profilePantry.workStreet} ${profilePantry.mailCode}`;
};

/**
 * Assign Verizon identifiers.
 *
 * @private
 * @param {Contact} contact       Cordova Contact
 * @param {object} profilePantry Profile Pantry
 *
 * @returns {void}
 */
const assignCategories = (contact, profilePantry) => {
    const EID = cordovaContactType.id.ENTERPRISE_ID;
    const EID_MANAGER = cordovaContactType.id.ENTERPRISE_ID_MANAGER;
    const EID_DIRECT_REPORTS = cordovaContactType.id.ENTERPRISE_ID_DIRECT_REPORTS;
    contact.categories[EID].pref = true;
    contact.categories[EID].type = cordovaContactType.id[EID];
    contact.categories[EID].value = profilePantry.vzeid;
    contact.categories[EID_MANAGER].type = cordovaContactType.id[EID_MANAGER];
    contact.categories[EID_MANAGER].value = profilePantry.managerEid;
    contact.categories[EID_DIRECT_REPORTS].type = cordovaContactType.id[EID_DIRECT_REPORTS];
    contact.categories[EID_DIRECT_REPORTS].value = profilePantry.directReportsEIDs || [];
};

/**
 * Assign Verizon work emails.
 *
 * @private
 * @param {Contact} contact       Cordova Contact
 * @param {object} profilePantry Profile Pantry
 *
 * @returns {void}
 */
const assignEmails = (contact, profilePantry) => {
    const INTERNAL = cordovaContactType.email.WORK_INTERNAL;
    const EXTERNAL = cordovaContactType.email.WORK_EXTERNAL;
    contact.emails[INTERNAL].type = cordovaContactType.email[INTERNAL];
    contact.emails[INTERNAL].value = profilePantry.internalEmail;
    contact.emails[EXTERNAL].pref = true;
    contact.emails[EXTERNAL].type = cordovaContactType.email[EXTERNAL];
    contact.emails[EXTERNAL].value = profilePantry.externalEmail;
};

/**
 * Assign a ContactName
 *
 * @private
 * @param {Contact} contact       Cordova Contact
 * @param {object} profilePantry Profile Pantry
 *
 * @returns {void}
 */
const assignName = (contact, profilePantry) => {
    contact.name.familyName = profilePantry.lastName;
    contact.name.formatted = profilePantry.fullName;
    contact.name.givenName = profilePantry.firstName;
};

/**
 * Assign a Verizon organization
 *
 * @private
 * @param {Contact} contact       Cordova Contact
 * @param {object} profilePantry Profile Pantry
 *
 * @returns {void}
 */
const assignOrganizations = (contact, profilePantry) => {
    const WORK_ORG = cordovaContactType.org.WORK;
    contact.organizations[WORK_ORG].department = startCase(toLower(profilePantry.financeLobName));
    contact.organizations[WORK_ORG].name = `${profilePantry.treeLobName}, ${profilePantry.organization}`;
    contact.organizations[WORK_ORG].pref = true;
    contact.organizations[WORK_ORG].title = profilePantry.jobTitle;
    contact.organizations[WORK_ORG].type = cordovaContactType.org[WORK_ORG];
};

/**
 * Assign work and mobile phone numbers
 *
 * @private
 * @param {Contact} contact       Cordova Contact
 * @param {object} profilePantry Profile Pantry
 *
 * @returns {void}
 */
const assignPhoneNumbers = (contact, profilePantry) => {
    const WORK_PHONE = cordovaContactType.telecom.WORK;
    const MOBILE_PHONE = cordovaContactType.telecom.MOBILE;
    contact.phoneNumbers[WORK_PHONE].pref = true;
    contact.phoneNumbers[WORK_PHONE].type = cordovaContactType.telecom[WORK_PHONE];
    contact.phoneNumbers[WORK_PHONE].value = profilePantry.officePhoneNumber;
    contact.phoneNumbers[MOBILE_PHONE].type = cordovaContactType.telecom[MOBILE_PHONE];
    contact.phoneNumbers[MOBILE_PHONE].value = profilePantry.mobile;
};

/**
 * Assign employee profile URLs:
 * 1. eDirectory
 * 2. CrowdAround
 * 3. OneJIRA
 * 4. OneConfluence
 * 5. OneStash
 *
 * @private
 * @param {Contact} contact       Cordova Contact
 * @param {object} profilePantry Profile Pantry
 *
 * @returns {void}
 */
const assignUrls = (contact, profilePantry) => {
    contact.urls = map(contactUrls, (url) => {
        url.value = url.value
            .replace('{ID_VZEID}', profilePantry.vzeid)
            .replace('{ID_VZID}', profilePantry.vzid);
        return url;
    });
};

/**
 * Adapts Profile Pantry attributes to the Cordova `Contact` interface.
 * @const
 * @alias cordova-contacts/profilePantryToCordovaContact
 * @requires cordova-contacts/cordovaContactType
 */
const profilePantryToCordovaContact = {

    /**
     * Transform profile pantry `JSON` to a Cordova `Contact` object.
     *
     * @param {object} profilePantry={} Profile Pantry attributes.
     * @param {string=} [profilePantry.birthday=null] The contact's birth month/date, without year.
     * @param {string=} [profilePantry.company=null] The Verizon company code.
     * @param {string=} [profilePantry.directReportsEIDs=null] A comma-delimited string of the contact's direct reports' Enterprise IDs
     * @param {string=} [profilePantry.externalEmail=null] The contact's Verizon external email address.
     * @param {string=} [profilePantry.financeLobName=null] A Verizon Line Of Business name.
     * @param {string=} [profilePantry.firstName=null] The contact's given name.
     * @param {string=} [profilePantry.fullName=null] The contact's fully formatted name.
     * @param {string=} [profilePantry.internalEmail=null] The contact's Verizon-internal email address.
     * @param {string=} [profilePantry.jobTitle=null] The contact's job title.
     * @param {string=} [profilePantry.lastName=null] The contact's family name.
     * @param {string=} [profilePantry.mailCode=null] The contact's mail box.
     * @param {string=} [profilePantry.managerEid=null] The contact's supervisor's Enterprise ID.
     * @param {string=} [profilePantry.mobile=null] The contact's mobile phone number.
     * @param {string=} [profilePantry.nickname=null] The contact's preferred name.
     * @param {string=} [profilePantry.officePhoneNumber=null] The contact's work phone number.
     * @param {string=} [profilePantry.organization=null] The name of the organization in which the contact works.
     * @param {string=} [profilePantry.treeHierarchy=null] The Verizon Enterprise IDs of the contact's supervisor up to the CEO.
     * @param {string=} [profilePantry.treeLobName=null] The contact's Line Of Business abbreviation.
     * @param {string=} [profilePantry.treeLobNumber=null] The contact's Line Of Business's identifier.
     * @param {string=} [profilePantry.vzeid=null] The contact's unique Enterprise ID.
     * @param {string=} [profilePantry.vzid=null] The contact's unique Verizon ID.
     * @param {string=} [profilePantry.workCity=null] The locality in which the contact works.
     * @param {string=} [profilePantry.workCountry=null] The country in which the contact works.
     * @param {string=} [profilePantry.workPostalCode=null] The alphanumeric code that categorizes the contact's geographic area, institution, agency, or company.
     * @param {string=} [profilePantry.workState=null] The region in which the contact works.
     * @param {string=} [profilePantry.workStreet=null] The street on which the contact works.
     * @static
     * @returns {cordova-contacts/Contact} A Cordova `Contact` object.
     */
    adapt: (profilePantry) => {
        const contact = clone(nullCordovaContact);
        contact.birthday = profilePantry.birthday;
        assignAddresses(contact, profilePantry);
        assignCategories(contact, profilePantry);
        contact.displayName = profilePantry.fullName;
        assignEmails(contact, profilePantry);
        assignName(contact, profilePantry);
        contact.nickname = profilePantry.nickname;
        assignOrganizations(contact, profilePantry);
        assignPhoneNumbers(contact, profilePantry);
        assignUrls(contact, profilePantry);
        return contact;
    }
};

module.exports = profilePantryToCordovaContact;
