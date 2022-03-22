const app = require('./src/app')
const PORT = 3000

app.listen(process.env.PORT || PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})