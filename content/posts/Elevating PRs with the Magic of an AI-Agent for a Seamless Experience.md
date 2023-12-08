---
title: "Elevating PRs With the Magic of an AI Agent for a Seamless Experience"
date: 2023-12-08T19:29:12+03:00
draft: false
tags: ["ai", "opensource", "git", "pr"]
weight: 100
ShowToc: true
---

## Pull Request

A pull request (PR) is a fundamental concept in version control systems, particularly in distributed version control systems like Git. It is a mechanism used to propose changes to a codebase in a collaborative software development environment.

## [](https://dev.to/tinegagideon/elevating-prs-with-the-magic-of-an-ai-agent-for-a-seamless-experience-pr-agent-vs-copilot-for-prs-3pm1#benefits-of-a-pull-request-workflow)Benefits of a pull request workflow

1.  Isolation of Changes: Each pull request is associated with a specific branch, allowing changes to be isolated until they are thoroughly reviewed and tested.
2.  Collaborative Code Review: They facilitate collaborative code reviews, allowing multiple team members to review and discuss proposed changes before merging.
3.  Continuous Integration: Integration with CI tools ensures that changes do not break existing functionality and meet project standards before being merged.
4.  Improve code quality and performance: When creating a pull request, you're inviting a colleague to review your code, seeking constructive feedback. This collaborative process aims to enhance code quality through the insights and suggestions provided by the reviewer.

Pull requests play a pivotal role in version control systems. Tools like Copilot for PRs and CodiumAI PR-Agent serve the purpose of enhancing PR descriptions and facilitating faster review and merging processes, thereby contributing to improved collaboration within your team.

## [](https://dev.to/tinegagideon/elevating-prs-with-the-magic-of-an-ai-agent-for-a-seamless-experience-pr-agent-vs-copilot-for-prs-3pm1#codiumais-pragent)CodiumAI's PR-Agent

[CodiumAI's PR-Agent](https://www.codium.ai/products/git-plugin/) is an **open source** AI agent tool designed to streamline and expedite the process of reviewing pull requests (PRs). This tool automatically analyzes both the commits and the PR itself, delivering various types of feedback to enhance the efficiency of the review process. CodiumAI's PR Agent features include:

- **PR Review**: Feedback about the PR main theme, type, relevant tests, security issues, focused PR, and various suggestions for the PR content.
- **Auto-Description**: Automatically generating PR description - name, type, summary, and code walkthrough.
- **Question Answering**: Answering free-text questions about the PR.
- **Code Suggestion**: Committable code suggestions for improving the PR.

### [](https://dev.to/tinegagideon/elevating-prs-with-the-magic-of-an-ai-agent-for-a-seamless-experience-pr-agent-vs-copilot-for-prs-3pm1#getting-started-with-codiumais-pragent)Getting started with CodiumAI's PR-Agent

- For public repositories

Just mention the name `@CodiumAI-Agent` in your git provider environment and ask to **/review**, **/describe**, **/improve**, or **/ask** anything e.g. "Is my PR documented enough?", and the agent will perform these tasks for you.

- For private repositories and open-source projects:

You will first need to install the app on you private repo. Just follow this detailed [step by step guide](https://github.com/Codium-ai/pr-agent/blob/main/INSTALL.md). Then summon your pull request helping agent easily, just write /review, /describe, /improve or /ask anything e.g. "is my PR documented enough?", and the agent will perform these tasks for you.

### [](https://dev.to/tinegagideon/elevating-prs-with-the-magic-of-an-ai-agent-for-a-seamless-experience-pr-agent-vs-copilot-for-prs-3pm1#try-it-its-free)Try it it's Free

In any PR comment on your public GitHub repository, mention `@CodiumAI-Agent` with a desired command in any PR comment. The agent will generate a response based on your command.

### [](https://dev.to/tinegagideon/elevating-prs-with-the-magic-of-an-ai-agent-for-a-seamless-experience-pr-agent-vs-copilot-for-prs-3pm1#pragent-commands)PR-Agent Commands

Explore the links for in-depth details and examples related to the commands.

✅ [/review](https://github.com/Codium-ai/pr-agent/blob/main/docs/REVIEW.md): Scans the PR code changes, and automatically generates a PR review.

[![review example](https://res.cloudinary.com/practicaldev/image/fetch/s--lTMuY-NR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m7lxglebdqlgv6d4vjsn.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--lTMuY-NR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m7lxglebdqlgv6d4vjsn.png)

✅ [/ask "..."](https://github.com/Codium-ai/pr-agent/blob/main/docs/ASK.md): Answers questions about the PR, based on the PR code changes.

[![ask example](https://res.cloudinary.com/practicaldev/image/fetch/s--1i-oOspE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c3x69obnkxtq02l4jpx9.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--1i-oOspE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c3x69obnkxtq02l4jpx9.png)

✅ [/improve](https://github.com/Codium-ai/pr-agent/blob/main/docs/IMPROVE.md): Scans the PR code changes, and automatically generates committable suggestions for improving the PR code.

[![improve example](https://res.cloudinary.com/practicaldev/image/fetch/s--RyvL1-Dy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hjrlivxwgwpew0byqeqe.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--RyvL1-Dy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hjrlivxwgwpew0byqeqe.png)

✅ [/describe](https://github.com/Codium-ai/pr-agent/blob/main/docs/DESCRIBE.md): Scans the PR code changes, and automatically generates PR description - title, type, summary, code walkthrough and labels.

✅ [/add_docs](https://github.com/Codium-ai/pr-agent/blob/main/docs/ADD_DOCUMENTATION.md): Scans the PR code changes, and automatically suggests documentation for the undocumented code components (functions, classes, etc.).

✅ [/similar_issue](https://github.com/Codium-ai/pr-agent/blob/main/docs/SIMILAR_ISSUE.md): Retrieves the most similar issues to the current issue.

✅ [/update_changelog](https://github.com/Codium-ai/pr-agent/blob/main/docs/UPDATE_CHANGELOG.md): Automatically updates the CHANGELOG.md file with the PR changes.

✅ [/generate_labels](https://github.com/Codium-ai/pr-agent/blob/main/docs/GENERATE_CUSTOM_LABELS.md): Scans the PR code changes, and given a list of labels and their descriptions, it automatically suggests labels that match the PR code changes.

## [](https://dev.to/tinegagideon/elevating-prs-with-the-magic-of-an-ai-agent-for-a-seamless-experience-pr-agent-vs-copilot-for-prs-3pm1#copilot-for-prs)Copilot for PRs

[Copilot for PRs](https://githubnext.com/projects/copilot-for-pull-requests) brings the power of Copilot to the PR experience, to help you write better PR descriptions, and to help your team review and merge PRs faster. Copilot for PRs features include:

- **Suggestions for your pull request description** : allows developers to insert marker tags in their pull request description. When the description is saved, Copilot will expand the marker into a description of the changes in the pull request.
- **AI-powered review responses**: auto-generate changes in response to requests to add documentation or even to add another test
- **AI-powered PR repair**: Proposes a fix to forgotten documentation and unit test updates during the PR process.
- **AI-powered PR completion**: Copilot's bot is being empowered with the capability to complete pull requests given a few indicative edits such as adding comments to all your functions, throughout all your code.
- **Gentest**: Copilot's prototype uses AI to identify changes in your PR that may be lacking tests, and suggests tests for you to build on or use directly.
- **Resolving issues with AI**: automatically describes how to solve an issue and even to automatically suggest the changes you need to make.

### [](https://dev.to/tinegagideon/elevating-prs-with-the-magic-of-an-ai-agent-for-a-seamless-experience-pr-agent-vs-copilot-for-prs-3pm1#getting-started-with-copilot-for-prs)Getting started with Copilot for PRs

1.  Sign in with GitHub. This dashboard will be used to manage your Copilot for PRs settings.
2.  Install the GitHub App. You must have admin access to the repository or be an owner of the organization to install the GitHub App.
3.  Add your repos to the waitlist. Copilot for PRs is available as a technical preview in order to identify if it brings value to our users. We're limited on capacity, so you'll need to add your repositories to our waitlist.
4.  Include marker tags in your PR description. Copilot will automatically expand them for you.

### [](https://dev.to/tinegagideon/elevating-prs-with-the-magic-of-an-ai-agent-for-a-seamless-experience-pr-agent-vs-copilot-for-prs-3pm1#copilot-for-prs-markerscommands)Copilot for PRs Markers/commands

`copilot:all`: showcases all the different kinds of content in one go.  
`copilot:summary`: expands to a one-paragraph summary of the changes in the pull request.  
`copilot:walkthrough`: expands to a detailed list of changes, including links to the relevant pieces of code.  
`copilot:poem`: expands to a poem about the changes in the pull request.

## [](https://dev.to/tinegagideon/elevating-prs-with-the-magic-of-an-ai-agent-for-a-seamless-experience-pr-agent-vs-copilot-for-prs-3pm1#comparison)Comparison

### [](https://dev.to/tinegagideon/elevating-prs-with-the-magic-of-an-ai-agent-for-a-seamless-experience-pr-agent-vs-copilot-for-prs-3pm1#platforms)Platforms 💻

CodiumAI's PR-Agent offers extensive compatibility with various Git providers such as GitHub, GitLab, Bitbucket, and CodeCommit. Its versatility is showcased through multiple usage options including CLI, GitHub Action, GitHub App, Docker, among others. While Copilot for PRs currently caters exclusively to GitHub, this platform-specific support seamlessly integrates with GitHub workflows. Additionally, PR-Agent provides users with the flexibility to choose from a diverse range of models, including GPT-4, GPT-3.5, Anthropic, Cohere, and Llama2, allowing for a customized experience based on specific project requirements or user preferences.

### [](https://dev.to/tinegagideon/elevating-prs-with-the-magic-of-an-ai-agent-for-a-seamless-experience-pr-agent-vs-copilot-for-prs-3pm1#source-code)Source code 📜

CodiumAI's PR-Agent operates on an open-source basis, actively encouraging contributions from the community. In contrast, GitHub Copilot is not open source; it is a proprietary product developed by GitHub, a subsidiary of Microsoft. While GitHub Copilot utilizes OpenAI's Codex model as its underlying technology, the specific implementation and integration with GitHub remain proprietary.

### [](https://dev.to/tinegagideon/elevating-prs-with-the-magic-of-an-ai-agent-for-a-seamless-experience-pr-agent-vs-copilot-for-prs-3pm1#ease-of-use)Ease of Use 👍

When it comes to installation and use case scenarios, CodiumAi provides excellent documentation and clear, easy-to-follow explanations. As of right now, Copilot for PRs documentation is not as informative. In addition PR-Agent commands are concise and provide detailed feedback.

### [](https://dev.to/tinegagideon/elevating-prs-with-the-magic-of-an-ai-agent-for-a-seamless-experience-pr-agent-vs-copilot-for-prs-3pm1#data-privacy)Data Privacy 🕵️

CodiumAI empowers developers who prioritize privacy to independently host their PR-Agent instances, with a steadfast commitment: no user data is stored or used for training purposes. In contrast, GitHub Copilot Business gathers personal data across three categories: User Engagement Data, Prompts, and Suggestions.

### [](https://dev.to/tinegagideon/elevating-prs-with-the-magic-of-an-ai-agent-for-a-seamless-experience-pr-agent-vs-copilot-for-prs-3pm1#pricing)Pricing 💰

CodiumAI's PR-Agent is available for free, in contrast to GitHub Copilot, which comes with a price tag of $10 USD per month or $100 USD per year. Nonetheless, GitHub Copilot does offer a complimentary tier for students and educators.

## [](https://dev.to/tinegagideon/elevating-prs-with-the-magic-of-an-ai-agent-for-a-seamless-experience-pr-agent-vs-copilot-for-prs-3pm1#conclusion)Conclusion

By automatically generating detailed pull request descriptions, providing intelligent code suggestions, and ensuring documentation accuracy, CodiumAI sets itself apart with unparalleled depth and customization. Unlike settling for less, users embrace a tool that evolves with them, thanks to its open-source nature. CodiumAI serves as a community-driven platform, incorporating diverse expertise to cater to the ever-changing needs of developers. Acting as a coding companion, it supports users in tasks ranging from intricate code reviews to generating test cases, answering queries, and streamlining changelog updates.
