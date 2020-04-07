const TABLE = 'profiles';

module.exports = function (injectedStore) {
  let store = new injectedStore();

  async function list() {
    const list = await store.list(TABLE);
    console.log(list)
    return list
  }

  function get(id) {
    return store.get(TABLE, id);
  }

 /*  async function upsert(body) {
    const post = {
      id: body.id || nanoid(),
      text: body.text,
      user: body.user,
    }

    return store.upsert(TABLE, post);
  } */

  return {
    list,
    get,
    //upsert
  };
}