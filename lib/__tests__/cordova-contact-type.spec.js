/*eslint  filenames/match-regex: ["off", 1]*/
const {
    CordovaContactType
} = require('../index');

describe('CordovaContactType is an enum with variables for', () => {

    it('CROWD_AROUND_PROFILE', () => {
        expect(CordovaContactType.CROWD_AROUND_PROFILE).toBeDefined();
    });

    it('E_DIRECTORY_PROFILE', () => {
        expect(CordovaContactType.E_DIRECTORY_PROFILE).toBeDefined();
    });

    it('MOBILE', () => {
        expect(CordovaContactType.MOBILE).toBeDefined();
    });

    it('ONE_JIRA_PROFILE', () => {
        expect(CordovaContactType.ONE_JIRA_PROFILE).toBeDefined();
    });

    it('ONE_STASH_PROFILE', () => {
        expect(CordovaContactType.ONE_STASH_PROFILE).toBeDefined();
    });

    it('VZEID', () => {
        expect(CordovaContactType.VZEID).toBeDefined();
    });

    it('VZID', () => {
        expect(CordovaContactType.VZID).toBeDefined();
    });

    it('VZEID_DIRECT_REPORTS', () => {
        expect(CordovaContactType.VZEID_DIRECT_REPORTS).toBeDefined();
    });

    it('VZEID_MANAGER', () => {
        expect(CordovaContactType.VZEID_MANAGER).toBeDefined();
    });

    it('WORK', () => {
        expect(CordovaContactType.WORK).toBeDefined();
    });

    it('WORK_EXTERNAL', () => {
        expect(CordovaContactType.WORK_EXTERNAL).toBeDefined();
    });

    it('WORK_INTERNAL', () => {
        expect(CordovaContactType.WORK_INTERNAL).toBeDefined();
    });
});
