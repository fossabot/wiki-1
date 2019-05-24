workflow "Build Docs" {
  on = "push"
  resolves = ["Deploy Docs"]
}

action "Filter Master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Update version" {
  uses = "clay/docusaurus-github-action/versions@master"
}

action "Deploy Docs" {
  needs = ["Filter Master", "Update version"]
  uses = "clay/docusaurus-github-action/build_deploy@master"
  secrets = ["DEPLOY_SSH_KEY", "ALGOLIA_API_KEY"]
}
