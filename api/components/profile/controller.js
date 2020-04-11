const TABLE = 'profiles';

module.exports = function (injectedStore) {
  let store = new injectedStore();

  async function list() {
    const list = await store.list(TABLE);
    return list
  }

  async function get(id) {
    const profile = await store.get(TABLE, id);
    return profile;
  }

  async function insert(profile) {
    const InsertedAt = Date.now();
    profile = {...profile, InsertedAt};
    const profileInserted = await store.insert(TABLE, profile);
    return profileInserted;
  }

  async function update(id, profile) {
    const UpdatedAt = Date.now();
    profile = {...profile, UpdatedAt};
    const profileUpdated = await store.update(TABLE, id, profile);
    return profileUpdated;
  }

  async function remove(id) {
    const profileDeleted = await store.delete(TABLE, id);
    return profileDeleted;
  }

  return {
    list,
    get,
    insert,
    update,
    remove
  };
}