export type Status = 'good' | 'bad' | 'normal' | 'any'|"yes"
export interface Data {
    id: number
    content: string
    status: Status
}