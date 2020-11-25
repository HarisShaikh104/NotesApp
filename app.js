const yargs = require('yargs')
const chalk = require('chalk')
const AllNotes = require('./Notes')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        AllNotes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        AllNotes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler() {
        AllNotes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading Notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        AllNotes.readNote(argv.title)
    }
})

yargs.parse()