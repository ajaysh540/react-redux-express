import { ICourses } from "../Services"

const resolveHost = (url: string) => process.env.NODE_ENV === 'production' ? url : `//localhost:3002${url}`

export const getCourses = async ()=>{
    const res:ICourses[] = await fetch(resolveHost('/api/courses')).then(async json=>await json.json())
    return res;
}


export const getCourseById = async (id:string)=>{
    const res:ICourses = await fetch(resolveHost(`/api/course/${id}`)).then(async json=>await json.json())
    return res;
}