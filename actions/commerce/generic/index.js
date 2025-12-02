/**
 * Extremely simple example of runtime action, which
 * can be used to call external APIs, receiving events
 * from Adobe Commerce or anything else.
 */

// eslint-disable-next-line no-unused-vars
export const main = (params) => {
  let result

  try {
    // @todo let's do something
    result = {
      success: true
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: {
        error: e.message
      }
    }
  }

  return {
    statusCode: 200,
    body: result
  }
}
