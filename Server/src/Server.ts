import Express, { Application, Router } from "express";
import { urlencoded, json } from "body-parser";
import cors from 'cors'
import { success, warn } from "./lib/Logger";

class Server {
  app: Application
  router: Router

  constructor() {
    this.app = Express()
    this.router = Router()

    warn('setting up server...')
    this.app.set('port', 9876);
    this.app.use(urlencoded({ extended: false }))
    this.app.use(json())
    this.app.use(cors())
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      success('Server Started')
    })
  }
}

export default Server