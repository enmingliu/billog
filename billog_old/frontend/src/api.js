const APIURL = '/posts';

const throwError = async (resp) => {
    const unknownErr = { errorMessage: 'Unknown error' };
    try {
        const body = await resp.json();
        if (body.message !== undefined) {
            let err = { errorMessage: body.message };
            throw err;
        } else {
            throw unknownErr;
        }
    } catch (e) {
        throw unknownErr;
    }
};

// gets all of the posts from the database using a fetch
const getPosts = async() => {
    return fetch(APIURL, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    }).then((response) => {
        const resp = response.json();
        if (response.ok) {
            resp.then(json => {
                console.log(json);
            })
        }
        return resp;
    })
}
// adds a new post to the database using a fetch
const addPost = async (post) => {   //async function, executes before moving on to next line of code
    const resp = await fetch(APIURL, {  //fetch takes URL string and optional obj, which specifies to make a post request at APIURL
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json' 
        }),
        body: JSON.stringify(post)  //convert post obj in para to json 
    });
    if (!resp.ok) {
        throwError(resp);
    }
}
// deletes a post from the database using a fetch
const deletePost = async (postId) => {
    fetch(APIURL + '/' + postId, {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ id: postId })
    }).then(response => response.json());
}

export {
    getPosts,
    addPost,
    deletePost
};