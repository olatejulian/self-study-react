import {Message} from './message.ts'

export interface MessagePublisher {
    publishMany(messages: Message[]): void | Promise<void>
}
