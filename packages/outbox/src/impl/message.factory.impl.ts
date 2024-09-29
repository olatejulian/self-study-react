import {MessageFactory} from '../message.factory.ts'
import {Message, MessagePropsWithId} from '../message.ts'

export class MessageFactoryImpl implements MessageFactory {
    private DEFAULT_CONSTRUCTOR_ARGS = {
        delivered: false,
        sentCount: 0,
        createAt: new Date(),
        sentAt: null,
    }

    public newMessageFromPayload<Payload>(payload: Payload) {
        return new Message({
            payload: JSON.stringify(payload),
            ...this.DEFAULT_CONSTRUCTOR_ARGS,
        })
    }

    public newMessageWithId(messagePropsWithId: MessagePropsWithId) {
        const {id, ...props} = messagePropsWithId

        return new Message(props, id)
    }
}
