export function getUsers(currentPage) {
  const promise = fetch(
    `https://randomuser.me/api/?page=${currentPage}&results=10&seed=foobarbaz&nat=ua&inc=gender,name,location,email,login`
  )
    .then((res) => res.json())
    .then((data) => data.results);

  return promise;
}
