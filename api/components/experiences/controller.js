const TABLE = 'experiences';

module.exports = function (injectedStore) {
  let store = new injectedStore();

  async function list() {
    const list = await store.list(TABLE);
    return list
  }

  async function get(id) {
    const experience = await store.get(TABLE, id);
    return experience;
  }

  async function insert(experience) {
    const InsertedAt = Date.now();
    experience = {...experience, InsertedAt};
    const experienceInserted = await store.insert(TABLE, experience);
    return experienceInserted;
  }

  async function update(id, experience) {
    const UpdatedAt = Date.now();
    experience = {...experience, UpdatedAt};
    const experienceUpdated = await store.update(TABLE, id, experience);
    return experienceUpdated;
  }

  async function remove(id) {
    const experienceDeleted = await store.delete(TABLE, id);
    return experienceDeleted;
  }

  return {
    list,
    get,
    insert,
    update,
    remove
  };
}