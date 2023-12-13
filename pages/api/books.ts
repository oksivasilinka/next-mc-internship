// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

type Data = BooksType[]

const booksDB = [
    {id: 1, title: 'name 1'},
    {id: 2, title: 'title'},
    {id: 3, title: 'name 2'},
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {

        let books = booksDB

        const term = req.query.term as string

        if (term) {
            books = books.filter(book => book.title.toLowerCase().includes(term.toLowerCase()))
        }

        res.status(200).json(books)
    }
}


type BooksType = {
    id: number
    title: string
}