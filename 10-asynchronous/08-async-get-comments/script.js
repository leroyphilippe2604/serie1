// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    const run = document.getElementById('run');

    async function getpostwithcomment (getposts, getcomments){
        const posts = await getposts();

        posts.forEach(async (post)=> {
            post.comments = await getcomments(post.id);
        });
        
    }

    run.addEventListener('click',()=>{
        getpostwithcomment(lib.getposts, lib.getcomments);
    })
})();
