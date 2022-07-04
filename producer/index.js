import kafka from 'node-rdkafka'
import kafkaObjs from '../kafkaObjs.js'

const stream = kafka.Producer.createWriteStream(
    {'metadata.broker.list': '127.0.0.1:9092'},
    {},
    {'topic': 'NODE-PROJ-TOPIC'}
)

function getRandomAnimal(){
    const categories = ['CAT' , 'DOG']
    return categories[Math.floor(Math.random * categories.length)] 
}

function queueMessage() {
    const category = getRandomAnimal()
    const noise = getRandomNoise(category)

    const event = { category, noise}
    const result = stream.write(kafkaObjs.toBuffer(event))
    if(result){
        console.log('message wrote to topic successfully')
    }else{
        console.log('something is wrong ..')
    }
}

setInterval(() => { queueMessage()}, 3000)




