export type ProjectTypeFieldType =
    | "Team"
    | "Personal"
    | "Internal"

export type ProjectType = {
    id: number,
    name: string,
    short_description: string,
    description: string,
    tags: Array<string>,
    creation_year: number,
    end_year: number,
    type: string,
    img_url?: string,
    github_link?: string
}

export type SectionType = {
    id: number,
    order: number,
    name: string
}