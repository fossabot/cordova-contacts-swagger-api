/**
 * An enum that specificies the kinds of contact information and avoids "magic numbers" during interface adaption/transformation.
 *
 * @readonly
 * @alias cordova-contacts/CordovaContactType
 * @enum {number}
 * @property {number} CROWD_AROUND_PROFILE=1
 * @property {number} E_DIRECTORY_PROFILE=0
 * @property {number} MOBILE=1
 * @property {number} ONE_CONFLUENCE_PROFILE=3
 * @property {number} ONE_JIRA_PROFILE=2
 * @property {number} ONE_STASH_PROFILE=4
 * @property {number} VZEID_DIRECT_REPORTS=2
 * @property {number} VZEID_MANAGER=1
 * @property {number} VZEID=0
 * @property {number} VZID=0
 * @property {number} WORK_EXTERNAL=0
 * @property {number} WORK_INTERNAL=1
 * @property {number} WORK=0
 */
const CordovaContactType = {};
(function(CordovaContactType) {
    CordovaContactType[CordovaContactType['CROWD_AROUND_PROFILE'] = 1] = 'CROWD_AROUND_PROFILE';
    CordovaContactType[CordovaContactType['E_DIRECTORY_PROFILE'] = 0] = 'E_DIRECTORY_PROFILE';
    CordovaContactType[CordovaContactType['MOBILE'] = 1] = 'MOBILE';
    CordovaContactType[CordovaContactType['ONE_CONFLUENCE_PROFILE'] = 3] = 'ONE_CONFLUENCE_PROFILE';
    CordovaContactType[CordovaContactType['ONE_JIRA_PROFILE'] = 2] = 'ONE_JIRA_PROFILE';
    CordovaContactType[CordovaContactType['ONE_STASH_PROFILE'] = 4] = 'ONE_STASH_PROFILE';
    CordovaContactType[CordovaContactType['VZEID_DIRECT_REPORTS'] = 2] = 'VZEID_DIRECT_REPORTS';
    CordovaContactType[CordovaContactType['VZEID_MANAGER'] = 1] = 'VZEID_MANAGER';
    CordovaContactType[CordovaContactType['VZEID'] = 0] = 'VZEID';
    CordovaContactType[CordovaContactType['VZID'] = 0] = 'VZID';
    CordovaContactType[CordovaContactType['WORK_EXTERNAL'] = 0] = 'WORK_EXTERNAL';
    CordovaContactType[CordovaContactType['WORK_INTERNAL'] = 1] = 'WORK_INTERNAL';
    CordovaContactType[CordovaContactType['WORK'] = 0] = 'WORK';
}(CordovaContactType));

module.exports = CordovaContactType;
