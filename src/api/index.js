export const subscribe = async (data = {}) => {
  const url = 'https://api.omnisend.com/v3/contacts/';
console.log(data)
  try {
    const res = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '5d38bb838653ed3ed535a9c5-c0KoGhHDYx5t0G3hE2gXdWgI7ruz49gZuWtgWsAX7P7FNTVgAj'
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    if (res.ok) {
      return await res.json();
    } else {
      throw new Error(res.statusText);
    }
  } catch(e) {
    console.error(e);
    throw e;
  }
}