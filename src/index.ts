import experss from 'express'
import userRoutes from './routes/userRoutes'
import workPlaceRouters from './routes/workPlaceRoutes'
import groupRoutes from './routes/groupRoutes'
import authRoutes from './routes/authRoutes'
import { authenticateToken } from './middlewares/authMiddleware'

const app = experss(); 
app.use(experss.json());


app.use("/user", authenticateToken,  userRoutes)
app.use("/workPlace", workPlaceRouters)
app.use("/group", authenticateToken, groupRoutes)
app.use("/auth", authRoutes)


app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(3000, () => {
    console.log('Server rady on localhost:3000')
})