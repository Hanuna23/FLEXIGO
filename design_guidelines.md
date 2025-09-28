# Design Guidelines: MechConnect - Uber for Mechanics

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Uber's clean, location-focused interface and TaskRabbit's service marketplace patterns. This experience-focused app prioritizes trust-building through visual design and seamless mobile interactions.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Brand Blue: 210 85% 45% (professional, trustworthy)
- Success Green: 142 70% 45% (completed services)
- Warning Orange: 35 85% 55% (urgent requests)

**Dark Mode:**
- Background: 220 15% 8%
- Surface: 220 12% 12%
- Text Primary: 0 0% 95%

### Typography
**Font Stack:** Inter via Google Fonts
- Headers: 600-700 weight, 24-32px
- Body: 400-500 weight, 14-16px
- Labels: 500 weight, 12-14px

### Layout System
**Spacing Units:** Tailwind units of 2, 4, 6, and 8 (p-2, m-4, h-6, gap-8)
- Consistent 4-unit rhythm for component spacing
- 2-unit for tight internal spacing
- 8-unit for section separation

### Component Library

**Navigation:**
- Bottom tab bar for mobile (Customer/Mechanic modes)
- Clean header with location and profile access
- Floating action button for primary actions

**Core Components:**
- **Service Cards:** Photo, rating, distance, pricing with subtle shadows
- **Location Picker:** Map integration with radius visualization
- **Chat Interface:** WhatsApp-inspired messaging with status indicators
- **Forms:** Rounded inputs with floating labels, vehicle selection dropdowns
- **Buttons:** Solid primary, outline secondary with proper contrast ratios

**Data Displays:**
- **Mechanic Profiles:** Photo, certifications, reviews in card format
- **Service History:** Timeline view with status badges
- **Real-time Tracking:** Map with mechanic location and ETA

**Trust Elements:**
- Verification badges for certified mechanics
- Star ratings with review counts
- Profile photos and mechanic certifications display
- Secure payment indicators

### Mobile-First Considerations
- Touch-friendly 44px minimum tap targets
- Thumb-zone optimization for primary actions
- Swipe gestures for service history navigation
- One-handed usability for service requests

### Images
**Hero Image:** Clean automotive workshop scene or mechanic at work for onboarding screens
**Profile Images:** Circular mechanic photos with verified badges
**Service Icons:** Wrench, oil change, tire repair iconography from Heroicons
**Vehicle Images:** Simple car silhouettes for vehicle type selection

This design creates a trustworthy, efficient platform that feels familiar to ride-sharing users while addressing the unique needs of automotive service connections.