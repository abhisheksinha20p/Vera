# Vera v2 - Implementation Task List
Based on [Comprehensive Design Document](vera_new_design_document.md)

## Phase 1: Core Layout & Shell Refinement
- [x] **App Shell**
    - [x] Inspect/Update Sidebar width (Fixed 240-280px) & Color (Deep Navy)
    - [x] Create Global Header (Date, View Toggle, key actions)
    - [x] Ensure Main Content area is full-height and scrollable
- [x] **Navigation**
    - [x] Update Sidebar links: Dashboard, Calendar, Tasks, Settings
    - [x] Implement "Active" state visualization (Electric Blue highlight)
- [x] **Mobile Responsive**
    - [x] Implement Drawer Navigation (Hamburger menu) for mobile
    - [x] Ensure Sidebar collapses/hides on small screens

## Phase 2: Calendar Feature (New Primary Feature)
- [x] **Calendar Foundation**
    - [x] Select React Calendar library (e.g., `react-big-calendar` or `fullcalendar`)
    - [x] Create `Calendar` page route
- [ ] **Calendar Views**
    - [x] Implement **Month View** (Grid layout)
    - [x] Implement **Day View** (Timeline layout)
    - [x] Add View Toggle (Day/Week/Month)
    - [x] Implement Navigation (Next/Today/Back) & Clock
- [x] **Task Integration**
    - [x] Display Task Cards within calendar time slots
    - [x] Differentiate "Time-bound" vs "All-day/Unscheduled" tasks
    - [x] Auto-schedule tasks to "Now" if time not provided
- [x] **Interactions**
    - [x] Click to open Task Detail Modal
    - [x] (Advanced) Drag & Drop to reschedule
    - [x] (Advanced) Resize to adjust duration

## Phase 3: Dashboard Overhaul
- [x] **Summary View**
    - [x] Display "Today's Date" prominently
    - [x] Show "Upcoming Tasks" (Limited list, e.g., next 3-5 items)
    - [x] Create "Quick Add" input field (Inline task creation)
- [x] **Empty States**
    - [x] Design "Calm" empty state when no tasks exist today

## Phase 4: Task Management Polish
- [x] **Task Card Design**
    - [x] Update card styling: White surface, Rounded corners (8-12px), Subtle shadow
    - [x] Add "Left color strip" for status/category
- [x] **Task List View**
    - [x] Verify Filters (All/Pending/Completed) work as expected
    - [x] Ensure vertical list layout matches wireframes

## Phase 5: Components & UI Design
- [x] **Modals**
    - [x] Verify "Glassmorphism" backdrop (`backdrop-blur-md`)
    - [x] Ensure Focus trapping (Need to verify robust implementation)
- [x] **Toasts / Notifications**
    - [x] Implement Toast system for actions (Create/Delete/Error)
- [x] **Typography & Color**
    - [x] Audit application for "Inter" font usage
    - [x] Enforce "Electric Blue" for primary actions
    - [x] Enforce "Deep Navy" for headers/sidebar

## Phase 6: Settings & User Profile
- [x] **Profile Section**
    - [x] Display User avatar/initials in Sidebar
    - [x] Logout functionality (verify placement)
- [x] **Settings Page**
    - [x] Create placeholder Settings page

## Phase 7: Final Polish & Testing
- [x] **Calm Productivity Check**
    - [x] Remove aggressive alerts
    - [x] Verify animations are fast (150-250ms)
- [x] **Unit & Integration Testing**
    - [x] Test Calendar rendering
    - [x] Test Drag & Drop (if implemented)
