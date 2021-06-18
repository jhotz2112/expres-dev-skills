const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

function update(req, res) {
  // If checkbox not checked, req.body.done = undefined
  // If checked, req.body.done = "on"
  req.body.done = !!req.body.done;
  Skill.update(req.params.tuna, req.body);
  res.redirect(`/skills/${req.params.tuna}`);
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', { skill });
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  // Updated data, so do a res.redirect
  res.redirect('/skills');
}

function create(req, res) {
  // The model is responsible for creating data
  Skill.create(req.body);
  // Do a redirect anytime data is changed (non-GET request)
  res.redirect('/skills');
  // redirect takes a path, not a view template
  // a redirect informs the browser to issue a 
  // new GET request to the provided path
}

function newSkill(req, res) {
  res.render('skills/new');
}

function show(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/show', { skill });
}

function index(req, res) {
  // get all of the skills 
  const skills = Skill.getAll();
  // render the skills/index.ejs,
  // passing to it the todos
  res.render('skills/index', {
    skills,
    time: req.time
  });
}