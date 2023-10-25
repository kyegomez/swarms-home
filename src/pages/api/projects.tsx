import { NextApiRequest, NextApiResponse } from "next"

const projects = [
  {
    id: 1,
    name: "LongNet",
    deployment_url: "github-search-virid-seven.vercel.app",
    last_commit_name: "Train on enwiki8",
    updated_at: {
      when: "12/26/21",
      from_other_services: true,
      service: "github"
    }
  },
  {
    id: 2,
    name: "Kosmos",
    deployment_url: "ignews.vercel.app",
    last_commit_name: "Update MultiModal Encoder",
    updated_at: {
      when: "12/16/21",
      from_other_services: true,
      service: "github"
    }
  },
  {
    id: 3,
    name: "Andromeda",
    deployment_url: "Fix the tokenizer",
    last_commit_name: "add dark mode",
    updated_at: {
      when: "10/28/21",
      from_other_services: true,
      service: "github"
    }
  },
  {
    id: 4,
    name: "Navit",
    deployment_url: "dashboard.vercel.app",
    last_commit_name: "Gather datasets for facial recognition",
    updated_at: {
      when: "09/06/21",
      from_other_services: false
    }
  },
  {
    id: 5,
    name: "BitNet",
    deployment_url: "dashboard.vercel.app",
    last_commit_name: "Add Linear to forward pass",
    updated_at: {
      when: "09/06/21",
      from_other_services: false
    }
  }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_: NextApiRequest, res: NextApiResponse) => {
  try{
    console.log(projects)

    res.status(200).json(projects)
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' })
  }
}
