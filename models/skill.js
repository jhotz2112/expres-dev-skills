const skills = [
  {id: 125223, skill: 'HTML', done: true},
  {id: 127904, skill: 'CSS', done: false},
  {id: 139608, skill: 'Vanilla JS', done: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  // Object.assign(<targetObj>, <sourceObj>)
  Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(newSkill) {
  newSkill.id = Date.now() % 1000000;
  newSkill.done = false;
  skills.push(newSkill);
}

function getOne(id) {
  // URL params are always strings
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}