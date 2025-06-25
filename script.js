console.log("Hello, World!");

async function fetchPosts(){
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await responce.json();
        console.log("GET response:", data);
        
        }
        catch (error) {
            console.error ("Error fetching posts:", error);
        }
    }

    fetchPosts();

async function createPost() {
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
}   catch (error) {
    console.error("Error creating post:", error);
}

createPost();

async function fetchInvalid() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/invalid');
        if (!response.ok) {
            throw new Error("network response was not ok");
            const data = await response.json();
            console.log("Invalid GET response:", data);
        }
        catch (error) {
            console.error("Error fetching invalid endpoint:", error);
        }
}
fetchInvalid();