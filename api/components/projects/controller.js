const TABLE = 'projects';

module.exports = function (injectedStore) {
  let store = new injectedStore();

  async function list() {
    const list = await store.list(TABLE);
    return list
  }

  async function get(id) {
    const project = await store.get(TABLE, id);
    return project;
  }

  async function insert(project) {
    const InsertedAt = Date.now();
    project = {...project, InsertedAt};
    const projectInserted = await store.insert(TABLE, project);
    return projectInserted;
  }

  async function update(id, project) {
    const UpdatedAt = Date.now();
    project = {...project, UpdatedAt};
    const projectUpdated = await store.update(TABLE, id, project);
    return projectUpdated;
  }

  async function remove(id) {
    const projectDeleted = await store.delete(TABLE, id);
    return projectDeleted;
  }

  return {
    list,
    get,
    insert,
    update,
    remove
  };
}