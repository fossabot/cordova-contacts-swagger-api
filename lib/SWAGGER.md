Cordova Contacts
================
The `Contact` object represents a user's contact information that the [`cordova-plugin-contacts`](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-contacts/index.html) can use to _create_, _store_, or _remove_ from a mobile device's contacts database.

**:rotating_light:   IMPORTANT Privacy Considerations**
> Collection and use of contact data raises important privacy issues. Your app's privacy policy should declare how it uses contact data and whether it is shared with any other parties. Contact information is considered sensitive because it reveals the people with whom a person communicates. Therefore, in addition to the app's privacy policy, you should strongly consider providing a just-in-time notice before the app accesses or uses contact data, if the device operating system doesn't do so already. That notice should provide the same information noted above, as well as obtaining the user's permission (e.g., by presenting choices for "I agree" and "I decline"). Note that some app marketplaces may require the app to provide a just-in-time notice and obtain the user's permission before accessing contact data. A clear and easy-to-understand user experience surrounding the use of contact data helps avoid user confusion and perceived misuse of contact data.

**Version:** 1.0.0

**Terms of service:**  
https://github.com/gregswindle/cordova-contacts-swagger-api/blob/master/TERMS_OF_SERVICE.md

**Contact information:**  
oneapi-team@verizon.com  

**License:** [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

[Cordova Plugin API for `cordova-plugin-contacts`.](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-contacts/index.html)
### Security
---
**cordova-contacts-auth**  

|oauth2|*OAuth 2.0*|
|---|---|
|Authorization URL|https://oneapi.verizon.com/oauth/cordova-contacts-auth/dialog|
|Flow|implicit|
|**Scopes**||
|read:contacts|Retrieve Verizon employees' contact information|

**api_key**  

|apiKey|*API Key*|
|---|---|
|Name|api_key|
|In|header|

### /contacts/me
---
##### ***GET***
**Summary:** Retrieve one's own Contact information.

**Description:** Returns one's own Contact information.

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Contact](#contact) |
| 404 | Not found | [ErrorResponse](#errorResponse) |

**Security**

| Security Schema | Scopes |
| --- | --- |
| api_key | |

### /contacts/{id}
---
##### ***GET***
**Summary:** Retrieve an active Verizon employee's Contact information.

**Description:** Retrieve an active Verizon employee's Contact information by a (registered) identifier.

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| type | query | The specific kind of identifier provided. If omitted, `type` defaults to `eid` (Enterprise ID). Otherwise you can specify `emplid` (Employee ID) or `vzid` (Verizon ID). | No | string |
| id | path | A registered identifier value for an active Verizon employee. | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Contact](#contact) |
| 404 | Not found | [ErrorResponse](#errorResponse) |

**Security**

| Security Schema | Scopes |
| --- | --- |
| api_key | |

### Models
---

<a name="contactField"></a>**ContactField**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | string | The value of the field, such as a phone number or email address. | Yes |
| type | string | A string that indicates what type of field this is, e.g., "work". | Yes |
| pref | boolean | Set to true if this ContactField contains the user's preferred value. | Yes |

<a name="contactName"></a>**ContactName**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| formatted | string | The complete name of the contact. | No |
| familyName | string | The contact's last name/surname. | No |
| givenName | string | The contact's first name/forename. | No |
| middleName | string | The contact's middle name(s). | No |
| honorificPrefix | string | The contact's prefix (e.g., Ms. or Dr.). | No |
| honorificSuffix | string | The contact's suffix (e.g., Esq. or III). | No |

<a name="contactAddress"></a>**ContactAddress**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| pref | boolean | Set to `true` if this `ContactAddress` contains the user's preferred value. | No |
| type | string | A string indicating what type of field this is, e.g., "work". | No |
| formatted | string | The full address formatted for display. | No |
| streetAddress | string | The full street address. | No |
| locality | string | The city or locality. | No |
| region | string | The state or region. | No |
| postalCode | string | The zip or postal code. | No |
| country | string | The country name. | No |

<a name="contactOrganization"></a>**ContactOrganization**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| pref | boolean | Set to `true` if this `ContactOrganization` contains the user's preferred value. | No |
| type | string | A string that indicates what type of field this is, e.g., "work". | No |
| name | string | The name of the organization. | No |
| department | string | The department the contract works for. | No |
| title | string | The contact's title at the organization. | No |

<a name="contact"></a>**Contact**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string | A globally unique identifier set by a mobile device. ⚠️ Do not use id to store user-defined values. The id property should never by used to store a value, as each mobile device overwrites it with a UUID. | No |
| addresses | [ [ContactAddress](#contactAddress) ] | An array of the contact's addresses. | No |
| birthday | date | The Contact's birth month/date. ⚠️  `birthday` does not include the birth year. | No |
| categories | [ [ContactField](#contactField) ] | An `array` of all the user-defined categories associated with the contact. The Verizon implementation displays the Verizon Enterprise ID of the:     Contact itself; Contact's direct reports (if any); and Contact's supervisor.  | No |
| displayName | string | The name of this `Contact`, suitable for display to end users. | No |
| emails | [ [ContactField](#contactField) ] | An array of the contact's email addresses. | No |
| ims | [ [ContactField](#contactField) ] | An `array` of the contact's Instant Message (IM) addresses. | No |
| name | [ContactName](#contactName) | An object containing all components of a persons name. | No |
| nickname | string | A casual or preferred name by which to address the contact. | No |
| note | string | A note/bio about the contact. | No |
| organizations | [ [ContactOrganization](#contactOrganization) ] | An array of the contact's organizations. | No |
| phoneNumbers | [ [ContactField](#contactField) ] |  | No |
| photos | [ [ContactField](#contactField) ] | An array of the contact's phone numbers. | No |
| urls | [ [ContactField](#contactField) ] | An array of web pages associated with the contact. | No |

<a name="errorResponse"></a>**ErrorResponse**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| fault | object |  | No |