
interface ResultsPageProps {
    searchParams: {
      query: string; // The name 'query' matches the ?query= part of the URL
    };
  }
  
export default async function Page({ searchParams }: ResultsPageProps) {
    const query = await searchParams.query;
    const htmlContent = decodeURIComponent(query);

    return (
        <>
            <div className="px-8 pt-4 pb-6" dangerouslySetInnerHTML={{__html: htmlContent}}/>
        </>
    )
}
