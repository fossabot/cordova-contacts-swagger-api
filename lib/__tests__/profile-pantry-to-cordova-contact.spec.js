/*eslint  filenames/match-regex: ["off", 1]*/
const contactUrls = require('../contact-urls');
const profilePantryEmployee = require('./fixture/7958591962');
const {
    profilePantryToCordovaContact,
    cordovaContactType
} = require('../cordova-contacts');

describe('adapts profile-pantry employee attributes to Cordova Contact attributes, including', () => {
    let contact;

    beforeEach(() => {
        contact = profilePantryToCordovaContact.adapt(profilePantryEmployee);
    });

    afterEach(() => {
        contact = null;
    });

    it('id {string}: A globally unique identifier set by each mobile device', () => {
        expect(contact.id).toBeNull();
    });

    it('addresses {array<ContactAddress>: physical addresses', () => {
        expect(contact.addresses).toBeDefined();
        expect(contact.addresses.length).toBe(1);
        expect(contact.addresses[0].formatted).toBe('700 Hidden Ridge HQW02D66, Irving, TX 75038 USA');
    });

    it('birthday {date}: The month and date of the contact\'s birth', () => {
        expect(contact.birthday).toBe(profilePantryEmployee.birthday);
    });

    it('categories {array<ContactField>}: user-defined categories associated with the contact', () => {
        expect(contact.categories).toBeDefined();
        expect(contact.categories.length).toBe(3);
        expect(contact.categories[0].type).toBe('id:vzeid');
        expect(contact.categories[1].type).toBe('id:vzeid:manager');
        expect(contact.categories[2].type).toBe('id:vzeid:direct-reports');
        expect(contact.categories[2].value).toBeNull();
    });

    it('displayName {string}: The name of this Contact, suitable for display to end users', () => {
        expect(contact.displayName).toBe(profilePantryEmployee.fullName);
    });

    it('emails {array<ContactField>}: The Contact\'s work e-mail addresses', () => {
        expect(contact.emails).toBeDefined();
        expect(contact.emails.length).toBe(2);
        expect(contact.emails[cordovaContactType.WORK_INTERNAL].pref).toBe(false);
        expect(contact.emails[cordovaContactType.WORK_INTERNAL].type).toBe('work:internal');
        expect(contact.emails[cordovaContactType.WORK_EXTERNAL].pref).toBe(true);
        expect(contact.emails[cordovaContactType.WORK_EXTERNAL].type).toBe('work:external');
    });

    it('ims {array<ContactField>}: The Contact\'s instant message addresses', () => {
        expect(contact.ims).toBeDefined();
        expect(contact.ims.length).toBe(0);
    });

    it('name {ContactName}: An object containing all components of a person\'s name', () => {
        expect(contact.name).toBeDefined();
        expect(contact.name.formatted).toBe(profilePantryEmployee.fullName);
        expect(contact.name.familyName).toBe(profilePantryEmployee.lastName);
        expect(contact.name.givenName).toBe(profilePantryEmployee.firstName);
        expect(contact.name.middleName).toBeNull();
        expect(contact.name.honorificPrefix).toBeNull();
        expect(contact.name.honorificSuffix).toBeNull();
    });

    it('nickname {string}: A casual name by which to address the contact', () => {
        expect(contact.nickname).toBeDefined();
        expect(contact.nickname).toBe(profilePantryEmployee.nickname);
    });

    it('note {string}: A note/bio about the contact', () => {
        expect(contact.note).toBeDefined();
        expect(contact.note).toBeNull();
    });

    it('organizations {array<ContactOrganization>}: All the contact\'s organizations', () => {
        expect(contact.organizations).toBeDefined();
        expect(contact.organizations.length).toBe(1);
        expect(contact.organizations[0].id).toBeNull();
        expect(contact.organizations[0].pref).toBe(true);
        expect(contact.organizations[0].type).toBe('work');
        expect(contact.organizations[0].name).toBe('Verizon Corporate, CAO Employee Experience');
        expect(contact.organizations[0].department).toBe('Technology Global');
        expect(contact.organizations[0].title).toBe(profilePantryEmployee.jobTitle);
    });

    it('phoneNumbers {array<ContactField>}: The contact\'s work phone numbers', () => {
        expect(contact.phoneNumbers).toBeDefined();
        expect(contact.phoneNumbers.length).toBe(2);
        expect(contact.phoneNumbers[cordovaContactType.WORK].type).toBe('work');
        expect(contact.phoneNumbers[cordovaContactType.WORK].pref).toBe(true);
        expect(contact.phoneNumbers[cordovaContactType.MOBILE].type).toBe('mobile');
        expect(contact.phoneNumbers[cordovaContactType.MOBILE].pref).toBe(false);
    });

    it('photos {array<ContactField>}: ', () => {
        expect(contact.photos).toBeDefined();
        expect(contact.photos.length).toBe(0);
    });

    it('urls {array<ContactField>}: An array of web pages associated with the contact', () => {
        expect(contact.urls).toBeDefined();
        expect(contact.urls.length).toBe(contactUrls.length);
    });
});
