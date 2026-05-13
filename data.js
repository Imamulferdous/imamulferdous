// ==================================================
// WEBSITE DATA - Edit this file to update your website
// ==================================================

const websiteData = {
  // ============ PERSONAL INFORMATION ============
  personal: {
    name: "Imam Ul Ferdous",
    title: "PhD Researcher",
    subtitle: "Mechanical Engineering | Materials Science & Machine Learning",
    email: "imam.ul.ferdous@gmail.com",
    phone: "+601121949840",
    location: "Universiti Malaysia Pahang Al-Sultan Abdullah, Pekan, Pahang, Malaysia",
    
    // Profile image - replace with your photo
    profileImage: "assets/images/author-image.jpg",
    
    // Short bio for the sidebar
    tagline: "PhD Researcher specializing in creep behavior and machine learning applications for high-temperature materials"
  },

  // ============ SOCIAL LINKS ============
  social: {
    linkedin: "https://www.linkedin.com/in/imam-ul-ferdous",  // Update with your actual LinkedIn
    googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",  // Update with your Google Scholar ID
    researchGate: "https://www.researchgate.net/profile/Imam-Ul-Ferdous",  // Update with your ResearchGate
    github: "https://github.com/imamulferdous",  // Update with your GitHub
    orcid: "https://orcid.org/YOUR-ORCID-ID"  // Update with your ORCID
  },

  // ============ ABOUT SECTION ============
  about: {
    title: "About Me",
    
    // Professional summary - will be displayed as main content
    summary: "PhD researcher specializing in creep behavior, modeling, and life prediction of high-temperature Grade 91 steel. Experienced in Small Punch Creep Testing, Finite Element Analysis (ABAQUS), and Machine Learning applications for materials science. Proven track record in experimental research, computational modeling, and publishing in peer-reviewed journals.",
    
    // Detailed sections - professional text-only format
    sections: [
      {
        heading: "Current Research Focus",
        content: "Pursuing PhD at Universiti Malaysia Pahang Al-Sultan Abdullah, focusing on creep behavior and life prediction of Grade 91 ferritic-martensitic steel. Research combines Small Punch Creep Testing (SPCT), finite element analysis, and machine learning to develop predictive models for material failure in power generation and petrochemical industries."
      },
      {
        heading: "Academic Background & Experience",
        content: "Master's degree in Mechanical Engineering from UMPSA and Bachelor's from Khulna University of Engineering and Technology, Bangladesh. Prior industry experience as Research Engineer and Mechanical Designer at Walton Hi-Tech Industries Ltd., specializing in product development and design optimization for home appliances."
      }
    ]
  },

  // ============ EDUCATION ============
  education: {
    title: "Education",
    description: "Academic qualifications and research training",
    
    degrees: [
      {
        degree: "Doctor of Philosophy (PhD)",
        field: "Mechanical Engineering",
        institution: "Universiti Malaysia Pahang Al-Sultan Abdullah",
        location: "Malaysia",
        period: "May 2023 - Present",
        description: "Research focus: Creep behavior modeling and life prediction of Grade 91 steel using Small Punch Creep Testing, Finite Element Analysis, and Machine Learning"
      },
      {
        degree: "Master of Science (M.Sc.)",
        field: "Mechanical Engineering",
        institution: "Universiti Malaysia Pahang Al-Sultan Abdullah",
        location: "Malaysia",
        period: "November 2020 - March 2023",
        description: "Research on creep behavior, modeling, and life prediction of high-temperature steels with experimental and computational approaches"
      },
      {
        degree: "Bachelor of Science (B.Sc.)",
        field: "Mechanical Engineering",
        institution: "Khulna University of Engineering and Technology",
        location: "Bangladesh",
        period: "Graduated June 2016",
        description: "Foundation in mechanical engineering principles, design, and analysis"
      }
    ]
  },

  // ============ WORK EXPERIENCE ============
  experience: {
    title: "Work Experience",
    description: "Professional and research positions",
    
    positions: [
      {
        title: "Graduate Research Assistant (PhD)",
        organization: "Faculty of Mechanical and Automotive Engineering Technology",
        institution: "Universiti Malaysia Pahang Al-Sultan Abdullah",
        period: "May 2023 - Present",
        responsibilities: [
          "Conducting literature reviews on Small Punch Creep Test, Finite Element Modelling, and Machine Learning",
          "Contributing to experimental research including sample preparation, testing, and data collection",
          "Collaborating with researchers, faculty, and industry professionals to advance research objectives",
          "Preparing reports, presentations, and documentation for conferences and publications",
          "Writing research papers and conference abstracts following publication guidelines"
        ]
      },
      {
        title: "Graduate Research Assistant (Masters)",
        organization: "Faculty of Mechanical and Automotive Engineering Technology",
        institution: "Universiti Malaysia Pahang Al-Sultan Abdullah",
        period: "November 2020 - December 2022",
        responsibilities: [
          "Conducted research on creep behavior, modeling, and life prediction of high-temperature steels",
          "Published research in high-quality journals and conferences",
          "Experimented with advanced tools and techniques in materials testing",
          "Collaborated with diverse research groups as an active research associate",
          "Participated in lab sessions, seminars, workshops, and conferences"
        ]
      },
      {
        title: "Research Engineer and Mechanical Designer",
        organization: "Home Appliance R&D",
        institution: "Walton Hi-Tech Industries Ltd.",
        period: "October 2016 - July 2020",
        responsibilities: [
          "Led product concept generation, design, and analysis for home appliances",
          "Utilized CAD software to create detailed mechanical system drawings and schematics",
          "Coordinated the installation of machinery and components",
          "Contributed to process development for production optimization",
          "Enhanced overall system performance through workflow improvements"
        ]
      }
    ]
  },

  // ============ RESEARCH EXPERTISE ============
  expertise: {
    title: "Research Expertise",
    description: "Specialized skills in materials science, computational mechanics, and machine learning",
    
    areas: [
      {
        icon: "fa-flask",
        title: "Small Punch Creep Testing",
        description: "Extensive expertise in SPCT methodology for characterizing high-temperature creep behavior of Grade 91 steel. Proficient in sample preparation, test execution, data acquisition, and interpretation of creep curves. Experienced in correlating SPCT results with conventional uniaxial creep testing for material life prediction.",
        highlights: ["Experimental Design", "Data Analysis", "Life Prediction", "Material Characterization"]
      },
      {
        icon: "fa-cube",
        title: "Finite Element Analysis",
        description: "Advanced computational modeling using ABAQUS for simulating creep deformation and damage evolution in high-temperature materials. Specialized in implementing user-defined subroutines (UMAT/CREEP) for complex material behavior, mesh optimization, and validation against experimental results.",
        highlights: 
      },
      {
        icon: "fa-brain",
        title: "Machine Learning & Artificial Intelligence",
        description: "Application of neural networks and machine learning algorithms for predicting creep rupture life and material behavior. Proficient in Python-based ML frameworks including TensorFlow and scikit-learn. Experienced in data preprocessing, feature engineering, model optimization, and validation for materials science applications.",
        highlights: ["Neural Networks", "Python/TensorFlow", "Data-Driven Modeling", "Predictive Analytics"]
      },
      {
        icon: "fa-drafting-compass",
        title: "CAD Design & Engineering",
        description: "Certified SolidWorks Professional (CSWP/CSWA) with expertise in parametric modeling, assembly design, and engineering drawings. Proficient in AutoCAD for 2D technical documentation. Experience in designing experimental fixtures, test equipment, and mechanical components for research and industrial applications.",
        highlights: ["SolidWorks (CSWP/CSWA)", "AutoCAD", "Product Design", "Technical Documentation"]
      }
    ]
  },

  // ============ TECHNICAL SKILLS ============
  skills: {
    title: "Technical Skills",
    description: "Software proficiency and technical capabilities",
    
    categories: [
      {
        category: "Computer-Aided Engineering Software",
        skills: ["SolidWorks (CSWP/CSWA Certified)", "Abaqus FEA", "Autodesk AutoCAD"]
      },
      {
        category: "Programming Languages",
        skills: ["Python (NumPy, Pandas, TensorFlow, scikit-learn)", "MATLAB", "Fortran", "ANSI C"]
      },
      {
        category: "Documentation & Publishing",
        skills: ["LaTeX", "Microsoft Office Suite", "Technical Writing", "Research Methodology"]
      },
      {
        category: "Research & Analysis",
        skills: ["Experimental Design", "Statistical Analysis", "Data Visualization", "Literature Review"]
      }
    ]
  },

  // ============ PUBLICATIONS ============
  // NOTE: For download links, upload PDF files to "publications/" folder
  // Then set pdfFile: "publications/your-paper-name.pdf"
  publications: {
    title: "Publications",
    description: "Research contributions in peer-reviewed journals and conferences",
    
    journals: [
      {
        title: "Evaluation of thinning behaviour under the influence of plastic hardening and surface friction during small punch test",
        journal: "Fracture and Structural Integrity",
        year: "2025",
        doi: "10.3221/IGF-ESIS.72.05",
        status: "Published",  // Options: "Published", "Submitted", "Under Review", "In Press"
        pdfFile: "publications/journal/evaluation-thinning-behaviour-plastic-hardening-surface-friction-small-punch-test.pdf"
      },
      {
        title: "Evaluation of Yield Strength Under Small Punch Loading with Different Specimen Thicknesses",
        journal: "Journal of Advanced Research in Applied Mechanics",
        year: "2024",
        doi: "10.37934/aram.130.1.1626",
        status: "Published",
        pdfFile: "publications/journal/evaluation-yield-strength-small-punch-loading-different-specimen-thicknesses.pdf"
      },
      {
        title: "Application of the Small Punch Creep Test in Predicting Creep Properties of Grade 91 Steel",
        journal: "Journal of Materials Engineering and Performance",
        year: "2024",
        doi: "10.1007/s11665-024-10470-1",
        status: "Published",
        pdfFile: "publications/journal/application-small-punch-creep-test-predicting-creep-properties-grade-91-steel.pdf"
      },
      {
        title: "Rupture Life and Failure Mechanism of Grade 91 Steel Under the Influence of Notch Constraint",
        journal: "Journal of Failure Analysis and Prevention",
        year: "2022",
        doi: "10.1007/s11668-022-01575-7",
        status: "Published",
        pdfFile: "publications/journal/rupture-life-failure-mechanism-grade-91-steel-notch-constraint.pdf"
      },
      {
        title: "Numerical Prediction of Creep Rupture Life of Ex-Service and As-Received Grade 91 Steel at 873K",
        journal: "International Journal of Automotive and Mechanical Engineering",
        year: "2021",
        volume: "18",
        issue: "3",
        pages: "8845-8858",
        status: "Published",
        pdfFile: "publications/journal/numerical-prediction-creep-rupture-life-ex-service-as-received-grade-91-steel-873k.pdf"
      }
    ],
    
    conferences: [
      {
        title: "On the Influence of Thickness Non-uniformity on Mechanical Behaviour under Small Punch Load",
        conference: "Journal of Physics: Conference Series",
        year: "2025",
        volume: "2933",
        doi: "10.1088/1742-6596/2933/1/012005",
        status: "Published",
        pdfFile: "publications/conference/influence-thickness-non-uniformity-mechanical-behaviour-small-punch-load.pdf"
      },
      {
        title: "On the Influence of Clamping Force and Contact Friction in Small Punch Test",
        conference: "10th International Conference on Mechanical, Automotive and Materials Engineering (CMAME 2023)",
        year: "2023",
        doi: "10.1007/978-981-97-4806-8_15",
        status: "Published",
        pdfFile: "publications/conference/influence-clamping-force-contact-friction-small-punch-test.pdf"
      },
      {
        title: "Target and Precursor Named Entities Recognition from Scientific Texts of High-Temperature Steel Using Deep Neural Network",
        conference: "International Conference on Database and Expert Systems Applications",
        year: "2023",
        doi: "10.1007/978-3-031-39821-6_16",
        status: "Published",
        pdfFile: "publications/conference/target-precursor-named-entities-recognition-scientific-texts-high-temperature-steel-deep-neural-network.pdf"
      },
      {
        title: "Prediction of the Creep Behavior of P91 Steel at 873 K Using Continuum Damage Mechanics Model",
        conference: "Enabling Industry 4.0 through Advances in Manufacturing and Materials",
        year: "2022",
        doi: "10.1007/978-981-19-2890-1_35",
        status: "Published",
        pdfFile: "publications/conference/prediction-creep-behavior-p91-steel-873k-continuum-damage-mechanics-model.pdf"
      }
    ]
  },

  // ============ AWARDS & HONORS ============
  awards: {
    title: "Awards & Honors",
    description: "Recognition for academic excellence and research achievements",
    
    list: [
      {
        award: "Vice Chancellor's Scholarship",
        organization: "Universiti Malaysia Pahang Al-Sultan Abdullah",
        year: "2023",
        description: "Recognized for outstanding academic achievements and research potential"
      },
      {
        award: "Malaysia International Scholarship (MIS)",
        organization: "Ministry of Higher Education Malaysia",
        year: "2023",
        description: "Awarded for excellence in research potential and academic merit"
      },
      {
        award: "Masters Research Scheme (MRS)",
        organization: "Universiti Malaysia Pahang Al-Sultan Abdullah",
        year: "2021",
        description: "Granted for exceptional research capabilities in the field"
      },
      {
        award: "Bangladesh Government Education Board Scholarship",
        organization: "Government of Bangladesh",
        year: "2008",
        description: "Recognized for top academic performance at the national level (SSC)"
      }
    ]
  },

  // ============ CERTIFICATIONS ============
  certifications: {
    title: "Certifications & Training",
    description: "Professional certifications and specialized training",
    
    list: [
      "Certified SOLIDWORKS Professional (CSWP)",
      "Certified SOLIDWORKS Associate (CSWA)",
      "A Hands-on Introduction to Engineering Simulations (Cornell University via Edx)",
      "Training on X-Ray Diffraction: Basic Theory & Data Interpretation"
    ]
  },

  // ============ RESEARCH GRANTS ============
  grants: {
    title: "Research Grants",
    description: "Funded research projects",
    
    list: [
      {
        title: "Modelling of Damage Evolution of Grade 91 Steel Under Creep Loading",
        funder: "Ministry of Higher Education Malaysia",
        scheme: "Fundamental Research Grant Scheme (FRGS)",
        grantNumber: "FRGS/1/2019/TK03/UMP/02/2 (RDU1901107)",
        year: "2019"
      },
      {
        title: "Experimental and Modelling of Long-Term Creep Rupture Life of Grade 91 Steel Under Small Punch Creep",
        funder: "Universiti Malaysia Pahang Al-Sultan Abdullah",
        scheme: "Internal Grant",
        grantNumber: "RDU220361",
        year: "2022"
      }
    ]
  },

  // ============ CERTIFICATIONS & TRAINING ============
  certifications: {
    title: "Certifications & Training",
    description: "Professional certifications and specialized training programs",
    
    list: [
      {
        certification: "Certified SOLIDWORKS Professional (CSWP)",
        organization: "Dassault Systèmes",
        year: "Current",
        description: "Advanced certification in 3D CAD design and engineering"
      },
      {
        certification: "Certified SOLIDWORKS Associate (CSWA)",
        organization: "Dassault Systèmes",
        year: "Current",
        description: "Fundamental certification in SOLIDWORKS design principles"
      },
      {
        certification: "A Hands-on Introduction to Engineering Simulations",
        organization: "Cornell University (via edX)",
        year: "Completed",
        description: "Practical training in engineering simulation methodologies"
      },
      {
        certification: "Training on X-Ray Diffraction: Basic Theory & Data Interpretation",
        organization: "Professional Development",
        year: "Completed",
        description: "Specialized training in XRD analysis for materials characterization"
      }
    ]
  },

  // ============ CONTACT SECTION ============
  contact: {
    title: "Get In Touch",
    description: "I'm always open to discussing research collaborations, academic opportunities, or industry partnerships in materials science and engineering.",
    email: "imam.ul.ferdous@gmail.com",
    phone: "+601121949840",
    location: "Pekan, Pahang, Malaysia",
    address: "Red House 9, Universiti Village, Universiti Malaysia Pahang Al-Sultan Abdullah, Pekan, Pahang, 26600"
  }
};

// Make data available globally
window.websiteData = websiteData;
