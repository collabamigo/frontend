# Welcome to CollabAmigo contributing guide <!-- omit in toc -->

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected
on [collabamigo.com](https://collabamigo.com/en) :sparkles:.

Read our [Code of Coduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and
merging the PR.

Use the table of contents icon <img src="https://raw.githubusercontent.com/github/docs/main/assets/images/table-of-contents.png" width="25" height="25" /> on the top
left corner of the this document to get to a specific section of this guide quickly.

## New contributor guide

See the [README](README.md) to get an overview of the project. Here are some helpful resources to get you comfortable
with open source contribution:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

## Getting started

If you fork the repository, always remember to work upon the `testing` branch, not the `main` one. Clone your branch/fork
and then checkout the relevant branch. For compatibility reason, it is advised to use [nvm](https://github.com/nvm-sh/nvm)
 by installing it and then running `nvm use` in the root of the cloned directory.

### Issues

#### Create a new issue

If you spot a problem with the
docs, [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments)
. If a related issue doesn't exist, you can open a new issue.

#### Solve an issue

Scan through our [existing issues](https://github.com/watson-hex/frontend-collabamigo/issues) to find one that interests you. You can narrow
down the search using `labels` as filters.


### Commit your update

Commit the changes once you are happy with them.
See [Atom's contributing guide](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages) to know
how to use emoji's for commit messages.


### Pull Request

When you're done making the changes, open a pull request, often referred to as a PR.

- Fill out the "Ready for review" template so we can review your PR. This template helps reviewers understand your
  changes and the purpose of your pull request.
- Don't forget
  to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
  if you are solving one.
- Enable the checkbox
  to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork)
  so the branch can be updated for a merge. Once you submit your PR, a Docs team member will review your proposal. We
  may ask questions or request for additional information.
- We may ask for changes to be made before a PR can be merged, either
  using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request)
  or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in
  your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation
  as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations)
  .
- If you run into any merge issues, checkout
  this [git tutorial](https://lab.github.com/githubtraining/managing-merge-conflicts) to help you resolve merge
  conflicts and other issues.

### Your PR is merged!

Congratulations :tada::tada: The CollabAmigo team thanks you :sparkles:.

Once your PR is merged, your contributions will be publicly visible on [CollabAmigo](https://collabamigo.com/).

## Windows

This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix based systems use `\n`. Therefore when working
   on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The
   Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line
   marker.
2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could
   use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes -
   like for constructing URLs - or ensure your code works with either.
3. Filename too long error: There is a 260 character limit for a filename when Git is compiled with `msys`. While the
   suggestions below are not guaranteed to work and could possibly cause other issues, a few workarounds include:
    - Update Git configuration: `git config --system core.longpaths true`
    - Consider using a different Git client on Windows
4. The `Fast Refresh` feature of NextJS is known to cause issues on Windows. While the suggestions below are not
   guaranteed to work and could possibly cause other issues, a workaround that worked for us is:
    - Set up a WSL environment and clone your project into it. Most popular IDEs ([VSCode](https://code.visualstudio.com/docs/remote/wsl), 
   [PyCharm](https://www.jetbrains.com/help/idea/how-to-use-wsl-development-environment-in-product.html)) support development through WSL.
