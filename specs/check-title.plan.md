# Check Title Test Plan

## Application Overview

Test plan to verify page title behavior across standard, edge, and negative scenarios. Covers exact match, substring, dynamic updates, missing/long/special-character titles, negative checks, and a performance assertion. Assumes a fresh browser state for each scenario.

## Test Scenarios

### 1. Check Title

**Seed:** `tests/seed.spec.ts`

#### 1.1. Exact Title Match

**File:** `specs/check-title/exact-title.spec.ts`

**Steps:**
  1. Navigate to the application home page (`/`).
    - expect: Page navigates to the home URL successfully.
  2. Wait for the main content to finish loading.
    - expect: Network idle or main content visible.
  3. Read the page title.
    - expect: Title is exactly "Expected Title".
    - expect: Success criteria: title string equals expected value.
    - expect: Failure condition: title differs by any character.

#### 1.2. Title Contains Substring

**File:** `specs/check-title/title-contains.spec.ts`

**Steps:**
  1. Navigate to the target page where the title should contain a substring.
    - expect: Page loads successfully.
  2. Read the page title.
    - expect: Title contains the substring "Expected".
    - expect: Success criteria: substring appears anywhere in the title.
    - expect: Failure condition: substring missing.

#### 1.3. Dynamic Title Update After Navigation (SPA)

**File:** `specs/check-title/dynamic-title.spec.ts`

**Steps:**
  1. Start at the app root (`/`) in a fresh session.
    - expect: Root page loads.
  2. Trigger in-app navigation (click a route link or perform the action that changes route).
    - expect: Route change occurs; new content visible.
  3. Wait up to 2s for the title to update.
    - expect: Title updates to "Dashboard - Expected" within timeout.
    - expect: Success: observed title change matches expected.
    - expect: Failure: title stays unchanged or incorrect.

#### 1.4. Missing Title Fallback

**File:** `specs/check-title/missing-title.spec.ts`

**Steps:**
  1. Open a page known to omit the `<title>` tag or serve an empty title.
    - expect: Page loads.
  2. Read the document title.
    - expect: Title is empty or undefined, and the app uses fallback behavior (e.g., displays site name in header).
    - expect: Success: application handles missing title gracefully (no JS errors).
    - expect: Failure: uncaught errors or blank UX where a title is required.

#### 1.5. Very Long Title Handling

**File:** `specs/check-title/long-title.spec.ts`

**Steps:**
  1. Open a page with an intentionally very long title (>200 characters).
    - expect: Page loads.
  2. Read the page title and verify rendering behavior in the DOM.
    - expect: Title string matches the long value exactly.
    - expect: Success: title available in `document.title` and UI does not crash.
    - expect: Failure: title truncated or causes layout/JS failures.

#### 1.6. International / Special Characters

**File:** `specs/check-title/international-title.spec.ts`

**Steps:**
  1. Open a page with a title containing non-ASCII characters (e.g., 日本語, emojis).
    - expect: Page loads.
  2. Read the page title.
    - expect: Title matches expected Unicode string exactly.
    - expect: Success: characters render correctly and no encoding errors occur.
    - expect: Failure: garbled characters or encoding issues.

#### 1.7. Negative: Wrong Title Should Fail

**File:** `specs/check-title/negative-wrong-title.spec.ts`

**Steps:**
  1. Navigate to the page under test.
    - expect: Page loads.
  2. Assert the title equals an intentionally incorrect value.
    - expect: Assertion fails and test reports mismatch.
    - expect: Success: test fails as expected demonstrating negative check.
    - expect: Failure: test passes (indicates assertion or test harness issue).

#### 1.8. Performance: Title Available Within 2s

**File:** `specs/check-title/perf-title-load.spec.ts`

**Steps:**
  1. Navigate to the page and start a timer when navigation begins.
    - expect: Navigation starts.
  2. Wait for the title to be non-empty or for `document.title` to update.
    - expect: `document.title` becomes non-empty within 2000 ms.
    - expect: Success: title available within threshold.
    - expect: Failure: title not available in time or significant delay.
