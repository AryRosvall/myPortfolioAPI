const TABLE = 'academics';

module.exports = function (injectedStore) {
  let store = new injectedStore();

  async function list() {
    const list = await store.list(TABLE);
    return list
  }

  async function get(id) {
    const academic = await store.get(TABLE, id);
    return academic;
  }

  async function insert(academic) {
    const InsertedAt = Date.now();
    academic = {...academic, InsertedAt};
    const academicInserted = await store.insert(TABLE, academic);
    return academicInserted;
  }

  async function update(id, academic) {
    const UpdatedAt = Date.now();
    academic = {...academic, UpdatedAt};
    const academicUpdated = await store.update(TABLE, id, academic);
    return academicUpdated;
  }

  async function remove(id) {
    const academicDeleted = await store.delete(TABLE, id);
    return academicDeleted;
  }

  return {
    list,
    get,
    insert,
    update,
    remove
  };
}