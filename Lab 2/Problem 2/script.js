//1: List all of the post titles having more than six words

const url = "http://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then((response) => response.json()) //Parse to JSON
  
  .then((data) => {
    const result = data

    // Filter Posts nad extract titles
      .filter((post) => post.title.split(" ").length > 6) 
      .map((post) => post.title);

    console.log(result);
    }
  )
