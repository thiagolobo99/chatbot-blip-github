var returnGit = require('../connectors/githubApi')
const router = require('express').Router()

//Main route with http return:
router.get(`/`, async function (req, res) {
    try {
        var returnData = await returnGit.searchGitRep()
        res.status(200).send(returnData)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router