import {Message, MessagePropsWithId} from './message.ts'

export interface MessageFactory {
    newMessageFromPayload<Payload>(payload: Payload): Message

    newMessageWithId(messagePropsWithId: MessagePropsWithId): Message
}
