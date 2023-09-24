import experss from 'express'
import userRoutes from './routes/userRoutes'
import workPlaceRouters from './routes/workPlaceRoutes'
import groupRoutes from './routes/groupRoutes'

const app = experss(); 
app.use(experss.json());
app.use("/user", userRoutes)
app.use("/workPlace", workPlaceRouters)
app.use("/group", groupRoutes)

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(3000, () => {
    console.log('Server rady on localhost:3000')
})