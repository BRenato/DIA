/*********************************************************
*	Object Constructors
*	
*	
*	NA 17/01/2015
**********************************************************/

/*********************************************************
*	Issue
*/

// This is the one to use most commonly when creating a new issue
function Issue(owner, title, description, type, category){
	// the owner of the issue, the user who is responsible for the issue, and by default the creator
	this.owner = owner;
	this.title = title;
	this.description = description;
	// the type of the Issue (Problem, Improvement, new Idea/Project)
	this.type = type;
	// the category of the issue (Sports, Health, Social, Hobbies, ...)
	this.category = category;
	// the creation date is automatically assigned on the creation of the object
	this.creationDate = Date.now();
	// the status of the issue. when creating one it is 'I' (Initial)
	this.status = 'I';
	// the number of likes
	this.likes = 0;
	// the number of dislikes
	this.dislikes = 0;
	// the workgroup is the 'Task Force' that will resolve the issue, organized by the owner, initially it is set to null
	this.workgroup = null;
}

Issue.prototype.nextStatus = function(){
	var possibleStatus = ['I', 'A', 'O', 'F'];

	this.status = possibleStatus[possibleStatus.indexOf(this.status) + 1];
};

Issue.prototype.incrementLikes = function(){
	this.likes += 1;
};

// increments de number of likes by 1
Issue.prototype.incrementDislikes = function(){
	this.dislikes += 1;
};

Issue.prototype.setWorkgroup = function(workgroup){
	this.workgroup = workgroup;
};

/**********************************************************
*	WorkGroup
*/

function WorkGroup(){
	//the duration of the task to be performed
	this.duration = null;
	
	//the date chosen by the Issue Owner between all possible dates
	this.executionDate = null;
	
	//all the possible dates available for the users to chose from, must be setted by the issue owner
	this.possibleDates = [];
	
	//the users that have previously volunteered on the Issue
	this.volunteers = [];
	
	//the users that the Issue owner wants to invite
	this.invitedVolunteers = [];
	
	//the materials provided by the users and accepted by the issue owner
	this.toolsMaterials = [];
}

// sets the duration of the task to be performed
WorkGroup.prototype.setDuration = function(duration){
	this.duration = duration;
};

// sets the chosen execution date of the task to be performed 
WorkGroup.prototype.setExecutionDate = function(executionDate){
	this.executionDate = executionDate;
};

// adds a volunteer to the volunteers list (this are the previously volunteered, NOT the invited ones)
// returns false if the user is already on the volunteers or invitedVolunteers list
WorkGroup.prototype.addVolunteer = function(volunteer){
	var alreadyVolunteer_bool = (this.volunteers.indexOf(volunteer) > -1) || (this.invitedVolunteers.indexOf(volunteer) > -1)
	if (!alreadyVolunteer_bool){
		this.volunteers.push(volunteer);
	}
	return !alreadyVolunteer_bool;
};

// removes a volunteer from the volunteers list (we must decide if the issue owner can remove this volunteers or not)
// returns false if volunteer not found, otherwise returns the removed volunteer
WorkGroup.prototype.removeVolunteer = function(volunteer){
	var volunteerIndex = this.volunteers.indexOf(volunteer);
	if (volunteerIndex > -1) {
    	return this.volunteers.splice(volunteerIndex, 1);
	}
	else{
		return false;
	}
};

// adds a volunteer to the invited volunteers list (users that the issue owner wants to invite)
// returns false if the user is already on the volunteers or invitedVolunteers list
WorkGroup.prototype.addInvitedVolunteer = function(invitedVolunteer){
	var alreadyVolunteer_bool = (this.volunteers.indexOf(invitedVolunteer) > -1) || (this.invitedVolunteers.indexOf(invitedVolunteer) > -1)
	if (!alreadyVolunteer_bool){
		this.invitedVolunteers.push(invitedVolunteer);
	}
	return !alreadyVolunteer_bool;
};

// removes a volunteer from the invited volunteers list (users that the issue owner wants to invite)
// eturns false if volunteer not found, otherwise returns the removed volunteer
WorkGroup.prototype.removeInvitedVolunteer = function(invitedVolunteer){
	var volunteerIndex = this.invitedVolunteers.indexOf(invitedVolunteer);
	if (volunteerIndex > -1) {
    	return this.invitedVolunteers.splice(volunteerIndex, 1);
	}
	else{
		return false;
	}
};

// add a tool or material to the toolsMaterial list
WorkGroup.prototype.addToolMaterial = function(toolMaterial){
	var alreadyAdded_bool = this.toolsMaterials.indexOf(toolMaterial) > -1
	if (!alreadyAdded_bool){
		this.toolsMaterials.push(toolMaterial);
	}
	return !alreadyAdded_bool;
};

// remove a tool or material to the toolsMaterial list
WorkGroup.prototype.removeToolMaterial = function(toolMaterial){
	var toolMaterialIndex = this.toolsMaterials.indexOf(toolMaterial);
	if (toolMaterialIndex > -1) {
    	return this.toolsMaterials.splice(toolMaterialIndex, 1);
	}
	else{
		return false;
	}
};

/*********************************************************
*	ToolMaterial
*/
function ToolMaterial(picture, description, measureUnit){
	this.picture = null;
	this.description = null;
	this.amount = null;
	this.measureUnit = null;
}

ToolMaterial.prototype.setAmount = function(amount) {
	this.amount = amount;
};

/*********************************************************
*	User
*/
function User(){
	this.username = null;
	this.password = null;
	this.picture = null;
	this.email = null;
	this.contact = null;
	this.adress = null;
	this.points = null;
	this.type = null;
	this.status = null;
}

/*********************************************************
*	Volunteer
*/

function Volunteer(user){
	this.user = user;
	this.toolsMaterials = [];
	this.possibleDates = [];
}

// Volunteer.prototype.addPossibleDate = function(date){
// 	this.possibleDates.push(date);
// };