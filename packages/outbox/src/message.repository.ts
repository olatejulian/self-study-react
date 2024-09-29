import {Message} from './message.ts'

export interface MessageRepository {
    save(message: Message): void | Promise<void>

    getMany(): Message[] | Promise<Message[]>

    deleteMany(): void | Promise<void>

    incrementMessagesSentCounting(messages: Message[]): void | Promise<void>
}
