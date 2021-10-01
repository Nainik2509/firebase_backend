const { db } = require('../../config/firebase')

const add = async (req, res) => {
    const { title, text } = req.body
    try {
        const entry = db.collection('entries').doc()
        const entryObject = {
            id: entry.id,
            title,
            text
        }
        entry.set(entryObject)
        res.status(200).send({
            status: "success",
            message: "Entry added successfully",
            data: entryObject
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message,
        })
    }
}

const getAll = async (req, res) => {
    try {
        const response = []
        const allEntries = await db.collection('entries').get()
        allEntries.forEach((doc) => {
            response.push(doc.data())
        })
        return res.status(200).json({
            status: "success",
            message: "Entry added successfully",
            data: response
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message,
        })
    }
}

const update = async (req, res) => {
    try {
        const entry = db.collection('entries').doc(req.params.entryId)
        const currentData = (await entry.get()).data() || {}

        const entryObj = {
            title: req.body.title || currentData.title,
            text: req.body.text || currentData.text
        }
        await entry.update(entryObj)
        return res.status(200).json({
            status: "success",
            message: "Entry updated successfully",
            data: entryObj
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message,
        })
    }
}

const deleteE = async (req, res) => {
    try {
        const entry = db.collection('entries').doc(req.params.entryId)

        await entry.delete()
        return res.status(200).json({
            status: "success",
            message: "Entry deleted successfully",
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message,
        })
    }
}
module.exports = {
    add, getAll, update, deleteE,
}