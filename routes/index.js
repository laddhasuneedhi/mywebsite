
const homeRoutes = require("./home");
const resumeRoutes = require("./resume")
const aboutRoutes = require("./about")

const constructorMethod = (app) => {
  app.use("/home", homeRoutes);
  app.use("/resume", resumeRoutes)
  app.use("/about", aboutRoutes)
  
 

  app.use("/", (req, res) => {
    res.redirect("/home");
  });

  app.use('*', (req, res) => {
    res.sendStatus(404);
  });

};

module.exports = constructorMethod;