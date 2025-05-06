  export default async function Page({ searchParams }: { searchParams: Promise<{ query: string }> }) {
    const query = (await searchParams).query || '<h1>Data missing :/</h1>';
    const htmlContent = decodeURIComponent(query);

    return (
        <>
            <div className="px-8 pt-4 pb-6" dangerouslySetInnerHTML={{__html: htmlContent}}/>
        </>
    )
}
