# TidyQuest — Release Notes

---

## v1.x.0 — 2026-02-23

### Overview

This release introduces **custom coin distribution** for multi-user task assignment, giving admins granular control over how coins are split between assignees. Room-to-task assignment propagation has been improved and a fifth language (Italian) has been added.

---

### New Features

#### Custom Assignment Mode

A third assignment mode — **Custom** — has been added alongside the existing "First" and "Shared" modes.

- When assigning a task to 2 or more users, admins can now select **Custom** to define a specific coin percentage per user (e.g. 70% / 30%).
- The percentage inputs appear per user when Custom is selected, with a real-time total indicator (green ✓ when exactly 100%, red ✗ otherwise).
- The Save button is disabled until percentages sum to exactly 100%.
- Percentages are pre-filled when editing an existing custom-assigned task.
- The Assigned column in the task table displays the distribution inline: `Alice (70%) + Bob (30%)`.
- The Admin Complete modal shows the percentage badge next to each user's name.
- Server-side validation rejects saves if percentages do not sum to 100%.

#### Italian Language Support

TidyQuest now supports **5 languages**: English, French, German, Spanish, and **Italian**.

All UI strings, task names, achievement descriptions, and system messages are fully translated.

#### Room Assignment Propagates to Tasks

When a room is assigned to a user, all tasks in that room are now automatically assigned to that user at the task level as well.

- Applies both when **creating a new room** with an assignee, and when **updating the assignment** of an existing room via the dropdown.
- When **creating a new task** inside an already-assigned room, the task is automatically assigned to the room owner.
- **Conflict protection with confirmation**: if a room contains tasks already assigned to a *different* user, a warning dialog appears listing the conflicting task names. The admin can confirm to force-reassign all tasks to the new room owner, or cancel to leave assignments unchanged.

#### Settings Visibility by Role

Settings sections that are not relevant to children are now hidden to reduce confusion.

- **Vacation Mode** is hidden for children — only admins can enable or disable it.
- **Export / Import Data** is hidden for both children and members — this is an admin-only function.

---

### Bug Fixes

- **`assignmentMode` missing from dashboard response** — tasks served via the dashboard endpoint were missing the `assignmentMode` field, causing incorrect Done button state and shared/custom completion logic to silently fail.
- **`coinPercentage` missing from rooms GET endpoint** — the `GET /rooms` route was not including `coinPercentage` in `assignedUsers`, causing the custom mode percentage display to show 0% after a page reload.
- **`sharedCompletions` not populated for custom mode** — the rooms GET and tasks GET endpoints were only populating `sharedCompletions` for `shared` mode, not `custom`, breaking per-user completion tracking in custom mode.

---

### Summary of Changes

| # | Area | Type | Description |
|---|---|---|---|
| 1 | Task Assignment | Feature | New "Custom" mode with per-user coin percentage |
| 2 | Task Assignment | Feature | Percentage inputs with real-time total validation |
| 3 | Admin Complete Modal | Feature | Percentage badge per user in custom mode |
| 4 | i18n | Feature | Italian language added (5th language) |
| 5 | Room Assignment | Feature | Room assignment now propagates to all tasks in the room |
| 6 | Room Assignment | Feature | New task in assigned room auto-assigned to room owner |
| 7 | Room Assignment | Feature | Conflict: warning dialog with force-reassign confirmation when tasks have different assignees |
| 8 | Server | Fix | `assignmentMode` now included in dashboard task response |
| 9 | Server | Fix | `coinPercentage` now included in rooms GET `assignedUsers` |
| 10 | Server | Fix | `sharedCompletions` now populated for custom mode in all endpoints |
| 11 | Server | Fix | Server-side validation: custom percentages must sum to 100 |
| 12 | i18n | Improvement | `modeShared` label renamed from "Duo / Shared" to "Shared" in all 5 languages |
| 13 | Settings | Improvement | Vacation Mode hidden for children (admin-only setting) |
| 14 | Settings | Improvement | Export / Import Data hidden for children and members (admin-only) |

---

## v1.x.0 — 2026-02-22

### Overview

This release focuses on admin control, task visibility, and UX polish. Admins gain new tools to manage coin balances and undo accidental completions. Assignment information is now clearly surfaced in the task table. Several settings sections have been cleaned up to show only what is relevant to each role.

---

### New Features

#### Task Assignment Column in Room Detail

The task table in Room Detail now includes a dedicated **Assigned** column, positioned between Effort and Actions. This replaces the previous inline indicator that appeared within the task name.

- When a room is assigned to a user, all tasks in that room display that user in the Assigned column.
- When a task is individually assigned (without a room-level assignment), that user is shown instead.
- Tasks assigned to the children group display the 👨‍👩‍👧 icon.
- Unassigned tasks display a dash (—).

#### Admin: Undo Task Completion

Admins can now cancel a task completion directly from the interface, without needing to manually adjust coins.

- A **🔄 undo button** appears next to the greyed-out "Done by X" button on completed tasks (visible to admins only).
- Clicking the button cancels the completion and automatically refunds the earned coins to the user.
- The same capability is available in the **Activity / History page**: each row now shows a **🗑 trash icon** for admins.
- Clicking the trash icon triggers an inline **✓ / ✗ confirmation** before the deletion is applied.
- Coins are deducted from the user's balance upon confirmation.

#### Admin: Coin Balance Adjustment

In **Settings → Family Members → Manage Member**, admins can now view and adjust the coin balance of individual family members.

- The current coin balance is displayed for each member.
- A number input and **Adjust** button allow admins to add or remove coins (positive = add, negative = remove).
- The balance is clamped to a minimum of 0 (no negative balances).

---

### Improvements

#### Room Assignment Display

The room assignment indicator has been redesigned for clarity.

- The indicator has moved from an inline subtitle position to a **pill/badge displayed below the room title**.
- The badge shows the assigned user's avatar and name in a rounded chip format.
- Fixed a bug where tasks in a room assigned to a user were incorrectly displaying — in the Assigned column instead of the room-level assignee.

#### Settings Visibility by Role

Settings sections that are non-functional for children are now hidden from their view entirely, reducing confusion.

| Setting | Children | Members | Admins |
|---|---|---|---|
| Vacation Mode | Hidden | Visible | Visible |
| Notifications | Hidden | Visible | Visible |
| Export / Import Data | Hidden | Hidden | Visible |

---

### Bug Fixes

#### Weekend Warrior Achievement

The **Weekend Warrior** achievement was incorrectly evaluating the wrong condition.

- **Before:** Triggered after completing 5 tasks in any one calendar week.
- **After:** Correctly triggers after completing 5 tasks on a **Saturday or Sunday** during the most recent weekend.
- The achievement description has been updated across all 5 supported languages: English, French, German, Spanish, and Italian.

---

### Summary of Changes

| # | Area | Type | Description |
|---|---|---|---|
| 1 | Room Detail | Feature | Dedicated Assigned column in task table |
| 2 | Task Completion | Feature | Admin undo of task completion with coin refund |
| 3 | Activity / History | Feature | Admin trash icon with inline confirmation to cancel a completion |
| 4 | Settings | Feature | Admin coin balance view and adjustment per member |
| 5 | Room Detail | Improvement | Room assignment pill/badge redesign |
| 6 | Room Detail | Fix | Room-level assignment now propagates to task Assigned column |
| 7 | Settings | Improvement | Vacation mode, notifications, and export/import hidden for children |
| 8 | Achievements | Fix | Weekend Warrior logic corrected; descriptions updated in 5 languages |
| 9 | Room Detail | Feature | Coins column showing earnable coins per task (based on effort config) |
