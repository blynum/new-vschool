const express = require("express")
const Issue = require("../models/issue")
const issueRouter = express.Router()

//post
issueRouter.post('/', async (req, res, next) => {
    try {
        req.body.userId = req.auth._id //logged in user id, comes from the token
        const newIssue = new Issue(req.body)
        const savedIssue = await newIssue.save()
        return res.status(201).send(savedIssue)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})

//get
issueRouter.get('/', async (req, res, next) => {
    try {

        const foundIssues = await Issue.find({ userId: req.auth._id })
        return res.status(200).send(foundIssues)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})





module.exports = issueRouter