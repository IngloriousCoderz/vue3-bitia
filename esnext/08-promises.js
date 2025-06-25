$.get(
  url1,
  (response1) => {
    console.log(response1);
    $.get(
      url2,
      (response2) => {
        console.log(response2);
      },
      (error2) => {
        console.error(error2);
      }
    );
  },
  (error1) => {
    console.error(error1);
  }
);

console.log("Hello");

const handleResponse2 = (response2) => {
  console.log(response2);
};

const handleError2 = (error2) => {
  console.error(error2);
};

const handleResponse1 = (response1) => {
  console.log(response1);
  $.get(url2, handleResponse2, handleError2);
};

const handleError1 = (error1) => {
  console.error(error1);
};

$.get(url1, handleResponse1, handleError1);

const promise1 = $.get(url1);

promise1.then((response1) => {
  console.log(response1);
});

promise1.catch((error1) => {
  console.error(error1);
});

promise1.finally(() => {});

$.get(url1)
  .then((response1) => {
    console.log(response1);
    return response1;
  })
  .then((response1) => {
    return $.get(url2);
  })
  .then((response2) => {
    console.log(response2);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {});

{
  const age = 18;
  const promise = new Promise((resolve, reject) => {
    if (age > 18) {
      resolve("maggiorenne");
    } else {
      reject("minorenne");
    }
  });

  promise.then((message) => {}).catch((message) => {});
}

{
  const promise = new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  promise.then(() => {
    console.log("A second has passed.");
  });
}

{
  new Promise((resolve, reject) => {
    $.get(url1, resolve, reject);
  })
    .then((response1) => {})
    .catch((error1) => {});
}

Promise.all([promise1, promise2])
  .then(([response1, response2]) => {
    console.log(response1, response2);
  })
  .catch((error) => {});

Promise.allSettled([promise1, promise2]).then(([result1, result2]) => {});

Promise.race([promise1, promise2]).then((fastestResponse) => {});

const timeout = new Promise((_, reject) => {
  setTimeout(reject, 3000);
});
Promise.race([$.get(url), timeout])
  .then((response) => {})
  .catch((error) => {});

Promise.resolve(42);
Promise.reject(new Error("Ouch!"));
