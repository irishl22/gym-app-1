module.exports = {
    read: (req, res, next) => {
        const db = req.app.get('db')

        db.get_inventory()
        .then(workouts => {
            res.status(200).send(workouts)
        }).catch(err => {
            res.status(500).send('controller', err)
        })
    },
    create: (req,res, next) => {
        const db = req.app.get('db')
        let {style, time, mv1, mv2, mv3, mv4, mv5, mv6} = req.body
    
        db.create_workout([style, time, mv1, mv2, mv3, mv4, mv5, mv6])
        .then(() => {
            res.status(200).send('Workout Created')
        }).catch(err => {
            res.status(500).send("there was an error", console.log(err))
        })
    },
    delete: (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_workout(id)
        .then(() => {
            res.status(200).send('Workout deleted')
        .catch(err => {
            res.status(500).send("there was an error", console.log(err))
            })
        })
    },

    update: (req, res, next) => {
        const db = req.app.get('db')
        const { style, time, mv1, mv2, mv3, mv4, mv5, mv6 } = req.body
        const {id} = req.params

        db.update_workout([ style, time, mv1, mv2, mv3, mv4, mv5, mv6 ])
        .then(() => {
            res.status(200).send('user updated')
        .catch(err => {
            res.status(500).send("there was an error", console.log(err))
            })
        })
    }

}
