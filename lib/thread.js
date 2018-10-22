
class thread{
    thread(_function_to_run, _options){
        {
            this.thread_id = uuid.v4().toString();
            this.scope = (_options && _options.global)
            this.code = _function_to_run
            this.data = _data
            this.result = null
            this.status = {
                status: "NOT_STARTED"
            }
        }
    }

    //start the thread
    async start(args) {
        return new Promise((resolve, reject) => {
        })
    }
}
