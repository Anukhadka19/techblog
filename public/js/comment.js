const postId = document.querySelector('input[name="post-id]').value.trim();
const commentFormHandler = async (event) => {
    event.preventDefault();

    const postId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (commentId) {
        const response = await fetch(`/api/posts`, {
          method: 'POST',
          body: JSON.stringify({ postId, commentId }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
       
        if (response.ok) {
            document.location.reload();
          } else {
            alert(response.statusText);
        }
    }
  };
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);