var name = "Rohan Kasiviswanathan ";
var role = "CS Intern";
var skills = ["Java", "Python", "C", "C++", "Data Structures", "Algorithms", "JavaScript", "HTML", "CSS", "SQL"];

var bio = {
	"name" : name,
	"role" : role,
	"contactinfo" : {
		"email" : "rohan.kasivis@gmail.com",
		"mobile" : "408-482-5469",
		"github" : "https://github.com/rohankasivis",
		"location" : "Urbana-Champaign"
	},
	"welcomemessage" : "Hey, I am Rohan, a CS student at UIUC! I am looking for an internship that would help me provide a broader knowledge of the way computers work.",
	"skills" : skills,
	"profilepicture": "images/profilepic.jpg"
};

var education = {
	"schools" : [
	{
		"name" : "Monta Vista High School ",
		"city" : "Cupertino ",
		"major" : "",
		"degree" : "High School Diploma ",
		"graduationYear" : "2014 - 2018 "
	},
	{
		"name" : "UIUC ",
		"city" : "Urbana-Champaign ",
		"degree" : "Pursuing BA ",
		"major" : "CS ",
		"graduationYear" : "2014 -2018 "
	},
	],
	"onlineCourses": [
	{
		"school" : "Udacity",
		"courses" : ["JavaScript Basics", "Intro to HTML-CSS", "Intro to Relational Databases"]
	},
	{
		"school" : "Coursera",
		"courses" : ["Intro to Python (Parts 1 and 2)", "Algorithms: Design and Analysis (Part 1)"]
	}
	]
};

var work = {
	"jobs" : [
	{
		"employer" : "Virtual Geomatics ",
		"title" : "intern",
		"location" : "Austin, Texas",
		"dates" : "June 2013 - July 2013",
		"description" : "I worked with a software called LiDar to extract features out of various images. I also participated in several tests, to determine changes that needed to be made to the software being currently used."
	}
	]
}

var projects = {
	"projects" : [
	{
		"title" : "Space Colonization : A Platform for Real Time Strategy Games",
		"dates" : "September, 2014 - December, 2014",
		"description" : "Space Colonization is a project based on games such as Starcraft. Many colonies in space try to take control over features such as planets. I was part of the graphics team.",
		"images" : []
	},
	{
		"title" : "LightningDeals.io",
		"dates" : "July 2015",
		"description" : "A work in progress, this is a website that I created with two others in a hackathon that allows users to make quick deals choosing any products that they want.",
		"images" : []
	}	
	]
}

function displayBio()
{
	var formattedName = HTMLheaderName.replace("%data%", name);
	var formattedRole = HTMLheaderName.replace("%data%", role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);	

	var formattedPic = HTMLbioPic.replace("%data%", bio.profilepicture);
	$("#header").append(formattedPic);	

	if(bio.skills.length > 0)
	{
		$("#header").append(HTMLskillsStart);
		for(i = 0; i < bio.skills.length; i++)
		{
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}

	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
	$("#header").append(formattedMessage);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contactinfo.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contactinfo.email);
	$("#topContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contactinfo.github);
	$("#topContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contactinfo.location);
	$("#topContacts").append(formattedLocation);
}

function displayWork()
{
	for(job in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

function displayProjects()
{
	for(project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0)
		{
			for(image in projects.projects.images)
			{
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

function displayEducation()
{
	
	for(school in education.schools)
	{
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolYear = HTMLschoolDates.replace("%data%", education.schools[school].graduationYear);

		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolCity);
		$(".education-entry:last").append(formattedSchoolMajor);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolYear);
	}

    $(".education-entry:last").append(HTMLonlineClasses);
	for(course in education.onlineCourses)
	{
		
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		for(courseV in education.onlineCourses[course].courses)
		{
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].courses[courseV]);
			$(".education-entry:last").append(formattedOnlineTitle);
			$(".education-entry:last").append(formattedOnlineSchool);
		}
	}


}

displayProjects();
displayEducation();
displayBio();

$(document).click(function(loc)
{
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
})

function locationizer(work_obj)
{
	var locationArray = [];

	for(job in work_obj.jobs)
	{
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

function inName(name)
{
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase
	name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);