
async function newFormHandler(event) {
    console.log('Works');
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_text = document.querySelector('textarea[name="post-text"]').value;

    console.log(title);
    console.log(post_text);

    if (title && post_text) {
        const response = await fetch('api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
 
}


document.querySelector('.login-form').addEventListener('submit', newFormHandler);