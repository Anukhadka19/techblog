const postId = document.querySelector('input[name="post-id]').value.trim();
console.log("testing");
console.log(postId);

const editFormHandler = async (event) => {
    event.preventDefault();

    const postName = document.querySelector('#post-name').value.trim();
    const description = document.querySelector('#post-body').value.trim();
    
    console.log(postName);
    console.log(description);
    
    if (postName && description) {
        const response = await fetch(`/api/posts`, {
          method: 'POST',
          body: JSON.stringify({ postName, description }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to update post');
          }
        }
      };

  
  document
    .querySelector('#edit-post-form')
    .addEventListener('submit', editFormHandler);