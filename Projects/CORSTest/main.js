const userAction = async () => {
  const response = await fetch('https://vp30q4pe23.execute-api.us-east-1.amazonaws.com/test/get-data', {
    method: 'GET',
    // body: myBody, // string or object
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  console.log(myJson);
}

userAction();