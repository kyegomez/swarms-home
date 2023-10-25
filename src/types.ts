import { type Message } from 'ai'

export interface Chat extends Record<string, any> {
  id: string
  title: string
  createdAt: Date
  userId: string
  path: string
  messages: Message[]
  sharePath?: string
}

export type ServerActionResult<Result> = Promise<
  | Result
  | {
      error: string
    }
>

export type Project = {
  id: number;
  name: string;
  deployment_url: string;
  last_commit_name: string;
  updated_at: {
    when: string;
    from_other_services: boolean;
    service?: string;
  }
}