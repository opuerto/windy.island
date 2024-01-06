import algoliasearch from "algoliasearch";

const algoliaClient = algoliasearch(
  process.env.APPLICATION_ID || "",
  process.env.API_KEY || ""
);

const plpIndex = algoliaClient.initIndex(
  "prod_MOCK_DATA"
);


const search = async (query?: string) => {
  const term = query || "*";
  const res = await plpIndex.search(term,{
    hitsPerPage: 100
  });
  return res;
}

export { search }