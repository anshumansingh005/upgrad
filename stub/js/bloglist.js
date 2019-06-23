function fullPost() {
    window.location.href = "./post.html";
}

function onDeletePost() {
    document.getElementById('deletePostPrompt').style.display = 'block';
}


function onCloseDeleteClicked() {
    document.getElementById('deletePostPrompt').style.display = 'none';
}

var myPost;

myPost = [{
        author: "Jimi Hendrix",
        title: "Project submission for UpGrad",
        blogContent: "This is the first project submission"
    },
    {
        author: "Anshuman Singh",
        title: "Project almost done",
        blogContent: "Project is almost completed"
    }
];

for (i = 0; i < myPost.length; i++) {
    document.createElement('p');
}