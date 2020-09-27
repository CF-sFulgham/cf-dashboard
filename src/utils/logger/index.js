import { LOG_TYPE } from '@utils/enums'

export default class Logger {
  constructor(){
    this.queue = []
    this.holding = []
    this.isDev = process.env.NODE_ENV === 'development'
    this.ready = false
    this.$AxiosInstance = null;
  }

  EndLog(id) {
    const getLog = this.queue.filter(log => log.id === id)

    if(getLog.length){
      const log = getLog[0]
      if(!log.endTime)
        log.endTime = new Date()

      if(this.ready){
        this.SendLog(log)
        if(this.holding.length){
          this.holding.forEach((id, idx) => {
            this.holding.splice(idx, 1)
            this.EndLog(id)
          })
        }
      } else {
        this.holding.push(log.id)
      }
    }
  }

  CreateLog(newLog){
    newLog.logType = this.isDev ? LOG_TYPE.DEBUG : newLog.logType
    newLog.startTime = new Date()

    this.queue.push(newLog)
  }

  async SendLog(log){
    if(!this.$AxiosInstance) return

    const _self = this
    delete log.id

    await this.$AxiosInstance.post('/userPageState/logging', log)
      .then((res) => {
        _self.RemoveLog(log)
      })
      .catch((err) => {
        // log error
        console.log(err)
      });
  }

  RemoveLog(log){
    const idx = this.queue.indexOf(log);
    this.queue.splice(idx, 1);
  }

  SetReady(ready){
    this.ready = ready
  }

  SetAxiosInstance(instance){
    this.$AxiosInstance = instance
  }
}
