const getCurrFolder = require(app.vault.adapter.getBasePath() + "/_scripts/getCurrFolder.js");
function getRelFileLink(currPath, parent_level, alias, path) {
    return(`[${alias}](file:///${getCurrFolder(currPath, parent_level)}/${path.replaceAll(/\s+/g, "%20")})`)
}
module.exports = getRelFileLink;