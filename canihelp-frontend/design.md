# Design System Documentation

Based on analysis of: https://get.bigmarker.com/request-demo?partner=GetApp&gdmcid=d7aa48f6-88d0-4b7c-bea1-5c14d660fd9c

## Overview
This document captures the key design elements, patterns, and components observed from the BigMarker request demo page.

## Layout
- **Vertical Scroll**: Single column layout with sequential sections
- **Hero Banner**: Prominent "Demo Request" header at the top
- **CTA Buttons**: Primary call-to-action buttons throughout
- **Section Organization**: Content divided into clearly labeled sections:
  - Platform
  - Capabilities
  - Resources
  - Use cases
  - By industry
- **Card-Based Design**: Each section uses card-style blocks with icons and short labels
- **Generous White Space**: Ample padding between sections for visual breathing room
- **Left Alignment**: Consistent left-aligned text and elements

## Color Scheme
- **Background**: Clean white background throughout
- **Primary Accent**: Teal/blue shade used for:
  - Icons
  - Primary buttons ("Book a demo", "Request a demo")
  - Interactive elements
- **Text Colors**:
  - Dark gray for body text
  - Black/dark for headings
- **Neutrals**: Grayscale for customer logos and secondary elements

## Typography
- **Headings**: 
  - Bold, uppercase section titles (e.g., "Platform", "Capabilities")
  - Clear hierarchy with varying sizes
- **Body Text**: Regular sans-serif font for readability
- **Form Labels**: Uppercase with asterisks (*) for required fields
- **Placeholders**: Standard form input placeholders in lighter gray

## Components

### Buttons
- **Primary Button**: Teal background with white text
- **Style**: Solid fill with rounded corners
- **Examples**: "Book a demo", "Request a demo"
- **Hover/Pressed States**: Likely subtle color variations (not visible in static analysis)

### Form Elements
- **Input Fields**: Stacked vertical layout
- **Styles**: 
  - Clean borders
  - Placeholder text
  - Required field indicators (*)
- **Fields Observed**:
  - First Name*
  - Last Name*
  - Company*
  - Work Email*
  - Phone Number
  - Which product(s) are you interested in?

### Cards
- **Icon-Accented Cards**: SVG icons placed to the left of headings/labels
- **Usage**: Throughout "Platform", "Capabilities", "Resources" sections
- **Design**: Simple icons with descriptive text

### Graphics & Imagery
- **Brand Logo**: Full-width display at top of page
- **Illustrative Graphics**: 
  - Webinar leader imagery
  - Lead retrieval visuals
  - Community management concepts
  - ROI graphics
- **Customer Logos**: Grayscale grid display for social proof

### Checklist Elements
- **Visual**: Check-mark logos accompanying feature lists
- **Purpose**: Visual verification of included capabilities

## Spacing & Alignment
- **Section Padding**: Generous vertical spacing between content blocks
- **Icon Placement**: Icons consistently placed left of associated text
- **Form Layout**: Stacked vertical form fields with clear labels
- **Text Alignment**: Left-aligned for readability
- **Whitespace**: Strategic use of empty space to prevent visual clutter

## Design Principles Observed
1. **Clarity**: Clear visual hierarchy guides user attention
2. **Consistency**: Repeated patterns in buttons, cards, and typography
3. **Whitespace**: Generous use of space prevents overwhelming the user
4. **Visual Cues**: Icons and colors help users scan content quickly
5. **Focus on CTA**: Primary actions are visually prominent
6. **Trust Elements**: Customer logos and professional imagery build credibility

## Recommendations for Implementation
- Use a teal/blue as primary brand color (#00BFA6 or similar based on observation)
- Implement a clean, white-based layout with generous padding
- Create reusable card components with icon support
- Design primary buttons with teal background and white text
- Use uppercase for section headings and form labels
- Implement stacked form layouts with clear required field indicators
- Include space for customer logos and illustrative graphics
- Maintain left-aligned text for optimal readability