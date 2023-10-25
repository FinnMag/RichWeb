// 2: Show a word frequency map for all of the body contents of the posts

const url = "http://jsonplaceholder.typicode.com/posts";

fetch(url)
    .then((response) => response.json()) //Parse to JSON
    .then((data) => {
        
        // Extract contents
        const posts = data.map((post) => post.body);

        // Combine all the posts into a single string and split it into words
        const words = posts.join(' ').toLowerCase().match(/\b\w+\b/g);

        // console.log(words)
        //console.log(words.reduce())

        // Create a word frequency map
        const wordFrequency = words.reduce((frequencyMap, index) => {
            frequencyMap[index] = (frequencyMap[index] || 0) + 1; // Count word occurrences
            return frequencyMap;
        }, {});

    })