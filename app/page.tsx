import Pagination from "./components/Pagination";

interface Params {
  searchParams: Promise<{ page: string }>;
}

export default async function Home({ searchParams }: Params) {
  const { page = "1" } = await searchParams;
  return (
    <div>
      hello world
      <Pagination itemCount={100} pageSize={10} currentPage={parseInt(page)} />
    </div>
  );
}
