const { clone, kebabCase } = require('lodash');
const CordovaContactType = require('./cordova-contact-type.enum');
const nullCordovaContact = require('./null-cordova-contact');
const WORK = 'work';
// const nullProfilePantry = require('./null-profile-pantry');


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
  contact.addresses[CordovaContactType.WORK].type = WORK;
  contact.addresses[CordovaContactType.WORK].country = profilePantry.workCountry;
  contact.addresses[CordovaContactType.WORK].formatted = `${profilePantry.workStreet} ${profilePantry.mailCode}, ${profilePantry.workCity}, ${profilePantry.workState} ${profilePantry.workPostalCode} ${profilePantry.workCountry}`;
  contact.addresses[CordovaContactType.WORK].locality = profilePantry.workCity;
  contact.addresses[CordovaContactType.WORK].postalCode = profilePantry.workPostalCode;
  contact.addresses[CordovaContactType.WORK].pref = true;
  contact.addresses[CordovaContactType.WORK].region = profilePantry.workState;
  contact.addresses[CordovaContactType.WORK].streetAddress = `${profilePantry.workStreet} ${profilePantry.mailCode}`;
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
  contact.categories[CordovaContactType.VZEID].pref = true;
  contact.categories[CordovaContactType.VZEID].type = 'id:vzeid';
  contact.categories[CordovaContactType.VZEID].value = profilePantry.vzeid;
  contact.categories[CordovaContactType.VZEID_MANAGER].type = 'id:vzeid:manager';
  contact.categories[CordovaContactType.VZEID_MANAGER].value = profilePantry.managerEid;
  contact.categories[CordovaContactType.VZEID_DIRECT_REPORTS].type = 'id:vzeid:direct-reports';
  contact.categories[CordovaContactType.VZEID_DIRECT_REPORTS].value = profilePantry.directReportsEIDs;
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
  contact.emails[CordovaContactType.WORK_INTERNAL].type = 'work:internal';
  contact.emails[CordovaContactType.WORK_INTERNAL].value = profilePantry.internalEmail;
  contact.emails[CordovaContactType.WORK_EXTERNAL].pref = true;
  contact.emails[CordovaContactType.WORK_EXTERNAL].type = 'work:external';
  contact.emails[CordovaContactType.WORK_EXTERNAL].value = profilePantry.externalEmail;
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
  contact.organizations[CordovaContactType.WORK].department = profilePantry.financeLobName;
  contact.organizations[CordovaContactType.WORK].name = `${profilePantry.treeLobName}, ${profilePantry.organization}`;
  contact.organizations[CordovaContactType.WORK].pref = true;
  contact.organizations[CordovaContactType.WORK].title = profilePantry.jobTitle;
  contact.organizations[CordovaContactType.WORK].type = WORK;
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
  contact.phoneNumbers[CordovaContactType.WORK].pref = true;
  contact.phoneNumbers[CordovaContactType.WORK].type = WORK;
  contact.phoneNumbers[CordovaContactType.WORK].value = profilePantry.officePhoneNumber;
  contact.phoneNumbers[CordovaContactType.MOBILE].type = 'mobile';
  contact.phoneNumbers[CordovaContactType.MOBILE].value = profilePantry.mobile;
};

/**
 * Assign a profile-picture URL.
 *
 * @private
 * @param {Contact} contact       Cordova Contact
 * @param {object} profilePantry Profile Pantry
 *
 * @returns {void}
 */
const assignPhotos = (contact, profilePantry) => {
  contact.photos[CordovaContactType.WORK].pref = true;
  contact.photos[CordovaContactType.WORK].type = "url:profile-picture";
  contact.photos[CordovaContactType.WORK].value = `https://profilepicture.verizon.com/aps/photoap/ImageServlet?eid=${profilePantry.vzeid}`;
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
  const vzeid = profilePantry.vzeid;
  const vzid = profilePantry.vzid;
  contact.urls[CordovaContactType.CROWD_AROUND_PROFILE].type = kebabCase('CROWD_AROUND_PROFILE');
  contact.urls[CordovaContactType.CROWD_AROUND_PROFILE].value = `https://crowdaround.verizon.com/people/${vzeid}`;
  contact.urls[CordovaContactType.E_DIRECTORY_PROFILE].pref = true;
  contact.urls[CordovaContactType.E_DIRECTORY_PROFILE].type = kebabCase('E_DIRECTORY_PROFILE');
  contact.urls[CordovaContactType.E_DIRECTORY_PROFILE].value = `https://edirectory.verizon.com/eDirectory/CorpDirServlet?page=people&eid=${vzeid}`;
  contact.urls[CordovaContactType.ONE_CONFLUENCE_PROFILE].type = kebabCase('ONE_CONFLUENCE_PROFILE');
  contact.urls[CordovaContactType.ONE_CONFLUENCE_PROFILE].value = `https://oneconfluence.verizon.com/display/~${vzid}`;
  contact.urls[CordovaContactType.ONE_JIRA_PROFILE].type = kebabCase('ONE_JIRA_PROFILE');
  contact.urls[CordovaContactType.ONE_JIRA_PROFILE].value = `https://onejira.verizon.com/secure/ViewProfile.jspa?name=${vzid}`;
  contact.urls[CordovaContactType.ONE_STASH_PROFILE].type = kebabCase('ONE_STASH_PROFILE');
  contact.urls[CordovaContactType.ONE_STASH_PROFILE].value = ``;
};

/**
 * Adapts Profile Pantry attributes to the Cordova Contact interface
 * @class
 */
const profilePantry2CordovaContact = {

  /**
   * Transform profile pantry JSON to an Contact object.
   *
   * @param {object} profilePantry Profile Pantry attributes
   *
   * @returns {Contact} A Cordova Contact object.
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
    assignPhotos(contact, profilePantry);
    assignUrls(contact, profilePantry);
    return contact;
  }
};

module.exports = profilePantry2CordovaContact;
