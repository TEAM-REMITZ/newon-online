import Express, { Application, Router } from "express";
import { urlencoded, json } from "body-parser";
import cors from 'cors'
import { success, warn } from "./lib/Logger";
import myRouter from './routes/Router'

class Server {
  app: Application
  router: Router

  constructor() {
    this.app = Express()
    this.router = Router()

    warn('setting up server...')
    this.app.set('port', 5425);
    this.app.use(urlencoded({ extended: false }))
    this.app.use(json())
    this.app.use(cors())

    myRouter.init(this.app, this.router)
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      success('Server Started')
    })
  }
}

export default Server