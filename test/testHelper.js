const {ObjectID} = require('mongodb');

let projectId = new ObjectID();

const testProject = {
    body:{
        _id: projectId,
        name:{
            es: "Pero hay que barbaridad y yo sin moverme del mismo lugar",
            en: "Poject number one"
        },
        url: "www.algo.com",
        imageUrl: "www.joder.com",
        description:{
            es: "La descripcion no esta tan mal espero pase",
            en: "The descrioption is not so bad I hope to pass the inspection"
        },
        technologies: ["Uno", "Dos", "Tres"]
    }
};

const populateProject = (done) =>{
    Project.remove({})
        .then(() => {
            let project = new Project(testProject.body).save();
            return project;
        }).then(()=>done())
        .catch(err => console.warn(err));
};


module.exports = { testProject, projectId, populateProject };