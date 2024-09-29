export class Message {
    constructor(
        private readonly props: MessageProps,
        private readonly id?: MessageId
    ) {}

    public getPayload(): any {
        return JSON.parse(this.props.payload)
    }

    public toJsonString() {
        return JSON.stringify({id: this.id, ...this.props})
    }

    public incrementSentCount() {
        this.props.sentCount += 1
    }
}

interface MessageId {}

export interface MessageProps {
    payload: string
    delivered: boolean
    sentCount: number
    createAt: Date
    sentAt: Date | null
}

export interface MessagePropsWithId extends MessageProps {
    id: MessageId
}
