console.log("Hello, World!");

// Part 2: Retrieve Gemini API key from your proxy server
async function getGeminiContent() {
    try {
        const response = await fetch("https://proxy-key-2ywi.onrender.com", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "shhhDoNotTell" }) // Replaced with actual secret
        });

        const data = await response.json();
        console.log("GET response:", data);

    } catch (error) {
        console.error("Error fetching key:", error);
    }
}

// Part 1: Send GET request
async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log("GET response:", data);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

// Part 1: Send POST request
async function createPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "foo",
                body: "bar",
                userId: 1
            }),
        });
        const data = await response.json();
        console.log("POST response:", data);
    } catch (error) {
        console.error("Error creating post:", error);
    }
}

// Part 1: Handle invalid GET request
async function fetchInvalid() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/invalid');
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Invalid GET response:", data);
    } catch (error) {
        console.error("Error fetching invalid endpoint:", error);
    }
}

// Call the functions
getGeminiContent();
fetchPosts();
createPost();
fetchInvalid();
