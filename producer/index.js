import kafka from 'node-rdkafka'

const stream = kafka.Producer.createWriteStream(
    {'metadata.broker.list': '127.0.0.1:9092'},
    {},
    {'topic': 'NODE-PROJ-TOPIC'}
)

function queueMessage() {
    const result = stream.write(Buffer.from('Hi'))
    if(result){
        console.log('message wrote to topic successfully')
    }else{
        console.log('something is wrong ..')
    }
}

setInterval(() => { queueMessage()}, 3000)




