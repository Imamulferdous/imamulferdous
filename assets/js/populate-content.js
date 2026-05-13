// Populate all website content from data.js with error handling
document.addEventListener('DOMContentLoaded', function() {
  const data = window.websiteData;
  
  if (!data) {
    console.error('websiteData not found!');
    return;
  }
  
  // ============ SIDEBAR ============
  try {
    document.getElementById('sidebar-name').textContent = data.personal.name;
    document.getElementById('sidebar-title').textContent = data.personal.subtitle;
    document.getElementById('sidebar-profile-image').src = data.personal.profileImage;
    document.getElementById('copyright-text').textContent = 'Copyright 2026 | ' + data.personal.name;
    
    // Social links
    const socialLinks = document.getElementById('social-links');
    socialLinks.innerHTML = `
      <li><a href="${data.social.linkedin}" target="_blank"><i class="fa fa-linkedin"></i></a></li>
      <li><a href="${data.social.googleScholar}" target="_blank"><i class="fa fa-graduation-cap"></i></a></li>
      <li><a href="${data.social.researchGate}" target="_blank"><i class="fa fa-flask"></i></a></li>
      <li><a href="${data.social.github}" target="_blank"><i class="fa fa-github"></i></a></li>
      <li><a href="mailto:${data.personal.email}"><i class="fa fa-envelope"></i></a></li>
    `;
  } catch (e) {
    console.error('Error populating sidebar:', e);
  }
  
  // ============ ABOUT SECTION ============
  try {
    document.getElementById('about-title').textContent = data.about.title;
    
    const aboutSummaryBox = document.getElementById('about-summary-box');
    aboutSummaryBox.innerHTML = `<p>${data.about.summary}</p>`;
    
    const aboutSections = document.getElementById('about-sections');
    aboutSections.innerHTML = '';
    data.about.sections.forEach((section) => {
      const sectionHTML = `
        <div class="about-text-section">
          <h4>${section.heading}</h4>
          <p>${section.content}</p>
        </div>
      `;
      aboutSections.innerHTML += sectionHTML;
    });
  } catch (e) {
    console.error('Error populating about:', e);
  }
  
  // ============ EDUCATION SECTION ============
  try {
    document.getElementById('education-title').textContent = data.education.title;
    document.getElementById('education-description').textContent = data.education.description;
    
    const educationContent = document.getElementById('education-content');
    educationContent.innerHTML = '';
    data.education.degrees.forEach(degree => {
      const degreeHTML = `
        <div class="timeline-item">
          <h4>${degree.degree}</h4>
          <h5>${degree.field}</h5>
          <p class="timeline-period"><strong>${degree.institution}</strong> | ${degree.location} | ${degree.period}</p>
          <p>${degree.description}</p>
        </div>
      `;
      educationContent.innerHTML += degreeHTML;
    });
  } catch (e) {
    console.error('Error populating education:', e);
  }
  
  // ============ EXPERIENCE SECTION ============
  try {
    document.getElementById('experience-title').textContent = data.experience.title;
    document.getElementById('experience-description').textContent = data.experience.description;
    
    const experienceContent = document.getElementById('experience-content');
    experienceContent.innerHTML = '';
    data.experience.positions.forEach(position => {
      const positionHTML = `
        <div class="timeline-item">
          <h4>${position.title}</h4>
          <h5>${position.organization}</h5>
          <p class="timeline-period"><strong>${position.institution}</strong> | ${position.period}</p>
          <ul>
            ${position.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
          </ul>
        </div>
      `;
      experienceContent.innerHTML += positionHTML;
    });
  } catch (e) {
    console.error('Error populating experience:', e);
  }
  
  // ============ RESEARCH EXPERTISE ============
  try {
    document.getElementById('expertise-title').textContent = data.expertise.title;
    document.getElementById('expertise-description').textContent = data.expertise.description;
    
    const expertiseAreas = document.getElementById('expertise-areas');
    expertiseAreas.innerHTML = '';
    data.expertise.areas.forEach(area => {
      const areaHTML = `
        <div class="col-md-6">
          <div class="expertise-card">
            <div class="expertise-icon">
              <i class="fa ${area.icon}"></i>
            </div>
            <h4>${area.title}</h4>
            ${area.highlights ? `<div class="expertise-tags">${area.highlights.map(h => `<span class="tag">${h}</span>`).join('')}</div>` : ''}
            <p>${area.description}</p>
          </div>
        </div>
      `;
      expertiseAreas.innerHTML += areaHTML;
    });
  } catch (e) {
    console.error('Error populating expertise:', e);
  }
  
  // ============ SKILLS ============
  try {
    document.getElementById('skills-title').textContent = data.skills.title;
    document.getElementById('skills-description').textContent = data.skills.description;
    
    const skillsContent = document.getElementById('skills-content');
    skillsContent.innerHTML = '';
    data.skills.categories.forEach(cat => {
      const categoryHTML = `
        <div class="skill-category">
          <h5>${cat.category}</h5>
          <div class="skill-tags">
            ${cat.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
          </div>
        </div>
      `;
      skillsContent.innerHTML += categoryHTML;
    });
  } catch (e) {
    console.error('Error populating skills:', e);
  }
  
  // ============ PUBLICATIONS ============
  try {
    document.getElementById('publications-title').textContent = data.publications.title;
    document.getElementById('publications-description').textContent = data.publications.description;
    
    // Journal Papers
    const journalPapers = document.getElementById('journal-papers');
    journalPapers.innerHTML = '';
    data.publications.journals.forEach((paper) => {
      const statusClass = paper.status.toLowerCase().replace(' ', '-');
      const paperHTML = `
        <div class="publication-item">
          <span class="publication-status status-${statusClass}">${paper.status}</span>
          <h5>${paper.title}</h5>
          <p class="publication-meta">${paper.journal} (${paper.year})${paper.volume ? ', Vol. ' + paper.volume : ''}</p>
          <div class="publication-actions">
            ${paper.doi ? `<a href="https://doi.org/${paper.doi}" target="_blank" class="publication-link"><i class="fa fa-external-link"></i> View Publication</a>` : ''}
            ${paper.pdfFile ? `<a href="${paper.pdfFile}" class="publication-link download-link" download><i class="fa fa-download"></i> Download PDF</a>` : ''}
          </div>
        </div>
      `;
      journalPapers.innerHTML += paperHTML;
    });
    
    // Conference Papers
    const conferencePapers = document.getElementById('conference-papers');
    conferencePapers.innerHTML = '';
    data.publications.conferences.forEach((paper) => {
      const statusClass = paper.status.toLowerCase().replace(' ', '-');
      const paperHTML = `
        <div class="publication-item">
          <span class="publication-status status-${statusClass}">${paper.status}</span>
          <h5>${paper.title}</h5>
          <p class="publication-meta">${paper.conference} (${paper.year})${paper.volume ? ', Vol. ' + paper.volume : ''}</p>
          <div class="publication-actions">
            ${paper.doi ? `<a href="https://doi.org/${paper.doi}" target="_blank" class="publication-link"><i class="fa fa-external-link"></i> View Publication</a>` : ''}
            ${paper.pdfFile ? `<a href="${paper.pdfFile}" class="publication-link download-link" download><i class="fa fa-download"></i> Download PDF</a>` : ''}
          </div>
        </div>
      `;
      conferencePapers.innerHTML += paperHTML;
    });
  } catch (e) {
    console.error('Error populating publications:', e);
  }
  
  // ============ AWARDS ============
  try {
    document.getElementById('awards-title').textContent = data.awards.title;
    document.getElementById('awards-description').textContent = data.awards.description;
    
    const awardsContent = document.getElementById('awards-content');
    awardsContent.innerHTML = '';
    data.awards.list.forEach(award => {
      const awardHTML = `
        <div class="col-md-6">
          <div class="award-item">
            <div class="award-icon">
              <i class="fa fa-trophy"></i>
            </div>
            <h5>${award.award}</h5>
            <p class="award-org">${award.organization}</p>
            <p class="award-year">${award.year}</p>
          </div>
        </div>
      `;
      awardsContent.innerHTML += awardHTML;
    });
  } catch (e) {
    console.error('Error populating awards:', e);
  }
  
  // ============ CERTIFICATIONS ============
  try {
    document.getElementById('certifications-title').textContent = data.certifications.title;
    document.getElementById('certifications-description').textContent = data.certifications.description;
    
    const certificationsContent = document.getElementById('certifications-content');
    certificationsContent.innerHTML = '';
    data.certifications.list.forEach(cert => {
      const certHTML = `
        <div class="col-md-6">
          <div class="award-item">
            <div class="award-icon">
              <i class="fa fa-certificate"></i>
            </div>
            <h5>${cert.certification}</h5>
            <p class="award-org">${cert.organization}</p>
            <p class="award-year">${cert.year}</p>
          </div>
        </div>
      `;
      certificationsContent.innerHTML += certHTML;
    });
  } catch (e) {
    console.error('Error populating certifications:', e);
  }
  
  // ============ CONTACT ============
  try {
    document.getElementById('contact-title').textContent = data.contact.title;
    document.getElementById('contact-description').textContent = data.contact.description;
    document.getElementById('contact-email').textContent = data.personal.email;
    document.getElementById('contact-phone').textContent = data.personal.phone;
    document.getElementById('contact-location').textContent = data.personal.location;
  } catch (e) {
    console.error('Error populating contact:', e);
  }
  
  console.log('Website content populated successfully!');
});
