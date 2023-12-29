class PubSub{

    constructor(){
        this.subscriber={};
    }

    subscribe(event,callback){
        if(!this.subscriber[event]){
            this.subscriber[event]=[];
        }
        this.subscriber[event].push(callback);
    }
    
    publish(event,data){
        if(!this.subscriber[event]){
            return;
        }
        this.subscriber[event].forEach(callback => {
            callback(data);
        });
    }
}

// const pb = new PubSub();

// pb.subscribe('airforce',(data)=>{console.log("Subscriber 1 : ", data)});
// pb.subscribe('airforce',(data)=>{console.log("Subscriber 2 : ", data)});

// pb.publish('airforce',{shoeName:'Jordan'}); 