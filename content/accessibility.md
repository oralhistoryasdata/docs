---
nav_order: 12
title: Accessibility
---

# OHD Accessibility

The Oral History as Data (OHD) framework has been extensively tested for accessibility using a variety of tools and analyses, consistently receiving high grades in compliance tests. The development team has conducted  evaluations using WAVE (Web Accessibility Evaluation Tool) and Lighthouse in Chrome's Developer Tools to identify and resolve potential barriers to access. Based on our use of these tools, we believe we meet high accessibility options. 

CollectionBuilder, upon which OHD is built, is also designed and developed in such a way as to meet high accessibility standards. For more on the CB process, see [its accessibility page](https://collectionbuilder.github.io/cb-docs/docs/accessibility/).

The OHD interface elements have been developed with screen readers in mind, and focus indicators are clearly visible throughout the site, and all form controls should be properly labeled with descriptive text. Particular attention has been paid to keyboard interactions throughout the platform, ensuring they are intuitive, consistent, and fully functional without requiring mouse input. All interactive elements have been carefully designed to work with screen readers and other assistive technologies. The visualization components incorporate accessible color schemes and alternative ways to access the information they present. The OHD team remains committed to maintaining and enhancing accessibility as the platform evolves, making regular accessibility audits part of the development workflow.

However, it's important to note that ultimate responsibility for ensuring accessibility falls on those who publish oral history collections. While OHD provides an accessible foundation, content creators must implement best practices when adding their specific materials.

The guide below aims to help collection publishers understand accessibility requirements and implement features that make oral histories accessible to all users, including people with disabilities.

## Understanding Accessibility in Oral History

Oral histories present unique accessibility challenges because they often involve:

1. Audio content that may be inaccessible to deaf or hard-of-hearing users
2. Text transcripts that may be inaccessible to blind or low-vision users
3. Interactive visualizations that may present barriers to users with various disabilities
4. Complex navigation that can be difficult for users with cognitive disabilities

## WCAG Compliance

Web Content Accessibility Guidelines (WCAG) provide a framework for accessibility:

### Key WCAG Principles for OHD Projects

1. **Perceivable**
   - Provide text alternatives for audio content
   - Create captions and transcripts
   - Ensure sufficient color contrast

2. **Operable**
   - Make all functionality available via keyboard
   - Provide sufficient time to read content
   - Avoid content that could cause seizures

3. **Understandable**
   - Make text readable and comprehensible
   - Create predictable navigation
   - Help users avoid and correct mistakes

4. **Robust**
   - Ensure compatibility with assistive technologies
   - Use semantic HTML
   - Test with screen readers and other tools

## Implementing Accessibility in OHD

### Transcript Accessibility

1. **Structured Content**
   - Clearly identify speakers
   - Use proper punctuation
   - Break content into logical paragraphs
   - Include contextual information

2. **Handling Non-Verbal Elements**
   - Describe significant sounds: `[laughter]`, `[applause]`
   - Note emotional responses: `[voice breaking]`, `[excited]`
   - Include contextual information: `[shows photograph]`

3. **Timestamp Formatting**
   - Use consistent, recognizable format: `[00:05:30]`
   - Ensure proper labeling for screen readers
   - Ensure timestamps in transcripts match media precisely
   - Test navigation controls with keyboard only


## Resources

1. **Guidelines and Standards**
   - [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
   - [Section 508 Standards](https://www.section508.gov/)
   - [Oral History Association Accessibility Guidelines](https://www.oralhistory.org/accessibility-practices-for-interviews/)

2. **Testing Tools**
   - [WAVE Accessibility Tool](https://wave.webaim.org/)
   - [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
   - [Accessibility Insights](https://accessibilityinsights.io/)

3. **Educational Resources**
   - [WebAIM Articles and Resources](https://webaim.org/articles/)
   - [A11Y Project](https://www.a11yproject.com/)
   - [Digital Library Federation Accessibility Working Group](https://www.diglib.org/groups/accessibility/)