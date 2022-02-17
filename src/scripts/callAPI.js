const url = process.env.REACT_APP_API_URL || 'http://localhost:9000';
let json = { 'Content-Type': 'application/json' }

const callAPI = async (address, method = 'GET', params = null, headers = json) => {
  let attrs = {
    method: method,
    headers: headers
  }

  if(method !== 'GET') {
    attrs.body = JSON.stringify(params)
  }

  try {
    // TODO: change routes to handle null responses from db calls
    const res = await fetch(`${url}${address}`, attrs)
    console.log({res})
    if (!res.ok) {
        console.log('res not okay')
        console.log({res}, res.status)
        throw new Error(res.status);
    }
    console.log('res is ok')
    return res.json();
  } catch(err) {
    // TODO: handle errors
    // returning null leads to unexpected results
    console.log(`callAPI(${address},${method},${params}) error: `, err)
    return { error: err }
  }
}

export default callAPI;
