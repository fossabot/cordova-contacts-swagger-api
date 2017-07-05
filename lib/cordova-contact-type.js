const email = {};
(function (email) {
    email.WORK_EXTERNAL = 0;
    email[email.WORK_EXTERNAL] = 'WORK_EXTERNAL';
    email.WORK_INTERNAL = 1;
    email[email.WORK_INTERNAL] = 'WORK_INTERNAL';
}(email));
const geographic = {};
(function (geographic) {
    geographic.WORK = 0;
    geographic[geographic.WORK] = 'WORK';
}(geographic));
const telecom = {};
(function (telecom) {
    telecom.WORK = 0;
    telecom[telecom.WORK] = 'WORK';
    telecom.MOBILE = 1;
    telecom[telecom.MOBILE] = 'MOBILE';
}(telecom));
const url = {};
(function (url) {
    url.E_DIRECTORY_PROFILE = 0;
    url[url.E_DIRECTORY_PROFILE] = 'E_DIRECTORY_PROFILE';
    url.CROWD_AROUND_PROFILE = 1;
    url[url.CROWD_AROUND_PROFILE] = 'CROWD_AROUND_PROFILE';
    url.ONE_JIRA_PROFILE = 2;
    url[url.ONE_JIRA_PROFILE] = 'ONE_JIRA_PROFILE';
    url.ONE_CONFLUENCE_PROFILE = 3;
    url[url.ONE_CONFLUENCE_PROFILE] = 'ONE_CONFLUENCE_PROFILE';
    url.ONE_STASH_PROFILE = 4;
    url[url.ONE_STASH_PROFILE] = 'ONE_STASH_PROFILE';
    url.PROFILE_PICTURE_IMG = 5;
    url[url.PROFILE_PICTURE_IMG] = 'PROFILE_PICTURE_IMG';
}(url));
const category = {};
(function (category) {
    category.WORK = 0;
    category[category.WORK] = 'WORK';
}(category));
const id = {};
(function (id) {
    id.ENTERPRISE_ID = 0;
    id[id.ENTERPRISE_ID] = 'ENTERPRISE_ID';
    id.ENTERPRISE_ID_MANAGER = 1;
    id[id.ENTERPRISE_ID_MANAGER] = 'ENTERPRISE_ID_MANAGER';
    id.ENTERPRISE_ID_DIRECT_REPORTS = 2;
    id[id.ENTERPRISE_ID_DIRECT_REPORTS] = 'ENTERPRISE_ID_DIRECT_REPORTS';
    id.VZID = 3;
    id[id.VZID] = 'VZID';
    id.EMPLOYEE_ID = 4;
    id[id.EMPLOYEE_ID] = 'EMPLOYEE_ID';
    id.ONE_WORLD_ID = 5;
    id[id.ONE_WORLD_ID] = 'ONE_WORLD_ID';
    id.ONE_WORLD_NUMBER = 6;
    id[id.ONE_WORLD_NUMBER] = 'ONE_WORLD_NUMBER';
    id.BADGE_ID = 7;
    id[id.BADGE_ID] = 'BADGE_ID';
}(id));
const org = {};
(function (org) {
    org.WORK = 0;
    org[org.WORK] = 'WORK';
}(org));
/**
 * An enum that specificies the kinds of contact information and avoids
 * "magic numbers" during interface adaption/transformation. Note that
 * `cordovaContactType` provides both numeric and string values, which is
 * useful for JSON serialization and human comprehension:
 * @example <caption>Using numeric and string enumerators</caption>
 * // 1. Get a contact's JIRA Profile URL
 * console.log(cordovaContactType.url.ONE_JIRA_PROFILE);
 * // => 2
 * // 2. Get the human readable string for the enum ONE_JIRA_PROFILE
 * console.log(cordovaContactType.url[cordovaContactType.url.ONE_JIRA_PROFILE]);
 * // => 'ONE_JIRA_PROFILE'
 * // 3. Example (2) above is equivalent to
 * console.log(cordovaContactType.url[2]);
 * // => 'ONE_JIRA_PROFILE'
 *
 * @readonly
 * @alias cordova-contacts/cordovaContactType
 * @enum {number|string}
 * @property {number} cordovaContactType.email.WORK_EXTERNAL=0
 * @property {string} cordovaContactType.email[0]='WORK_EXTERNAL'
 * @property {number} cordovaContactType.email.WORK_INTERNAL=1
 * @property {string} cordovaContactType.email[1]=WORK_INTERNAL
 * @property {number} cordovaContactType.geographic.WORK=0
 * @property {string} cordovaContactType.geographic[0]=WORK
 * @property {number} cordovaContactType.telecom.WORK=0
 * @property {string} cordovaContactType.telecom[0]=WORK
 * @property {number} cordovaContactType.telecom.MOBILE=1
 * @property {string} cordovaContactType.telecom[1]=MOBILE
 * @property {number} cordovaContactType.url.E_DIRECTORY_PROFILE=0
 * @property {string} cordovaContactType.url[0]=E_DIRECTORY_PROFILE
 * @property {number} cordovaContactType.url.CROWD_AROUND_PROFILE=1
 * @property {string} cordovaContactType.url[1]=CROWD_AROUND_PROFILE
 * @property {number} cordovaContactType.url.ONE_JIRA_PROFILE=2
 * @property {string} cordovaContactType.url[2]=ONE_JIRA_PROFILE
 * @property {number} cordovaContactType.url.ONE_CONFLUENCE_PROFILE=3
 * @property {string} cordovaContactType.url[3]=ONE_CONFLUENCE_PROFILE
 * @property {number} cordovaContactType.url.ONE_STASH_PROFILE=4
 * @property {string} cordovaContactType.url[4]=ONE_STASH_PROFILE
 * @property {number} cordovaContactType.url.PROFILE_PICTURE_IMG=5
 * @property {string} cordovaContactType.url[5]=PROFILE_PICTURE_IMG
 * @property {number} cordovaContactType.category.WORK=0
 * @property {string} cordovaContactType.category[0]=WORK
 * @property {number} cordovaContactType.id.ENTERPRISE_ID=0;
 * @property {string} cordovaContactType.id[0]=ENTERPRISE_ID;
 * @property {number} cordovaContactType.id.ENTERPRISE_ID_MANAGER=1;
 * @property {string} cordovaContactType.id[1]=ENTERPRISE_ID_MANAGER;
 * @property {number} cordovaContactType.id.ENTERPRISE_ID_DIRECT_REPORTS=2;
 * @property {string} cordovaContactType.id[2]=ENTERPRISE_ID_DIRECT_REPORTS;
 * @property {number} cordovaContactType.id.VZID=3;
 * @property {string} cordovaContactType.id[3]=VZID;
 * @property {number} cordovaContactType.id.EMPLOYEE_ID=4;
 * @property {string} cordovaContactType.id[4]=EMPLOYEE_ID;
 * @property {number} cordovaContactType.id.ONE_WORLD_ID=5;
 * @property {string} cordovaContactType.id[5]=ONE_WORLD_ID;
 * @property {number} cordovaContactType.id.ONE_WORLD_NUMBER=6;
 * @property {string} cordovaContactType.id[6]=ONE_WORLD_NUMBER;
 * @property {number} cordovaContactType.id.BADGE_ID=7;
 * @property {string} cordovaContactType.id[7]=BADGE_ID;
 * @property {number} cordovaContactType.url.E_DIRECTORY_PROFILE=0;
 * @property {string} cordovaContactType.url[0]=E_DIRECTORY_PROFILE;
 * @property {number} cordovaContactType.url.CROWD_AROUND_PROFILE=1;
 * @property {string} cordovaContactType.url[1]=CROWD_AROUND_PROFILE;
 * @property {number} cordovaContactType.url.ONE_JIRA_PROFILE=2;
 * @property {string} cordovaContactType.url[2]=ONE_JIRA_PROFILE;
 * @property {number} cordovaContactType.url.ONE_CONFLUENCE_PROFILE=3;
 * @property {string} cordovaContactType.url[3]=ONE_CONFLUENCE_PROFILE;
 * @property {number} cordovaContactType.url.ONE_STASH_PROFILE=4;
 * @property {string} cordovaContactType.url[4]=ONE_STASH_PROFILE;
 * @property {number} cordovaContactType.url.PROFILE_PICTURE_IMG=5;
 * @property {string} cordovaContactType.url[5]=PROFILE_PICTURE_IMG;
 * @property {number} cordovaContactType.org.WORK=0;
 * @property {string} cordovaContactType.org[org.WORK]=WORK;
 */
const cordovaContactType = {
    email,
    geographic,
    telecom,
    url,
    category,
    id,
    org
};

module.exports = cordovaContactType;
