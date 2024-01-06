import algoliasearch from "algoliasearch";

const algoliaClient = algoliasearch(
  process.env.APPLICATION_ID || "",
  process.env.API_KEY || ""
);

const plpIndex = algoliaClient.initIndex(
  "prod_MOCK_DATA"
);

const pdpIndex = algoliaClient.initIndex("prod_MOCK_DATA_PDP");


const search = async (query?: string) => {
  const term = query || "*";
  const res = await plpIndex.search(term,{
    hitsPerPage: 100
  });
  return res;
}

const getProduct = async (id: string) => {
  const res = await pdpIndex.search("",{
    filters: `id=${id}`
  });
  return res;
}

export { search, getProduct }