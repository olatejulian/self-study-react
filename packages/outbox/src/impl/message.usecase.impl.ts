import {MessageFactory} from '../message.factory.ts'
import {MessagePublisher} from '../message.publisher.ts'
import {MessageRepository} from '../message.repository.ts'
import {MessagePropsWithId} from '../message.ts'
import {MessageUseCase} from '../message.usecase.ts'

export class MessageUseCaseImpl implements MessageUseCase {
    constructor(
        private readonly messageFactory: MessageFactory,
        private readonly messageRepository: MessageRepository,
        private readonly messagePublisher: MessagePublisher
    ) {}
    deleteHandledMessages(): void {
        throw new Error('Method not implemented.')
    }
    deleteDeliveredMessages(): void {
        throw new Error('Method not implemented.')
    }

    async savePayload<Payload>(payload: Payload) {
        const message = this.messageFactory.newMessageFromPayload(payload)

        await this.messageRepository.save(message)
    }

    async consumeMessage(messagesProps: MessagePropsWithId): Promise<void> {
        const message = this.messageFactory.newMessageWithId(messagesProps)

        await this.messageRepository.save(message)
    }

    async sendMessageGroup(): Promise<void> {
        const messageGroup = await this.messageRepository.getMany()

        try {
            await this.messagePublisher.publishMany(messageGroup)
        } finally {
            await this.messageRepository.incrementMessagesSentCounting(
                messageGroup
            )
        }
    }

    handleMessagePayload(): void {
        throw new Error('Method not implemented.')
    }
}
