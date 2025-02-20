import axios, { AxiosResponse } from "axios"

const API_BASE_URL = 'http://localhost:8080'

export async function saveBookmark(bookmark:{title: string, url: string}) {
    const res: AxiosResponse<unknown, unknown> = await axios.post(`${API_BASE_URL}/api/bookmarks`, bookmark)
    return res.data
}