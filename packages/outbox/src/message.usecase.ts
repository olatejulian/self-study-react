import {MessagePropsWithId} from './message.ts'

/*
Use cases
Outbox
save payload:
    create message from payload
    persist message


send unsent message group / resend undelivered message group ()
    get message group from database using filter (unsent, undelivered)
    try publish messages to message broker
    finally increment message sent count by one

delete delivered message group
    remove delivered messages from database

mark message delivered
    set message delivered status to true on database

Inbox
consume message
    deserialize and rehydrate message
    try save message to database
    finally send message ack info

handle message payload
    get message from database
    try execute payload handler
    set message handled status

delete handled message group
    remove handled messages from database
*/
export interface Outbox {
    savePayload<Payload>(payload: Payload): void

    sendMessageGroup(): void

    deleteDeliveredMessages(): void
}

export interface Inbox {
    consumeMessage(messagesProps: MessagePropsWithId): void

    handleMessagePayload<Payload>(handler: (payload: Payload) => void): void

    deleteHandledMessages(): void
}

export interface MessageUseCase extends Inbox, Outbox {}
