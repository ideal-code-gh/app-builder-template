/**
 * Runtime action for providing registrations for Admin UI SDK.
 *
 * @see https://developer.adobe.com/commerce/extensibility/admin-ui-sdk/app-registration
 */

export const main = () => {
  const extensionId = 'my_awesome_app'

  return {
    statusCode: 200,
    body: {
      registration: {
        menuItems: [
          {
            id: `${extensionId}::container`,
            title: 'My Awesome App',
            parent: 'Magento_Backend::content',
            isSection: true
          },
          {
            id: `${extensionId}::page`,
            title: 'Page',
            parent: `${extensionId}::container`
          }
        ],
        page: {
          title: 'My Awesome App'
        }
      }
    }
  }
}
