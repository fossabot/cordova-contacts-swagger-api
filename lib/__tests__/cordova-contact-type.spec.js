/*eslint  filenames/match-regex: ["off", 1]*/
const {
    cordovaContactType
} = require('../cordova-contacts');

describe('cordovaContactType is an enum with variables for', () => {

    it('CROWD_AROUND_PROFILE', () => {
        expect(cordovaContactType.CROWD_AROUND_PROFILE).toBeDefined();
    });

    it('E_DIRECTORY_PROFILE', () => {
        expect(cordovaContactType.E_DIRECTORY_PROFILE).toBeDefined();
    });

    it('MOBILE', () => {
        expect(cordovaContactType.MOBILE).toBeDefined();
    });

    it('ONE_JIRA_PROFILE', () => {
        expect(cordovaContactType.ONE_JIRA_PROFILE).toBeDefined();
    });

    it('ONE_STASH_PROFILE', () => {
        expect(cordovaContactType.ONE_STASH_PROFILE).toBeDefined();
    });

    it('VZEID', () => {
        expect(cordovaContactType.VZEID).toBeDefined();
    });

    it('VZID', () => {
        expect(cordovaContactType.VZID).toBeDefined();
    });

    it('VZEID_DIRECT_REPORTS', () => {
        expect(cordovaContactType.VZEID_DIRECT_REPORTS).toBeDefined();
    });

    it('VZEID_MANAGER', () => {
        expect(cordovaContactType.VZEID_MANAGER).toBeDefined();
    });

    it('WORK', () => {
        expect(cordovaContactType.WORK).toBeDefined();
    });

    it('WORK_EXTERNAL', () => {
        expect(cordovaContactType.WORK_EXTERNAL).toBeDefined();
    });

    it('WORK_INTERNAL', () => {
        expect(cordovaContactType.WORK_INTERNAL).toBeDefined();
    });
});
