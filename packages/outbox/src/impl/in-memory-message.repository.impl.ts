import {MessageRepository} from '../message.repository.ts'
import {Message} from '../message.ts'

type FilterFunction = (
    message: Message,
    messageIndex: number,
    messageArray: Message[]
) => boolean

export class InMemoryMessageRepository implements MessageRepository {
    private messages: Message[]

    constructor() {
        this.messages = []
    }
    public save(message: Message): void {
        this.messages.push(message)
    }

    public getMany(filter?: FilterFunction): Message[] {
        if (filter) {
            return this.messages.filter(filter)
        }

        return this.messages
    }

    public deleteMany(filter?: FilterFunction): void {
        if (filter) {
            const messagesToPreserve = this.messages.filter(
                (value, index, array) => {
                    return !filter(value, index, array)
                }
            )

            this.messages = messagesToPreserve
        }

        this.messages = []
    }

    incrementMessagesSentCounting(filter?: FilterFunction): void {
        if (filter) {
            this.messages.filter(filter).forEach(message => {
                message.incrementSentCount()
            })
        }

        this.messages.forEach(message => {
            message.incrementSentCount()
        })
    }
}
