import express from 'express';
const app = express();
const PORT: number | string = process.env.PORT || 9876;

app.use(express.static("client"))
app.use(express.json())

import indexRoute from './routes/indexRoute';
app.use('/product', indexRoute)

try {
    app.listen(PORT, () => {
        console.log(`listen on http://localhost:${PORT}`)
    })
} catch (error) {
    console.log(error)
}