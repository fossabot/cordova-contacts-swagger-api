/*eslint  filenames/match-regex: ["off", 1]*/
const {
    cordovaContactType
} = require('../cordova-contacts');

describe('cordovaContactType is an enum with variables for', () => {

    describe('email addressesses', () => {
        it('WORK_EXTERNAL', () => {
            expect(cordovaContactType.email.WORK_EXTERNAL).toBeDefined();
            expect(cordovaContactType.email[cordovaContactType.email.WORK_EXTERNAL]).toBe('WORK_EXTERNAL');
        });

        it('WORK_INTERNAL', () => {
            expect(cordovaContactType.email.WORK_INTERNAL).toBeDefined();
            expect(cordovaContactType.email[cordovaContactType.email.WORK_INTERNAL]).toBe('WORK_INTERNAL');
        });
    });

    describe('geograpic addressesses', () => {
        it('WORK', () => {
            expect(cordovaContactType.geographic.WORK).toBeDefined();
            expect(cordovaContactType.geographic[cordovaContactType.geographic.WORK]).toBe('WORK');
        });
    });

    describe('telecom addressesses', () => {
        it('WORK', () => {
            expect(cordovaContactType.telecom.WORK).toBeDefined();
            expect(cordovaContactType.telecom[cordovaContactType.telecom.WORK]).toBe('WORK');
        });

        it('MOBILE', () => {
            expect(cordovaContactType.telecom.MOBILE).toBeDefined();
            expect(cordovaContactType.telecom[cordovaContactType.telecom.MOBILE]).toBe('MOBILE');
        });
    });

    describe('URL addressesses', () => {
        it('E_DIRECTORY_PROFILE', () => {
            expect(cordovaContactType.url.E_DIRECTORY_PROFILE).toBeDefined();
            expect(cordovaContactType.url[cordovaContactType.url.E_DIRECTORY_PROFILE]).toBe('E_DIRECTORY_PROFILE');
        });

        it('CROWD_AROUND_PROFILE', () => {
            expect(cordovaContactType.url.CROWD_AROUND_PROFILE).toBeDefined();
            expect(cordovaContactType.url[cordovaContactType.url.CROWD_AROUND_PROFILE]).toBe('CROWD_AROUND_PROFILE');
        });

        it('ONE_JIRA_PROFILE', () => {
            expect(cordovaContactType.url.ONE_JIRA_PROFILE).toBeDefined();
            expect(cordovaContactType.url[cordovaContactType.url.ONE_JIRA_PROFILE]).toBe('ONE_JIRA_PROFILE');
        });

        it('ONE_CONFLUENCE_PROFILE', () => {
            expect(cordovaContactType.url.ONE_CONFLUENCE_PROFILE).toBeDefined();
            expect(cordovaContactType.url[cordovaContactType.url.ONE_CONFLUENCE_PROFILE]).toBe('ONE_CONFLUENCE_PROFILE');
        });

        it('ONE_STASH_PROFILE', () => {
            expect(cordovaContactType.url.ONE_STASH_PROFILE).toBeDefined();
            expect(cordovaContactType.url[cordovaContactType.url.ONE_STASH_PROFILE]).toBe('ONE_STASH_PROFILE');
        });

        it('PROFILE_PICTURE_IMG', () => {
            expect(cordovaContactType.url.PROFILE_PICTURE_IMG).toBeDefined();
            expect(cordovaContactType.url[cordovaContactType.url.PROFILE_PICTURE_IMG]).toBe('PROFILE_PICTURE_IMG');
        });

    });

    describe('categories', () => {
        it('WORK', () => {
            expect(cordovaContactType.category.WORK).toBeDefined();
            expect(cordovaContactType.category[cordovaContactType.category.WORK]).toBe('WORK');
        });
    });

    describe('identifiers', () => {
        it('ENTERPRISE_ID', () => {
            expect(cordovaContactType.id.ENTERPRISE_ID).toBeDefined();
            expect(cordovaContactType.id[cordovaContactType.id.ENTERPRISE_ID]).toBe('ENTERPRISE_ID');
        });

        it('ENTERPRISE_ID_MANAGER', () => {
            expect(cordovaContactType.id.ENTERPRISE_ID_MANAGER).toBeDefined();
            expect(cordovaContactType.id[cordovaContactType.id.ENTERPRISE_ID_MANAGER]).toBe('ENTERPRISE_ID_MANAGER');
        });

        it('ENTERPRISE_ID_DIRECT_REPORTS', () => {
            expect(cordovaContactType.id.ENTERPRISE_ID_DIRECT_REPORTS).toBeDefined();
            expect(cordovaContactType.id[cordovaContactType.id.ENTERPRISE_ID_DIRECT_REPORTS]).toBe('ENTERPRISE_ID_DIRECT_REPORTS');
        });

        it('VZID', () => {
            expect(cordovaContactType.id.VZID).toBeDefined();
            expect(cordovaContactType.id[cordovaContactType.id.VZID]).toBe('VZID');
        });

        it('EMPLOYEE_ID', () => {
            expect(cordovaContactType.id.EMPLOYEE_ID).toBeDefined();
            expect(cordovaContactType.id[cordovaContactType.id.EMPLOYEE_ID]).toBe('EMPLOYEE_ID');
        });

        it('ONE_WORLD_ID', () => {
            expect(cordovaContactType.id.ONE_WORLD_ID).toBeDefined();
            expect(cordovaContactType.id[cordovaContactType.id.ONE_WORLD_ID]).toBe('ONE_WORLD_ID');
        });

        it('ONE_WORLD_NUMBER', () => {
            expect(cordovaContactType.id.ONE_WORLD_NUMBER).toBeDefined();
            expect(cordovaContactType.id[cordovaContactType.id.ONE_WORLD_NUMBER]).toBe('ONE_WORLD_NUMBER');
        });

        it('BADGE_ID', () => {
            expect(cordovaContactType.id.BADGE_ID).toBeDefined();
            expect(cordovaContactType.id[cordovaContactType.id.BADGE_ID]).toBe('BADGE_ID');
        });
    });

    describe('organizations', () => {
        it('WORK', () => {
            expect(cordovaContactType.org.WORK).toBeDefined();
            expect(cordovaContactType.org[cordovaContactType.org.WORK]).toBe('WORK');
        });
    });

});
