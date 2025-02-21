import { getAllBookmarks } from "@/lib/bookmarkApi";
import { BookmarksResponse } from "@/types";
import Bookmarks from '@/app/components/Bookmarks';
import SearchForm from "@/app/components/SearchForm";
import { useParams } from "next/navigation";
import { SearchParams } from "next/dist/server/request/search-params";

type Props = {
  searchParams: Promise<{ page: string, query?: string }>
}

export default async function BookmarkPage(props: Props)  {
  const { page = 1, query = "" } = await props.searchParams
  const bookmarksData: Promise<BookmarksResponse> = getAllBookmarks(parseInt(String(page)), query)
  const bookmarkRes = await bookmarksData

  console.log(bookmarkRes)
  // const { data } = await bookmarksData
  // const bookmarks: BookmarkType[] = data

  return (
    <div>
		    <SearchForm />
        <Bookmarks bookmarks={bookmarkRes} query={query} />
    </div>
  );
}
