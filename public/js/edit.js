const userId = document.querySelector('input[name="puser-id]').value.trim();
console.log("testing");
console.log(postId);

const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-body').value.trim();
    
    console.log(title);
    console.log(body);
    
    if (title && body) {
        const response = await fetch(`/api/posts`, {
          method: 'POST',
          body: JSON.stringify({ title, body }),
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