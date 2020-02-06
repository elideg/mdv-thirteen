export interface Computer {
  id: string,
  title: string,
  details: string,
  coolLevel: number,
  approved: boolean
}

export interface User {
  email: string,
  password: string
}
