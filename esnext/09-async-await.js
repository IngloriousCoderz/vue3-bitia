$.get(url1)
  .then(handleResponse1)
  .then((response1) => $.get(url2))
  .then((response2) => console.log(response2))
  .catch((error) => console.error(error))
  .finally(() => {});

function handleResponse1(response1) {
  console.log(response1);
  return response1;
}

async function fetchDataInSeries() {
  try {
    const response1 = await $.get(url1);
    console.log(response1);
    const response2 = await $.get(url2);
    console.log(response2);
    return { response1, response2 };
  } catch (error) {
    console.error(error);
  } finally {
  }
}

fetchDataInSeries().then((responses) => console.log(responses));

async function doFetch() {
  const responses = await fetchDataInSeries();
  console.log(responses);
}

async function fetchDataInSeries() {
  try {
    const [response1, response2] = await Promise.all([
      $.get(url1),
      $.get(url2),
    ]);
    console.log(response1, response2);
    return { response1, response2 };
  } catch (error) {
    console.error(error);
  } finally {
  }
}
