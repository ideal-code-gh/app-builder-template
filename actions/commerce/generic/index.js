// eslint-disable-next-line no-unused-vars
export const main = (params) => {
  let result

  try {
    // let's do something
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
