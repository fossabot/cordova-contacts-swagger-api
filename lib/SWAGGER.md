Cordova Contacts
================
The `Contact` object represents a user's contact information that can be created, stored, or removed from a mobile device's contacts database.

**IMPORTANT Privacy Considerations**

Collection and use of contact data raises important privacy issues. Your app's privacy policy should declare how it uses contact data and whether it is shared with any other parties. Contact information is considered sensitive because it reveals the people with whom a person communicates. Therefore, in addition to the app's privacy policy, you should strongly consider providing a just-in-time notice before the app accesses or uses contact data, if the device operating system doesn't do so already. That notice should provide the same information noted above, as well as obtaining the user's permission (e.g., by presenting choices for OK and No Thanks). Note that some app marketplaces may require the app to provide a just-in-time notice and obtain the user's permission before accessing contact data. A clear and easy-to-understand user experience surrounding the use of contact data helps avoid user confusion and perceived misuse of contact data.

For more information, please see the Privacy Guide.

**Version:** 1.0.0

**Terms of service:**  
https://oneapi.verizon.com/terms-of-service/

**Contact information:**  
oneapi-team@verizon.com  

**License:** [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

[Cordova Plugin API for cordova-plugin-contacts](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-contacts/index.html)
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
**Summary:** Retrieve your own contact info

**Description:** Returns one's own Contact information

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | successful operation | [Contact](#contact) |
| 404 | Contact not found |

**Security**

| Security Schema | Scopes |
| --- | --- |
| api_key | |

### Models
---

<a name="contactField"></a>**ContactField**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| value | string |  | No |
| type | string |  | No |
| perf | boolean |  | No |

<a name="contactName"></a>**ContactName**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| formatted | string |  | No |
| familyName | string |  | No |
| givenName | string |  | No |
| middleName | string |  | No |
| honorificPrefix | string |  | No |
| honorificSuffix | string |  | No |

<a name="contactAddress"></a>**ContactAddress**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| pref | boolean |  | No |
| type | string |  | No |
| formatted | string |  | No |
| streetAddress | string |  | No |
| locality | string |  | No |
| region | string |  | No |
| postalCode | string |  | No |
| country | string |  | No |

<a name="contactOrganization"></a>**ContactOrganization**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| perf | boolean |  | No |
| type | string |  | No |
| name | string |  | No |
| department | string |  | No |
| title | string |  | No |

<a name="contact"></a>**Contact**  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| addresses | [ [ContactAddress](#contactAddress) ] |  | No |
| birthday | date |  | No |
| categories | [ [ContactField](#contactField) ] |  | No |
| displayName | string |  | No |
| emails | [ [ContactField](#contactField) ] |  | Yes |
| ims | [ [ContactField](#contactField) ] |  | No |
| name | [ContactName](#contactName) |  | Yes |
| nickname | string |  | No |
| note | string |  | No |
| organizations | [ [ContactOrganization](#contactOrganization) ] |  | No |
| phoneNumbers | [ [ContactField](#contactField) ] |  | Yes |
| photos | [ [ContactField](#contactField) ] |  | No |