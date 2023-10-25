// import { nanoid } from '@/lib/utils'
import { nanoid } from '../utils'
import { Chat } from '../components/agent_conversations/components/chat'

export const runtime = 'edge'

export default function IndexPage() {
  const id = nanoid()

  return <Chat id={id} />
}
