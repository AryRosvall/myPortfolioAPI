const TABLE = 'skills';

module.exports = function (injectedStore) {
  let store = new injectedStore();

  async function list() {
    const list = await store.list(TABLE);
    return list
  }

  async function get(id) {
    const skill = await store.get(TABLE, id);
    return skill;
  }

  async function insert(skill) {
    const InsertedAt = Date.now();
    skill = {...skill, InsertedAt};
    const skillInserted = await store.insert(TABLE, skill);
    return skillInserted;
  }

  async function update(id, skill) {
    const UpdatedAt = Date.now();
    skill = {...skill, UpdatedAt};
    const skillUpdated = await store.update(TABLE, id, skill);
    return skillUpdated;
  }

  async function remove(id) {
    const skillDeleted = await store.delete(TABLE, id);
    return skillDeleted;
  }

  return {
    list,
    get,
    insert,
    update,
    remove
  };
}