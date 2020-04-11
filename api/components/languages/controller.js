const TABLE = 'languages';

module.exports = function (injectedStore) {
  let store = new injectedStore();

  async function list() {
    const list = await store.list(TABLE);
    return list
  }

  async function get(id) {
    const language = await store.get(TABLE, id);
    return language;
  }

  async function insert(language) {
    const InsertedAt = Date.now();
    language = {...language, InsertedAt};
    const languageInserted = await store.insert(TABLE, language);
    return languageInserted;
  }

  async function update(id, language) {
    const UpdatedAt = Date.now();
    language = {...language, UpdatedAt};
    const languageUpdated = await store.update(TABLE, id, language);
    return languageUpdated;
  }

  async function remove(id) {
    const languageDeleted = await store.delete(TABLE, id);
    return languageDeleted;
  }

  return {
    list,
    get,
    insert,
    update,
    remove
  };
}