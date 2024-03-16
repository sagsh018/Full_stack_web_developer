// THE CALLBACK VERSION
const fakeRequestCallback= (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000) {
            failure('Connection Timeout :(');
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay)
}

fakeRequestCallback('books.com/page1', (response) => {
    console.log("Page 1 : ", response);
    fakeRequestCallback('books.com/page2', (response) => {
        console.log("Page 2 : ", response);
    }, (err) => {
        console.log("Page 2 : ", err);
    })
}, (err) => {
    console.log("Page 1 : ", err);
})