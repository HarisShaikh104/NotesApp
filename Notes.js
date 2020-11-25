const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => {
    return 'Your Notes...'
}


const addNote = (title, body) => {
    const notes = loadNotes()

    // const dupNotes=notes.filter((note) => note.title===title)
    const dupNote = notes.find((note) => note.title === title)

    if (!dupNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes)
        console.log('New Note Added!')
    }
    else {
        console.log('Note already exists!')
    }


}

const removeNote = (title) => {
    const allNotes = loadNotes()

    const dupNotes = allNotes.filter((note) => note.title != title)

    if (allNotes.length > dupNotes.length) {
        saveNote(dupNotes)
        console.log(chalk.bgGreen('Note Removed!'))
    }
    else {
        console.log(chalk.bgRed('Note does not exist!'))
    }
}

const listNotes = () => {
    console.log(chalk.red('Your Notes'))
    const allNotes = loadNotes()
    allNotes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const allNotes = loadNotes()

    const foundNote = allNotes.find((note) => note.title === title)

    if (foundNote) {
        console.log('Title: ' + chalk.green(foundNote.title))
        console.log(foundNote.body)
    }
    else {
        console.log('No such note exists.')
    }
}

const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}