// 'use client'

// import { useRouter } from 'next/navigation';
import getWikiResults from "@/lib/getWikiResults";
// import { useQuery } from "@tanstack/react-query";

import Item from "./item";

export async function generateMetadata({ params: { searchTerm } }) {
  const wikiData = await getWikiResults(searchTerm)
  const data = wikiData
  const displayTerm = searchTerm.replaceAll('%20', ' ')

  if (!data?.query?.pages) {
      return {
          title: `${displayTerm} Not Found`
      }
  }

  return {
      title: displayTerm,
      description: `Search results for ${displayTerm}`
  }
}

export default async function SearchResults({ params: { searchTerm}}) {
  // const router = useRouter();

  const wikiData = getWikiResults(searchTerm)
  const data = await wikiData

  const results = data?.query?.pages

    const content = (
      <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
          {results
              ? Object.values(results).map(result => {
                  return <Item key={result.pageid} result={result} />
                  // return <p key={result.pageid}>{JSON.stringify(result)}</p>
              })
              : <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
          }
      </main>
  )

  return content
}
