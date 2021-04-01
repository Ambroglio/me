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
    name: string,
    parts: Array<PartType>
}

export type PartTypeFieldType =
    | "common"
    | "link"
    | "table"

export type PartType = {
    type: string,
    data:
        | CommonDataType
        | LinkDataType
        | TableDataType
}

export type CommonDataType = {
    name: string,
    city?: string,
    description: string
    startingDate?: string,
    endDate?: string,
    details: Array<string>
}

export type LinkDataType = {
    link: string,
    linkName: string
}

export type TableDataType = {
    description: string,
    content: Array<
        {
            title: string,
            body1: string,
            body2?: string,
            number?: number,
            numberText?: string
        }
    >
}
