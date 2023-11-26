import IndividualSearch from "./IndividualSearch";
const results = [
  {
    username: "user1",
    fullname: "Rita Ryan",
  },
  {
    username: "dali",
    fullname: "Salvador Dali",
  },
  {
    username: "user4",
    fullname: "Sita Raj",
  },
  {
    username: "raphael",
    fullname: "Raphael Sanzio",
  },
];

function SearchResults() {
  return (
    <div className="m-10">
      {results.map((result) => (
        <IndividualSearch
          username={result.username}
          fullname={result.fullname}
        />
      ))}
      {/* <IndividualSearch username="user1" fullname="Rita Ryan" />
      <IndividualSearch username="dali" fullname="Salvador Dali" />
      <IndividualSearch username="user4" fullname="Sita Raj" />
      <IndividualSearch username="raphael" fullname="Raphael Sanzio" /> */}
    </div>
  );
}

export default SearchResults;
