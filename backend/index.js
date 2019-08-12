const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const db = require('./queries')
var cors = require('cors')
// var clientController = require('../components/clients/controller')

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

	if ('OPTIONS' == req.method) {
		res.send(200);
	}
	else
	{
		next();
	}
}); 

app.use(cors())

app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)

app.get('/', (request, response) => {
	response.json({ info: 'LooneyTeam Backend API made with Node.js, Express, and Postgres' })
})

app.options('/*', function() { return; })

app.get('/api/teachers',db.getTeachers)
app.get('/api/teachers/:query',db.getTeacherByParameter)
app.post('/api/teachers', db.createTeacher)
app.put('/api/teachers/:query', db.updateTeacher)
app.delete('/api/teachers/:query', db.deleteTeacher)
app.get('/api/classes', db.getClasses)
app.get('/api/classes/:id', db.getClassesById)
app.post('/api/classes', db.createClass)
app.put('/api/classes/:id', db.updateClass)
app.delete('/api/classes/:id', db.deleteClass)
app.get('/api/levels', db.getAllLevels)
app.get('/api/levels/:name', db.getLevelOrder)
app.get('/api/class_template', db.getAllClassTemplates)
app.get('/api/class_template/:query', db.getClassTemplate)
app.post('/api/class_template', db.createClassTemplate)
app.post('/api/program_category',db.createProgramCategory)
app.get('/api/program_category',db.getProgramCategory)
app.get('/api/program_category/:query', db.getProgramCategorybyParameter)
app.post('/api/teacher_approval', db.approveTeacher)
app.post('/api/program_template', db.createProgramTemplate)
app.get('/api/program_template', db.getProgramTemplate)
app.put('/api/program_template/:program_template_id', db.updateProgramTemplate)
app.get('/api/program_template/:query', db.getProgramTemplateByParam)
app.delete('/api/program_template/:query', db.deleteProgramTemplate)
app.put('/api/class_template/:query', db.updateClassTemplate)
app.delete('/api/class_template/:query', db.deleteClassTemplate)
app.get('/api/teacher_unavailability', db.getAllUnavailability)
app.get('/api/teacher_unavailability/:query', db.getUnavailability)
app.post('/api/teacher_unavailability', db.createUnavailability)
app.put('/api/teacher_unavailability/:query', db.updateUnavailability)
app.delete('/api/teacher_unavailability/:query', db.deleteUnavailability)
app.get('/api/region', db.getAllRegions)
app.get('/api/region/:query', db.getRegionByParam)
app.post('/api/region', db.createRegion)
app.put('/api/region/:query', db.updateRegion)
app.delete('/api/region/:query', db.deleteRegion)
app.get('/api/liveprogram', db.getAllLivePrograms)
app.get('/api/liveprogram/:query', db.getLiveProgramByParameter)
app.post('/api/liveprogram', db.createLiveProgram)
app.put('/api/liveprogram/:query', db.updateLiveProgram)
app.delete('/api/liveprogram/:query', db.deleteLiveProgram)

app.listen(port, () => {
	console.log('App running on port ${port}.')
})
