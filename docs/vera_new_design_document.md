# Vera – Comprehensive Design Document

## 1. Product Summary

**Product Name:** Vera  
**Product Type:** Web-based SaaS Productivity Application  
**Core Idea:** A modern, minimal, and fast productivity tool that blends a to-do list with calendar-based planning, designed for individuals who value clarity, structure, and speed.

Vera is not a generic task app. It is positioned as a **daily planning system** where tasks are treated as time-bound commitments rather than static checklist items.

---

## 2. Design Goals

### Primary Goals
- Enable users to plan their day visually
- Reduce cognitive overload through minimal UI
- Make task management feel intentional and calm
- Support fast, repeat daily usage

### Non-Goals (MVP)
- Team collaboration
- Real-time syncing between users
- Advanced analytics or automation

---

## 3. Target Users

### Primary Audience
- Students
- Working professionals
- Freelancers

### User Mindset
- Busy
- Goal-oriented
- Prefers clarity over customization
- Uses the product multiple times per day

---

## 4. Design Principles

1. **Clarity Over Density**  
   Every screen should communicate its purpose within 3 seconds.

2. **Visual Hierarchy First**  
   Time, status, and priority must be visually obvious.

3. **Calm Productivity**  
   No aggressive colors, alerts, or visual noise.

4. **Motion With Meaning**  
   Animations exist only to explain state changes.

5. **Consistency Across Screens**  
   Reusable components and predictable behavior.

---

## 5. Information Architecture

### High-Level Navigation

- Login / Register
- Dashboard
- Calendar (Primary)
- Tasks
- Settings

### App Shell Structure

- Fixed left sidebar (navigation)
- Dynamic main content area
- Global header for context and actions

---

## 6. Layout System

### Sidebar

- Fixed width (240–280px)
- Dark or deep neutral background
- Contains:
  - App logo
  - Primary navigation
  - User profile section

### Main Content Area

- Full-height, scrollable
- Light background
- Content constrained to readable max width

---

## 7. Core Screens

### 7.1 Authentication Screens

**Purpose:** Secure and frictionless entry

**Layout:**
- Centered card
- Logo and short value statement
- Email and password fields
- Primary CTA button
- Secondary navigation links

**Design Notes:**
- No distractions
- Clear error messages
- Inline validation

---

### 7.2 Dashboard (Landing After Login)

**Purpose:** Daily overview

**Content:**
- Today’s date
- Upcoming tasks
- Quick add task input

**Behavior:**
- Loads instantly
- Acts as a summary, not a workspace

---

### 7.3 Calendar View (Primary Feature)

**Purpose:** Time-based task planning

**Views:**
- Day
- Week
- Month

**Key Elements:**
- Calendar grid or timeline
- Task cards placed within time slots
- Current date clearly highlighted

**Interactions:**
- Drag tasks onto calendar
- Resize tasks to adjust duration
- Click to open task details

---

### 7.4 Task List View

**Purpose:** Manage tasks outside time constraints

**Layout:**
- Vertical list
- Filters: All / Pending / Completed

**Task Item Includes:**
- Checkbox
- Title
- Optional description
- Status indicator

---

## 8. Task Card Design

### Visual Structure

- White surface
- Rounded corners (8–12px)
- Subtle shadow
- Left color strip indicating category or status

### Content Order

1. Time (if scheduled)
2. Title
3. Meta info (icons, avatars, status)

### States

- Default
- Hover
- Active / Selected
- Completed
- Overdue

---

## 9. Color System

### Primary Colors

- Deep Navy: Structure, sidebar, headings
- Electric Blue: Primary actions, active states

### Neutral Colors

- Soft light background for workspace
- White for cards and modals
- Grey for secondary text

### Semantic Colors

- Red: Errors, overdue tasks, destructive actions

---

## 10. Typography

### Font

- Inter or SF Pro Display

### Usage

- Bold: Dates, section headers, active task titles
- Medium: Navigation, labels
- Regular: Body text, descriptions

### Guidelines

- Avoid text-heavy screens
- Use spacing instead of lines

---

## 11. Components

### Buttons

- Primary: Solid, rounded, high contrast
- Secondary: Outline or subtle fill
- Destructive: Red, confirmation required

### Modals

- Centered
- Blurred backdrop
- Focus-trapped

### Notifications

- Toast-based
- Auto-dismiss
- Non-intrusive

---

## 12. Interaction & Motion

### Animation Principles

- Fast (150–250ms)
- Ease-in-out
- Purpose-driven

### Examples

- Task drag-and-drop
- Modal open/close
- Hover elevation

---

## 13. Responsiveness

### Desktop

- Full sidebar
- Multi-column layouts

### Tablet

- Collapsible sidebar
- Reduced density

### Mobile

- Drawer navigation
- Day view default
- Floating add button

---

## 14. Accessibility

- Keyboard navigable
- Visible focus states
- Sufficient color contrast
- Readable font sizes

---

## 15. MVP vs Future Design

### MVP Includes

- Auth
- Task CRUD
- Calendar placement
- Responsive layout

### Future Enhancements

- Dark mode
- Task priorities
- Reminders
- Team overlays

---

## 16. Design Success Criteria

- User understands core value within 10 seconds
- User can add a task within 2 interactions
- UI feels calm, not busy
- No unnecessary visual elements

---

**This design document defines Vera as a focused, modern productivity SaaS with strong portfolio and real-world credibility.**

---

# 17. Text-Based Wireframes (Per Screen)

> These wireframes describe layout, hierarchy, and component placement in text form. They are implementation-ready for frontend planning.

---

## 17.1 Login Screen

```
--------------------------------------------------
|                   Vera Logo                    |
|-----------------------------------------------|
|   Welcome back                                 |
|                                               |
|   [ Email Address __________________________ ] |
|   [ Password _______________________________ ] |
|                                               |
|   ( Login )                                   |
|                                               |
|   Forgot password? | Create account            |
--------------------------------------------------
```

---

## 17.2 Register Screen

```
--------------------------------------------------
|                   Vera Logo                    |
|-----------------------------------------------|
|   Create your account                          |
|                                               |
|   [ Email Address __________________________ ] |
|   [ Password _______________________________ ] |
|   [ Confirm Password _______________________ ] |
|                                               |
|   ( Create Account )                           |
|                                               |
|   Already have an account? Login               |
--------------------------------------------------
```

---

## 17.3 App Shell (After Login)

```
| Sidebar |---------------------------------------|
|         | Header: Date | View Toggle | + Add    |
|  Logo   |---------------------------------------|
|         |                                       |
|  Cal    |        Main Content Area              |
|  Tasks  |                                       |
|  Set    |                                       |
|         |                                       |
| Profile |---------------------------------------|
```

---

## 17.4 Dashboard Screen

```
--------------------------------------------------
| Today: Tuesday, Sept 12                        |
|-----------------------------------------------|
| Upcoming Tasks                                 |
| [ ] Finish report        Today 3:00 PM         |
| [ ] Team meeting         Tomorrow 10:00 AM     |
|                                               |
| Quick Add                                     |
| [ Write a task... __________________________ ] |
--------------------------------------------------
```

---

## 17.5 Calendar – Month View

```
--------------------------------------------------
| September 2026        Day | Week | Month  [+]  |
|-----------------------------------------------|
| Mon | Tue | Wed | Thu | Fri | Sat | Sun        |
|-----|-----|-----|-----|-----|-----|------------|
|     | [T] |     |     |     |     |            |
|     |Task |     |     |     |     |            |
|-----|-----|-----|-----|-----|-----|------------|
| ...                                             
--------------------------------------------------
```

---

## 17.6 Calendar – Day View (Timeline)

```
--------------------------------------------------
| Today – Sept 12        Day | Week | Month  [+] |
|-----------------------------------------------|
| 08:00 |                                      |
| 09:00 | [ Task Card: Standup Meeting ]       |
| 10:00 |                                      |
| 11:00 | [ Task Card: Deep Work Block ]       |
| 12:00 |                                      |
| ...                                          |
--------------------------------------------------
```

---

## 17.7 Task List Screen

```
--------------------------------------------------
| Tasks              All | Pending | Completed  |
|-----------------------------------------------|
| [ ] Design homepage                            |
| [ ] Fix login bug                              |
| [✓] Submit invoice                            |
|                                               |
| (+) Add Task                                  |
--------------------------------------------------
```

---

## 17.8 Task Detail Modal

```
------------------- MODAL ------------------------
| Task Title                                     |
|-----------------------------------------------|
| Description                                   |
| [ _________________________________ ]         |
|                                               |
| Status: Pending  | Time: 10:00–11:00           |
|                                               |
| ( Save )        ( Delete )                     |
--------------------------------------------------
```

---

# 18. PRD Feature → UI Component Mapping

> This section connects business requirements directly to UI and frontend components.

---

## 18.1 Authentication

| PRD Feature | UI Component |
|------------|-------------|
| User Registration | RegisterForm, InputField, PrimaryButton |
| User Login | LoginForm, InputField, PrimaryButton |
| Validation | InlineErrorMessage |
| Logout | UserMenu, LogoutButton |

---

## 18.2 Task Management

| PRD Feature | UI Component |
|------------|-------------|
| Create Task | AddTaskInput, TaskModal |
| View Tasks | TaskList, TaskItem |
| Update Task | TaskModal, EditableFields |
| Delete Task | DeleteConfirmationModal |
| Toggle Status | Checkbox, TaskItem |

---

## 18.3 Calendar Integration

| PRD Feature | UI Component |
|------------|-------------|
| View Calendar | CalendarGrid, CalendarHeader |
| Day / Week / Month | ViewToggle |
| Assign Task to Time | DraggableTaskCard |
| Resize Task Duration | ResizableTaskBlock |
| Highlight Current Date | ActiveDateIndicator |

---

## 18.4 UI & UX Requirements

| Requirement | UI Component |
|------------|-------------|
| Responsive Design | ResponsiveLayout, SidebarDrawer |
| Empty States | EmptyStateCard |
| Loading Feedback | SkeletonLoader |
| Notifications | ToastNotification |

---

## 18.5 Security & Access Control (UI-Level)

| PRD Requirement | UI Handling |
|----------------|------------|
| Protected Routes | AuthGuard |
| User-specific Data | ScopedTaskList |
| Unauthorized Access | RedirectToLogin |

---

# 19. Frontend Implementation Readiness

This document is now sufficient to:
- Start Figma wireframes
- Define React component tree
- Lock API contracts
- Begin frontend development confidently


