import kafka from 'node-rdkafka'
import kafkaObjs from '../kafkaObjs.js'


const consumer = kafka.KafkaConsumer({
    'group.id' : 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {})

consumer.connect()

consumer.on('ready', () => {
    console.log('consumer ready ...')
    consumer.subscribe(['NODE-PROJ-TOPIC'])
    consumer.consume()
}).on('data', (data) => {
    console.log(`received messages : ${kafkaObjs.fromBuffer(data.value)}`)
})



