console.log("Contact Information:");
for (let key in cv.contactInformation) {
  console.log(key + ": " + cv.contactInformation[key]);
}

console.log("\nPersonal Statement:");
console.log(cv.personalStatement);

console.log("\nWork Experience:");
for (let i = 0; i < cv.workExperience.length; i++) {
  const experience = cv.workExperience[i];
  console.log("Position: " + experience.position);
  console.log("Company: " + experience.company);
  console.log("Location: " + experience.location);
  console.log("Start Date: " + experience.startDate);
  console.log("End Date: " + experience.endDate);
  console.log("Responsibilities:");
  for (let j = 0; j < experience.responsibilities.length; j++) {
    console.log("- " + experience.responsibilities[j]);
  }
  console.log("");
}

console.log("Associations and Certifications:");
for (let i = 0; i < cv.associationsAndCertifications.length; i++) {
  console.log("- " + cv.associationsAndCertifications[i]);
}

console.log("\nEducation:");
for (let i = 0; i < cv.education.length; i++) {
  const education = cv.education[i];
  console.log("Degree: " + education.degree);
  console.log("University/School: " + education.university || education.school);
  console.log("Location: " + education.location);
  console.log("Start Date: " + education.startDate);
  console.log("End Date: " + education.endDate);
  console.log("");
}

console.log("Skills:");
for (let i = 0; i < cv.skills.length; i++) {
  console.log("- " + cv.skills[i]);
}

console.log("\nExtra Sections:");
for (let i = 0; i < cv.extraSections.length; i++) {
  const section = cv.extraSections[i];
  console.log(section.sectionTitle + ":");
  for (let j = 0; j < section.sectionItems.length; j++) {
    console.log("- " + section.sectionItems[j]);
  }
  console.log("");
}