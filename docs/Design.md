# Design Document

**Project Name:** Vera - Productivity Calendar  
**Platform:** Web / SaaS Dashboard

---

## 1. Project Overview

### Core Concept

A next-generation calendar that functions as a dynamic to-do list. It bridges the gap between task management and scheduling, allowing users to schedule specific times for todos, events, and contacts, fostering better team organization.

---

## 2. Visual Style & Aesthetic

The design follows the "Design as Enchantment" philosophy of OOZE, characterized by high polish, minimalism, and a focus on clarity.

- **Style:** Modern Minimalist, "Next-Gen" SaaS
- **Theme:** Professional yet vibrant. Likely utilizes a high-contrast layout (crisp backgrounds with bold, deep text) or a sophisticated dark mode
- **Vibe:** Organized, Fluid, Trustworthy

---

## 3. Color Palette

Based on the designer's signature style and the "next-gen" description, the palette utilizes deep hues for structure and vibrant accents for interactivity.

| Color Name     | Hex Code (Est.) | Usage                                          |
|----------------|-----------------|------------------------------------------------|
| Midnight Navy  | `#03145F`       | Primary text, Sidebar background, Heavy headers |
| Electric Blue  | `#4C56CF`       | Primary Buttons, Active States, Current Date   |
| Soft Surface   | `#F7F8FA`       | Dashboard Background, Main Content Area        |
| Pure White     | `#FFFFFF`       | Cards, Modal backgrounds, Calendar cells       |
| Slate Grey     | `#9A898F`       | Secondary text, Inactive icons, timestamps     |
| Alert Red      | `#FF4D4F`       | Critical notifications, Overdue tasks          |

---

## 4. Typography

**Primary Font:** Inter or SF Pro Display (Modern Sans-Serif)

**Why:** Maximize legibility at small sizes (calendar dates) while maintaining a clean, tech-forward look.

### Weights

| Weight         | Usage                                              |
|----------------|----------------------------------------------------|
| Bold (700)     | For the current month/year header and active task titles |
| Medium (500)   | For navigation links and dates                     |
| Regular (400)  | For body text, event descriptions, and time slots  |

---

## 5. Layout & Grid

The interface likely uses a fluid dashboard layout with a fixed sidebar.

### A. Navigation (Sidebar)

- **Position:** Vertical Left-Hand Side
- **Width:** Fixed (approx. 240-280px)
- **Elements:**
  - **Logo:** Top left, clean branding
  - **Primary Menu:** Dashboard, Calendar (Active), Tasks, Team, Settings
  - **Secondary Info:** User profile snippet at the bottom

### B. Main Content Area (Calendar View)

#### Header

- **Left:** "September 2022" (Month/Year selector)
- **Right:** View Toggles (Day/Week/Month), "Add Event" Primary Button, Notification Bell

#### Grid Structure

- A clean grid for the month view, or a split-view (List on left, Day view on right) to emphasize the "Todo List" aspect
- **Cards:** Events are represented as floating cards within the grid, featuring rounded corners (8-12px radius) and subtle drop shadows for depth

---

## 6. Key Functionality & Features

### Calendar-Todo Hybrid

- Users can drag tasks from a "backlog" sidebar directly onto the calendar grid to assign time slots
- Checkbox UI elements integrated directly into calendar events (marking a meeting as "done")

### Smart Notifications

- "Get notified when work happens" – Real-time toast notifications for team updates

### Event Types

- Color-coded categories:
  - **Work:** Blue
  - **Personal:** Purple
  - **Urgent:** Red

### Team Availability

- Overlay view to see team members' schedules when booking a slot

---

## 7. UI Elements

### Buttons

| Type      | Style                                          |
|-----------|------------------------------------------------|
| Primary   | Solid Electric Blue, pill-shaped or rounded rectangle |
| Secondary | Transparent with Blue outline or light grey fill |

### Cards (Events)

- White background with a subtle left border strip indicating the category color
- **Content:** Time (e.g., "10:00 AM"), Title, Avatars of participants

### Icons

- Line-style icons (Feather or Heroicons style) with a 1.5px stroke width for a refined look

---

## 8. Interaction Design (UX)

### Hover Effects

- Calendar days darken slightly on hover
- Event cards lift (increase shadow) to indicate clickability

### Drag & Drop

- Smooth transition animations when moving a task from the "Todo" list to the "Calendar" slot

### Modals

- Clicking an event opens a centered modal with a blurred backdrop (glassmorphism effect) for details