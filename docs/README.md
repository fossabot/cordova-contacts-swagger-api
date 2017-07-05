# Javascript callout API docs
[![Quality Gate][sonar-gate-img]][sonar-gate-url] [![Security][sonar-security-img]][sonar-security-url] [![Code smells][sonar-code-smells-img]][sonar-code-smells-url] [![Sonar coverage][sonar-coverage-img]][sonar-coverage-url] [![Duplications][sonar-duplications-img]][sonar-duplications-url]
<br>[![Technical debt][sonar-tech-debt-img]][sonar-tech-debt-url] [![Reliability][sonar-reliability-img]][sonar-reliability-url]  [![Maintainability][sonar-maintainability-img]][sonar-maintainability-url] [![Complexity][sonar-complexity-img]][sonar-complexity-url] [![Cognitive complexity][sonar-cognitive-img]][sonar-cognitive-url] [![Issues][sonar-issues-img]][sonar-issues-url]

---
> [![Swagger Logo](../.github/assets/img/swagger-logo-20.png)](http://swagger.io) The API documentation for a _reference_ Apigee API Proxy that
>
> * Demonstrates best practices for CI/CD quality gates executed during build, test, and deploy automation; and
> * Provides mock data for automated content publication in the Apigee Developer Portal.

## Modules

<dl>
<dt><code><a href="#module_cordova-contacts">cordova-contacts</a></code></dt>
<dd><h4 id="-abcd-arrow_right-iphone-provide-one-s-own-verizon-employee-contact-information-using-the-cordova-contacts-api-https-cordova-apache-org-docs-en-latest-reference-cordova-plugin-contacts-index-html-">:abcd: :arrow_right: :iphone: Provide one&#39;s own Verizon employee contact information using the <a href="https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-contacts/index.html">Cordova Contacts API</a>.</h4>
<p>The Verizon Profile Pantry is a Web service that returns a cached flat-map of
employee attributes that have been</p>
<ol>
<li>Exported from various data sources of truth, e.g., PeopleSoft, CRC, or</li>
<li>Derived from <a href="https://en.wikipedia.org/wiki/MVEL">MVFLEX Expression Language (MVEL)</a>.</li>
</ol>
<p>This Javascript callout module adapts the profile pantry&#39;s attributes to the
Cordova <code>Contact</code> interface.</p>
<blockquote>
<h5 id="-warning-caution-profile-pantry-attributes-are-only-available-to-the-currently-authenticated-user-"><strong>:warning: Caution:</strong> Profile Pantry attributes are only available to the currently authenticated user.</h5>
<p>In other words, you can see your <em>own</em> profile pantry results, but you
cannot see anyone else&#39;s.</p>
</blockquote>
</dd>
</dl>

## Constants

<dl>
<dt><code><a href="#cordova-contacts/Contact">cordova-contacts/Contact</a></code></dt>
<dd><p>The <code>Contact</code> object represents a user&#39;s contact in a form that
<a href="https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-contacts/index.html"><code>cordova-plugin-contacts</code></a>
can immediately use to <em>create</em>, <em>store</em>, or <em>remove</em>
from a mobile device&#39;s native contacts database.</p>
</dd>
<dt><code><a href="#cordova-contacts/profilePantryToCordovaContact">cordova-contacts/profilePantryToCordovaContact</a></code></dt>
<dd><p>Adapts Profile Pantry attributes to the Cordova <code>Contact</code> interface.</p>
</dd>
</dl>


<hr>
<a name="module_cordova-contacts"></a>

<h3><code>cordova-contacts</code></h3>
#### :abcd: :arrow_right: :iphone: Provide one's own Verizon employee contact information using the [Cordova Contacts API](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-contacts/index.html).

The Verizon Profile Pantry is a Web service that returns a cached flat-map of
employee attributes that have been

1. Exported from various data sources of truth, e.g., PeopleSoft, CRC, or
2. Derived from [MVFLEX Expression Language (MVEL)](https://en.wikipedia.org/wiki/MVEL).

This Javascript callout module adapts the profile pantry's attributes to the
Cordova `Contact` interface.

> ##### **:warning: Caution:** Profile Pantry attributes are only available to the currently authenticated user.
>
> In other words, you can see your _own_ profile pantry results, but you
cannot see anyone else's.

**See**: [Your Profile from `profilepantry`](https://profilepantry.verizon.com/profiles/0/allowedServices,alternateManager,basePay,birthday,buildingCode,company,companyCode,compPlanDescr,contractorReportsTo,contractorSupervisorFlag,corpId,crossReports,dataSource,deathBenefit,delegation,dentContribution,directReportEIDs,distinguishedName,domainId,edirDisplay,edirDisplayVzw,edpDeferralPercent,edpDefPsu,edpDefRsu,edpIdpBalance,employeeClass,employeeNumber,employeeStatus,employeeType,erlipGuide,execDeferralPlan,execDeferralPlanEnrolled,exempt,externalEmail,feedBasPreTax,feedBasRoth,feedBBaspstTax,feedBeginBalNonQual,feedBeginBalQual,feedBeneFlag,feedCatchup,feedChgMktValNonQual,feedChgMktValuQual,feedcmytd,feedCoMatch,feedCoProfit,feedEeContYtd,feedLeadWithdraw,feedRepayWithdraw,feedRollover,feedRothCatchup,feedSupPreTax,feedSuppsTax,feedSupRoth,feedVestBalNonQual,feedVestBalQual,feedVestIndNonQual,feedVestIndQual,feedWithdrawNonQual,feedWithdrawQual,feeLoanRepay,fidelityCotribution,fidelityDiscretionaryMatch,fidelityParticipant,financeLobName,financeLobNumber,firstName,fullName,hireDate,homeState,hrDeptId,idpEligible,internalEmail,jiveUser,jobTitle,jobTitleCode,laborAgreementNumber,lastName,legacyOrganization,legacyPersonType,lifeContribution,limitOfLiability,ltiTargetAmt,ltiValue,mailCode,managerEid,managerLevel,medContribution,mellonClosingBalance,mellonEmployeePlan,mellonInterestEarned,mellonOpenBalance,mobile,newHireDomainId,newHireFirstName,newHireHireDate,newHireLastName,nfCarryOverHrsBalance,nickname,nonQualifiedCashBal,nonQualifiedCashBal2,nonQualifiedCashBal3,nonQualifiedCashBal4,notesDn,numPerformStockUnit,numRestrictedStockUnit,officePhoneNumber,officialJobTitle,onboardingDirectReports,optionsExercisable,organization,outstandingOptions,payrollCountry,peliParticipant,pensionPlanCode,pensionPlanCode2,pensionPlanCode3,pensionPlanCode4,performStockUnitValue,perhiresWorkCountry,perHrsBalance,perHrsUsed,permanentGrade,permanentManagerLevel,permDeptFunction,personnelSubArea,prehiresCompanyCode,prehiresDomainId,prehiresInternalEmail,prehiresJobTitleCode,prehiresLegacyOrg,prehiresLegacyPersonType,prehiresManagerLevel,prehiresPrimaryDomain,prehiresVzeid,primaryDomain,psFullName,qualifiedCashBal,qualifiedCashBal2,qualifiedCashBal3,qualifiedCashBal4,restrictedStockUnitValue,restrictedStockValue,rothBasicPercentNx,rothCatchupPercentNx,rothSuppPercentNx,salaryGrade,salesAnnualRates,salesCalendarYears,salesCommissionsPaid,salesEmployee,salesIncentive,salesSTIActualAmounts,salesSTITargetAmounts,salesTargetCommissions,salesTargetMBOs,serviceDate,stiDeferralPercent,stiPlanAmount,stiPlanPercentOfBase,stiValue,subOrganization,supervisor,temporaryGrade,temporaryIncreaseAmt,totalTargetCompensation,treeHierarchy,treeLobName,treeLobNumber,tuitionAnnualCap,tuitionReimbursedAmt,vacAnnualEligibility,vacHrsBalance,vacHrsUsed,valueOptionsExercisable,valueOutstandingOptions,velipParticipant,velipPremium,vipPercent,vipTarget,vPerOrg,vz401kCont,vzbGrade,vzEdpCont,vzEdpStiPlanMatch,vzeid,vzid,vztPersonalHoursRemainingBalance,vztPersonalHoursStartingBalance,vztPersonalHoursUsedYTD,vztPersonalNonforfeitableHours,vztVacationCurrentYearMaxAccrual,vztVacationEarned,vztVacationHoursAccruedYTD,vztVacationHoursStartingBalance,vztVacationHoursUsedYTD,vztVacationNonforfeitableHours,vztVacationRemainingAccruableHours,vztVacationRemainingAccruedHours,vzVelipCont,vzwPerHrsAvail,vzwPerHrsBalance,vzwPerHrsUsed,vzwVacAnnualEligibility,vzwVacHrsBalance,vzwVacHrsUsed,vzwVacMaxAccrualHrs,workCity,workCountry,workPostalCode,workState,workStreet,ytr401kBalance,ytr401kBasicAfterTax,ytr401kBasicBeforeTax,ytr401kCatchup,ytr401kSuppAfterTax,ytr401kSuppBeforeTax,ytrCompanyCode,ytrHireDate,ytrPermanentGrade)  
**Author**: Greg Swindle <gregory.jay.swindle@verizon.com>  

<hr>
<a name="ContactAddress"></a>

<h3><code>ContactAddress</code></h3>
The `ContactAddress` object stores the properties of a single address of a
contact. A Contact object may include more than one address in a
`ContactAddress[]` array.

**Kind**: global ContactAddress  
**Access**: protected  
**See**: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-contacts/index.html#contactaddress  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| country | <code>string</code> | The country name. |
| formatted | <code>string</code> | The full address formatted for display. |
| locality | <code>string</code> | The city or locality. |
| postalCode | <code>string</code> | The zip or postal code. |
| pref | <code>boolean</code> | Set to true if this ContactAddress contains the user's preferred value. |
| region | <code>string</code> | The state or region. |
| streetAddress | <code>string</code> | The full street address. |
| type | <code>string</code> | A string indicating what type of field this is, e.g., "work". |


<hr>
<a name="ContactField"></a>

<h3><code>ContactField</code></h3>
The `ContactField` object is a reusable component that represents contact
fields generically. Each `ContactField` object contains a `value`, `type`,
and `pref` property. A Contact object stores several properties in
`ContactField[]` arrays, such as phone numbers and email addresses.

In most instances, there are no pre-determined values for a ContactField
object's type attribute. For example, a phone number can specify type values
of home, work, mobile, iPhone, or any other value that is supported by a
particular device platform's contact database. However, for the `Contact`
photos field, the type field indicates the format of the returned image: url
when the value attribute contains a URL to the photo image, or base64 when
the value contains a base64-encoded image string.

**Kind**: global ContactField  
**Access**: protected  
**See**: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-contacts/index.html#contactfield  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| pref | <code>boolean</code> | Set to `true` if this `ContactField` contains the user's preferred value. |
| type | <code>string</code> | A string that indicates what type of field this is, e.g., "work". |
| value | <code>string</code> | The value of the field, such as a phone number or email address. |


<hr>
<a name="ContactName"></a>

<h3><code>ContactName</code></h3>
Contains different kinds of information about a `Contact` object's name.

**Kind**: global ContactName  
**Access**: protected  
**See**: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-contacts/index.html#contactname  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| familyName | <code>string</code> | The contact's last name/surname. |
| formatted | <code>string</code> | The complete name of the contact. |
| givenName | <code>string</code> | The contact's first name/forename. |
| honorificPrefix | <code>string</code> | The contact's prefix (example _Ms._ or _Dr._). |
| honorificSuffix | <code>string</code> | The contact's suffix (example Esq. or _III_). |
| middleName | <code>string</code> | The contact's middle name. |


<hr>
<a name="ContactOrganization"></a>

<h3><code>ContactOrganization</code></h3>
The `ContactOrganization` object stores a contact's organization properties.
A `Contact` object stores one or more `ContactOrganization` objects in an
array.

**Kind**: global ContactOrganization  
**Access**: protected  
**See**: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-contacts/index.html#contactorganization  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| department | <code>string</code> | The department the contract works for. |
| name | <code>string</code> | The name of the organization. |
| pref | <code>boolean</code> | Set to true if this ContactOrganization contains the user's preferred value. |
| title | <code>string</code> | The contact's title at the organization. |
| type | <code>string</code> | A string that indicates what type of field this is, e.g., "work". |


<hr>
<a name="cordova-contacts/cordovaContactType"></a>

<h3><code>cordova-contacts/cordovaContactType : <code>enum</code></code></h3>
An enum that specificies the kinds of contact information and avoids "magic numbers" during interface adaption/transformation.

**Kind**: global enum  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| CROWD_AROUND_PROFILE | <code>number</code> | <code>1</code> | 
| E_DIRECTORY_PROFILE | <code>number</code> | <code>0</code> | 
| MOBILE | <code>number</code> | <code>1</code> | 
| ONE_CONFLUENCE_PROFILE | <code>number</code> | <code>3</code> | 
| ONE_JIRA_PROFILE | <code>number</code> | <code>2</code> | 
| ONE_STASH_PROFILE | <code>number</code> | <code>4</code> | 
| VZEID_DIRECT_REPORTS | <code>number</code> | <code>2</code> | 
| VZEID_MANAGER | <code>number</code> | <code>1</code> | 
| VZEID | <code>number</code> | <code>0</code> | 
| VZID | <code>number</code> | <code>0</code> | 
| WORK_EXTERNAL | <code>number</code> | <code>0</code> | 
| WORK_INTERNAL | <code>number</code> | <code>1</code> | 
| WORK | <code>number</code> | <code>0</code> | 


<hr>
<a name="cordova-contacts/Contact"></a>

<h3><code>cordova-contacts/Contact</code></h3>
The `Contact` object represents a user's contact in a form that
[`cordova-plugin-contacts`](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-contacts/index.html)
can immediately use to _create_, _store_, or _remove_
from a mobile device's native contacts database.

**Kind**: global constant  
**See**: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-contacts/index.html#contact  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | A globally unique identifier set by a mobile device. <br> <br> **:warning: Do not use `id` to store user-defined values.** The `id` property should _never_ by used to store a value, as each mobile device overwrites it with a UUID. |
| addresses | [<code>array.&lt;ContactAddress&gt;</code>](#ContactAddress) | An array of all the contact's addresses. |
| birthday | <code>string</code> | The Contact's birth month/date. <br> <br> **:warning: `birthday` does not include the birth year.** |
| categories | [<code>array.&lt;ContactField&gt;</code>](#ContactField) | An array of all the user-defined categories associated with the contact. The Verizon implementation displays the Verizon Enterprise ID of the: <br> <ul> <li> `Contact` itself; <li> `Contact`'s direct reports (if any); and <li> `Contact`'s supervisor. <br> <br> |
| displayName | <code>string</code> | The name of this Contact, suitable for display to end users. |
| emails | [<code>array.&lt;ContactField&gt;</code>](#ContactField) | An array of all the contact's email addresses. |
| ims | [<code>array.&lt;ContactField&gt;</code>](#ContactField) | An array of all the contact's Instant Message (IM) addresses. |
| name | [<code>ContactName</code>](#ContactName) | An object containing all components of a persons name. |
| nickname | <code>string</code> | A casual name by which to address the contact. |
| note | <code>string</code> | A note/bio about the contact. |
| organizations | [<code>array.&lt;ContactOrganization&gt;</code>](#ContactOrganization) | An array of all the contact's organizations. |
| phoneNumbers | [<code>array.&lt;ContactField&gt;</code>](#ContactField) | An array of all the contact's phone numbers. |
| urls | [<code>array.&lt;ContactField&gt;</code>](#ContactField) | An array of web pages associated with the contact. |


<hr>
<a name="cordova-contacts/profilePantryToCordovaContact"></a>

<h3><code>cordova-contacts/profilePantryToCordovaContact</code></h3>
Adapts Profile Pantry attributes to the Cordova `Contact` interface.

**Kind**: global constant  
**Requires**: <code>module:cordova-contacts/cordovaContactType</code>  

<hr>
<a name="cordova-contacts/profilePantryToCordovaContact.adapt"></a>

<h3><code>cordova-contacts/profilePantryToCordovaContact.adapt(profilePantry) ⇒ [<code>cordova-contacts/Contact</code>](#cordova-contacts/Contact)</code></h3>
Transform profile pantry `JSON` to a Cordova `Contact` object.

**Kind**: static method of [<code>cordova-contacts/profilePantryToCordovaContact</code>](#cordova-contacts/profilePantryToCordovaContact)  
**Returns**: [<code>cordova-contacts/Contact</code>](#cordova-contacts/Contact) - A Cordova `Contact` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| profilePantry | <code>object</code> | <code>{}</code> | Profile Pantry attributes. |
| [profilePantry.birthday] | <code>string</code> | <code>null</code> | The contact's birth month/date, without year. |
| [profilePantry.company] | <code>string</code> | <code>null</code> | The Verizon company code. |
| [profilePantry.directReportsEIDs] | <code>string</code> | <code>null</code> | A comma-delimited string of the contact's direct reports' Enterprise IDs |
| [profilePantry.externalEmail] | <code>string</code> | <code>null</code> | The contact's Verizon external email address. |
| [profilePantry.financeLobName] | <code>string</code> | <code>null</code> | A Verizon Line Of Business name. |
| [profilePantry.firstName] | <code>string</code> | <code>null</code> | The contact's given name. |
| [profilePantry.fullName] | <code>string</code> | <code>null</code> | The contact's fully formatted name. |
| [profilePantry.internalEmail] | <code>string</code> | <code>null</code> | The contact's Verizon-internal email address. |
| [profilePantry.jobTitle] | <code>string</code> | <code>null</code> | The contact's job title. |
| [profilePantry.lastName] | <code>string</code> | <code>null</code> | The contact's family name. |
| [profilePantry.mailCode] | <code>string</code> | <code>null</code> | The contact's mail box. |
| [profilePantry.managerEid] | <code>string</code> | <code>null</code> | The contact's supervisor's Enterprise ID. |
| [profilePantry.mobile] | <code>string</code> | <code>null</code> | The contact's mobile phone number. |
| [profilePantry.nickname] | <code>string</code> | <code>null</code> | The contact's preferred name. |
| [profilePantry.officePhoneNumber] | <code>string</code> | <code>null</code> | The contact's work phone number. |
| [profilePantry.organization] | <code>string</code> | <code>null</code> | The name of the organization in which the contact works. |
| [profilePantry.treeHierarchy] | <code>string</code> | <code>null</code> | The Verizon Enterprise IDs of the contact's supervisor up to the CEO. |
| [profilePantry.treeLobName] | <code>string</code> | <code>null</code> | The contact's Line Of Business abbreviation. |
| [profilePantry.treeLobNumber] | <code>string</code> | <code>null</code> | The contact's Line Of Business's identifier. |
| [profilePantry.vzeid] | <code>string</code> | <code>null</code> | The contact's unique Enterprise ID. |
| [profilePantry.vzid] | <code>string</code> | <code>null</code> | The contact's unique Verizon ID. |
| [profilePantry.workCity] | <code>string</code> | <code>null</code> | The locality in which the contact works. |
| [profilePantry.workCountry] | <code>string</code> | <code>null</code> | The country in which the contact works. |
| [profilePantry.workPostalCode] | <code>string</code> | <code>null</code> | The alphanumeric code that categorizes the contact's geographic area, institution, agency, or company. |
| [profilePantry.workState] | <code>string</code> | <code>null</code> | The region in which the contact works. |
| [profilePantry.workStreet] | <code>string</code> | <code>null</code> | The street on which the contact works. |

---


[sonar-code-smells-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-cordova-contacts-swagger-api&metric=code_smells
[sonar-code-smells-url]: https://sonarcloud.io/component_measures/metric/code_smells/list?id=gregswindle-cordova-contacts-swagger-api
[sonar-cognitive-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-cordova-contacts-swagger-api&metric=cognitive_complexity
[sonar-cognitive-url]: https://sonarcloud.io/component_measures/metric/cognitive_complexity/list?id=gregswindle-cordova-contacts-swagger-api
[sonar-complexity-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-cordova-contacts-swagger-api&metric=function_complexity
[sonar-complexity-url]: https://sonarcloud.io/component_measures/domain/Complexity?id=gregswindle-cordova-contacts-swagger-api
[sonar-coverage-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-cordova-contacts-swagger-api&metric=coverage
[sonar-coverage-url]: https://sonarcloud.io/component_measures/domain/Coverage?id=gregswindle-cordova-contacts-swagger-api
[sonar-duplications-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-cordova-contacts-swagger-api&metric=duplicated_line_density
[sonar-duplications-url]: https://sonarcloud.io/component_measures/domain/Duplications?id=gregswindle-cordova-contacts-swagger-api
[sonar-gate-img]: http://sonarcloud.io/api/badges/gate?key=gregswindle-cordova-contacts-swagger-api
[sonar-gate-url]: http://sonarcloud.io/dashboard/index/gregswindle-cordova-contacts-swagger-api
[sonar-issues-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-cordova-contacts-swagger-api&metric=blocker_violations
[sonar-issues-url]: https://sonarcloud.io/component_measures/domain/Issues?id=gregswindle-cordova-contacts-swagger-api
[sonar-maintainability-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-cordova-contacts-swagger-api&metric=new_maintainability_rating
[sonar-maintainability-url]: https://sonarcloud.io/component_measures/domain/Maintainability?id=gregswindle-cordova-contacts-swagger-api
[sonar-reliability-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-cordova-contacts-swagger-api&metric=new_reliability_rating
[sonar-reliability-url]: https://sonarcloud.io/component_measures/domain/Reliability?id=gregswindle-cordova-contacts-swagger-api
[sonar-security-img]: http://sonarcloud.io/api/badges/measure?key=gregswindle-cordova-contacts-swagger-api&metric=vulnerabilities
[sonar-security-url]: https://sonarcloud.io/component_measures/domain/Security?id=gregswindle-cordova-contacts-swagger-api
[sonar-tech-debt-img]:  https://sonarcloud.io/api/badges/measure?key=gregswindle-cordova-contacts-swagger-api&metric=sqale_debt_ratio
[sonar-tech-debt-url]: https://sonarcloud.io/component_measures/metric/sqale_index/list?id=gregswindle-cordova-contacts-swagger-api
