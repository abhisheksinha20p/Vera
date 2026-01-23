# Vera v2 - Implementation Task List
Based on [Comprehensive Design Document](vera_new_design_document.md)

## Phase 1: Core Layout & Shell Refinement
- [ ] **App Shell**
    - [ ] Inspect/Update Sidebar width (Fixed 240-280px) & Color (Deep Navy)
    - [ ] Create Global Header (Date, View Toggle, key actions)
    - [ ] Ensure Main Content area is full-height and scrollable
- [ ] **Navigation**
    - [ ] Update Sidebar links: Dashboard, Calendar, Tasks, Settings
    - [ ] Implement "Active" state visualization (Electric Blue highlight)
- [ ] **Mobile Responsive**
    - [ ] Implement Drawer Navigation (Hamburger menu) for mobile
    - [ ] Ensure Sidebar collapses/hides on small screens

## Phase 2: Calendar Feature (New Primary Feature)
- [ ] **Calendar Foundation**
    - [ ] Select React Calendar library (e.g., `react-big-calendar` or `fullcalendar`)
    - [ ] Create `Calendar` page route
- [ ] **Calendar Views**
    - [ ] Implement **Month View** (Grid layout)
    - [ ] Implement **Day View** (Timeline layout)
    - [ ] Add View Toggle (Day/Week/Month)
- [ ] **Task Integration**
    - [ ] Display Task Cards within calendar time slots
    - [ ] Differentiate "Time-bound" vs "All-day/Unscheduled" tasks
- [ ] **Interactions**
    - [ ] Click to open Task Detail Modal
    - [ ] (Advanced) Drag & Drop to reschedule
    - [ ] (Advanced) Resize to adjust duration

## Phase 3: Dashboard Overhaul
- [ ] **Summary View**
    - [ ] Display "Today's Date" prominently
    - [ ] Show "Upcoming Tasks" (Limited list, e.g., next 3-5 items)
    - [ ] Create "Quick Add" input field (Inline task creation)
- [ ] **Empty States**
    - [ ] Design "Calm" empty state when no tasks exist today

## Phase 4: Task Management Polish
- [ ] **Task Card Design**
    - [ ] Update card styling: White surface, Rounded corners (8-12px), Subtle shadow
    - [ ] Add "Left color strip" for status/category
- [ ] **Task List View**
    - [ ] Verify Filters (All/Pending/Completed) work as expected
    - [ ] Ensure vertical list layout matches wireframes

## Phase 5: Components & UI Design
- [ ] **Modals**
    - [ ] Verify "Glassmorphism" backdrop (`backdrop-blur-md`)
    - [ ] Ensure Focus trapping
- [ ] **Toasts / Notifications**
    - [ ] Implement Toast system for actions (Create/Delete/Error)
- [ ] **Typography & Color**
    - [ ] Audit application for "Inter" font usage
    - [ ] Enforce "Electric Blue" for primary actions
    - [ ] Enforce "Deep Navy" for headers/sidebar

## Phase 6: Settings & User Profile
- [ ] **Profile Section**
    - [ ] Display User avatar/initials in Sidebar
    - [ ] Logout functionality (verify placement)
- [ ] **Settings Page**
    - [ ] Create placeholder Settings page

## Phase 7: Final Polish & Testing
- [ ] **Calm Productivity Check**
    - [ ] Remove aggressive alerts
    - [ ] Verify animations are fast (150-250ms)
- [ ] **Unit & Integration Testing**
    - [ ] Test Calendar rendering
    - [ ] Test Drag & Drop (if implemented)
