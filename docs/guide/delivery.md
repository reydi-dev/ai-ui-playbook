# 05 · Commit and deliver

Each approved section needs a clear recovery point. At task completion, the technical lead should be able to review the branch using the change description and test instructions.

<div class="chapter-note">

**Outcome:** Focused commits for approved sections and one reviewable merge request at the end of the task.

</div>

## Required inputs

- A separate task branch and the team's intended target branch.
- Visual and behavioral review results.
- Approved decisions and remaining limitations.
- The final diff and files belonging to the task.

## Before each commit

Inspect Git status and the diff. Do not include unrelated work from yourself or others. Exclude generated output, secrets, and real test records. Do not delete unrelated changes merely to produce a clean Git status.

In this handbook's example workflow, commit messages are clear and written in Persian:

- «هماهنگ‌سازی کارت‌های انتخاب سرویس در دسکتاپ» — align desktop service cards.
- «اصلاح چینش دریافت‌ها در موبایل» — fix mobile receipt layout.
- «حفظ اطلاعات فرم هنگام برگشت به مرحله قبل» — preserve form data when returning.

Messages such as “updates” or “UI fixes” do not explain the change.

## Approved-stage commit prompt

```text
I have reviewed and approved [section].
Inspect Git status and the diff again.
Stage and commit only changes belonging to this section.
Preserve unrelated work; exclude sensitive files and generated output.
Suggested Persian commit message: [specific message]
If a file contains mixed changes that cannot be separated safely, report that before staging.
After committing, report the commit ID and remaining working-tree changes.
Do not push yet.
```

## End-of-task review request

GitHub calls it a Pull Request; GitLab commonly calls it a Merge Request. This handbook uses “merge request” for the review process.

Check the overall flow before creating it. Individual sections can work while transitions between them fail. Include desktop, mobile, and important shared consumers affected by the changes.

In the example workflow, the manager runs and reviews the branch comprehensively. Screenshots are not mandatory; reproduction and test instructions must support reviewing the running version. Do not merge automatically before review.

## Merge request description template

```text
Title: [specific outcome]

Problem and result:
[previous behavior and resulting behavior]

Scope:
[pages, states, desktop/mobile]

Logic or contract changes:
[none, or the precise approved change]

How to review:
1. [starting route and internal test scenario identifier]
2. [action]
3. [expected result]

Validation completed:
[test or scenario + observed result]

Limitations and checks not run:
[explicit description or "none"]

Design decisions:
[approved exceptions, if any]
```

In a public repository, exclude real identifiers, private Figma links, and screenshots of internal data. Refer reviewers to the team's internal access process where needed.

## Checklist and completion criteria

- Each stage has a focused, descriptive commit.
- The target branch and final diff scope are correct.
- Checks not run are disclosed.
- Someone outside the conversation can follow the testing instructions.
- Cleanup, API, and shared-component changes have no unexplained impact.
- The merge request is ready for the manager's review.

Pushing, creating a review request, and merging are separate actions. Explicitly state which action you authorize and which must wait.

## Use fewer tokens

Build the description from the final outcome and test evidence. Include abandoned approaches or conversational history only when needed to explain the final decision.
