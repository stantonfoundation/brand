# Security

## Report a vulnerability

Do not report a security problem in a public issue, discussion or pull request.

1. Open <https://github.com/stantonfoundation/brand/security/advisories/new>, or select **Report a vulnerability** on the Security tab.
2. Give the file or URL, what an attacker can do, and the steps to reproduce it.

The report stays private until a maintainer publishes an advisory. Use the same form for a problem in the foundation's website, `stantonfoundation.org`. Its repository is private and cannot take reports, and the same maintainers read both.

## Scope

In scope:

- The stylesheet, tokens, logo files and icons in a release. The website installs them by tag.
- The style guide at <https://brand.stantonfoundation.org>.
- The GitHub Actions workflows in `.github/workflows/`.

## Supported versions

Only the latest release gets fixes. A fix ships as a new release, and Dependabot opens a pull request in the website to take it.

## What GitHub checks

- **CodeQL** scans JavaScript and the workflows, with the extended query suite, on every pull request into `main` and every push to `main`. The ruleset on `main` blocks a merge if CodeQL finds a security alert rated high or above, or an error.
- **Secret scanning** with push protection rejects a push that contains a known kind of credential.
- **Dependabot alerts** flag a dependency with a known vulnerability. **Dependabot security updates** open a pull request with the fix.
- **Dependabot version updates** (`.github/dependabot.yml`) propose routine updates weekly.
