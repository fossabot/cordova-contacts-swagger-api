const { kebabCase } = require('lodash');
const Contact = require('./cordova/contact');
const ContactAddress = require('./cordova/contact-address');
const ContactField = require('./cordova/contact-field');
const ContactName = require('./cordova/contact-name');
const ContactOrganization = require('./cordova/contact-organization');
const contactUrls = require('./contact-urls');
const nullProfilePantry = require('./null-profile-pantry');

/**
 * AssignAddresses - Description
 *
 * @param {type} profilePantry Description
 *
 * @returns {type} Description
 */
function assignAddresses(profilePantry) {
  const addresses = [];
  const pref = true;
  const formattedAddr = `${profilePantry.workStreet} ${profilePantry.mailCode}, ${profilePantry.workCity}, ${profilePantry.workState} ${profilePantry.workPostalCode} ${profilePantry.workCountry}`;
  const workAddress = new ContactAddress(
    pref,
    'work',
    formattedAddr,
    `${profilePantry.workStreet} ${profilePantry.mailCode}`,
    profilePantry.workCity,
    profilePantry.workState,
    profilePantry.workPostalCode,
    profilePantry.workCountry
  );
  addresses.push(workAddress);
  return addresses;
}

/**
 * AssignCategories - Description
 *
 * @param {type} profilePantry Description
 *
 * @returns {type} Description
 */
function assignCategories(profilePantry) {
  const vzeid = new ContactField('id:vzeid', profilePantry.vzeid, true);
  const mgrVzeid = new ContactField('id:vzeid:manager', profilePantry.managerEid, false);
  const directReportsEids = new ContactField('id:vzeid:direct-reports', profilePantry.directReportsEIDs, false);
  return [
    vzeid,
    mgrVzeid,
    directReportsEids
  ];
}

/**
 * AssignEmails - Description
 *
 * @param {type} profilePantry Description
 *
 * @returns {type} Description
 */
function assignEmails(profilePantry) {
  const emails = [];
  const types = ['externalEmail', 'internalEmail'];
  let i;
  let type;
  let pref = false;
  for (i = 0; i < types.length; i++) {
    type = types[i];
    if (profilePantry[type]) {
      pref = type === 'externalEmail';
      emails.push(new ContactField(kebabCase(type), profilePantry[type], pref));
    }
  }
  return emails;
}

/**
 * AssignName - Description
 *
 * @param {type} profilePantry Description
 *
 * @returns {type} Description
 */
function assignName(profilePantry) {
  const name = new ContactName(
    profilePantry.fullName,
    profilePantry.lastName,
    profilePantry.firstName,
    null,
    null,
    profilePantry.generation
  );
  return name;
}

/**
 * AssignOrganizations - Description
 *
 * @param {type} profilePantry Description
 *
 * @returns {type} Description
 */
function assignOrganizations(profilePantry) {
  const pref = true;
  const verizon = new ContactOrganization(
    pref,
    'work',
    `${profilePantry.treeLobName}, ${profilePantry.organization}`,
    profilePantry.financeLobName,
    profilePantry.jobTitle
  );
  const orgs = [
    verizon
  ];
  return orgs;
}

/**
 * AssignPhoneNumbers - Description
 *
 * @param {type} profilePantry Description
 *
 * @returns {type} Description
 */
function assignPhoneNumbers(profilePantry) {
  let i;
  let type;
  let pref = false;
  const phoneNumbers = [];
  const types = [
    'mobile',
    'officePhoneNumber'
  ];
  for (i = 0; i < types.length; i++) {
    type = types[i];
    if (profilePantry[type]) {
      if (type === 'officePhoneNumber') {
        pref = true;
      }
      phoneNumbers.push(new ContactField(kebabCase(type), profilePantry[type], pref));
    }
  }
  return phoneNumbers;
}

/**
 * AssignPhotos - Description
 *
 * @param {type} profilePantry Description
 *
 * @returns {type} Description
 */
function assignPhotos(profilePantry) {
  const photos = [
    new ContactField(`https://profilepicture.verizon.com/aps/photoap/ImageServlet?eid=${profilePantry.vzeid}`, 'profile-picture', true)
  ];
  return photos;
}

/**
 * AssignUrls - Description
 *
 * @param {type} profilePantry Description
 *
 * @returns {type} Description
 */
function assignUrls(profilePantry) {
  const vzeid = profilePantry.vzeid;
  const vzid = profilePantry.vzid;
  const urls = [];
  for (let i = 0; i < contactUrls.length; i++) {
    let url = contactUrls[i];
    let href = url.value.replace('{VZEID}', vzeid).replace('{VZID}', vzid);
    let field = new ContactField(url.type, href, url.pref);
    urls.push(field);
  }
  return urls;
}

const profilePantry2CordovaContact = {
  adapt: function (profilePantry) {
    const p = profilePantry;
    const ims = [];
    const note = null;
    const contact = new Contact(
      p.id,
      p.fullName,
      assignName(p),
      p.nickname,
      assignPhoneNumbers(p),
      assignEmails(p),
      assignAddresses(p),
      ims,
      assignOrganizations(p),
      p.birthday,
      note,
      assignPhotos(p),
      assignCategories(p),
      assignUrls(p)
    );
    return contact;
  }
};

module.exports = profilePantry2CordovaContact;
