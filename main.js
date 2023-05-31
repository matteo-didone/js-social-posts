// Description
// We are recreating a social feed by adding our JavaScript script to the provided base layout, in which:
// - It is not necessary to create random dates.
// - For the images, it's fine to use any placeholder service, e.g., Unsplash (https://unsplash.it/300/300?image=<id>).

// Milestone 1
// Using the example layout provided in the HTML, we display the posts in our feed.

// Milestone 2
// If we click on the "Like" button, we change the color of the button text and increment the likes counter. We save the IDs of the posts we liked in a second array.

// BONUS
// Format the dates in Italian format (dd/mm/yyyy).
// Handle the absence of a profile image with a fallback element that contains the user's initials (e.g., Luca Formicola > LF).
// When clicking on a "Like" button of a post, if we have already clicked, we should decrement the counter and change the color of the button.

// Milestone 1 

// Create an array of literal objects containing the posts that we will display in the feed using JS
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// I need to get the container from the page and save it in a local constant
const container = document.getElementById("container");

// Now, I need to iterate through the array, using a for-each method, and for each object in the array I need to create a new div element, with the class "post", and append it to the container
posts.forEach((post) => { 

    // I start by creating a post div, inside which all the content of the post will go
    const postDiv = document.createElement("div");
    // I give the class "post" to the div element 
    postDiv.classList.add("post");

    // I create an div for the post title 
    const postHeaderDiv = document.createElement("div");
    // I give the class "title" to the div element
    postHeaderDiv.classList.add("post__header");

    // I create the post meta div
    const postMetaDiv = document.createElement('div');
    // I give the class "post-meta" to the div element
    postMetaDiv.classList.add('post-meta');

    // I create the post meta icon div
    const postMetaIconDiv = document.createElement('div');
    // I give the class "post-meta__icon" to the div element
    postMetaIconDiv.classList.add('post-meta__icon');

    // Create the profile picture
    const profilePicImg = document.createElement('img');
    // I give the class "profile-pic" to the img element
    profilePicImg.classList.add('profile-pic');
    // I'm setting the profile picture image to the post author image
    // I check: 
    // - If post.author.image === true (such as a string) --> post.author.image will be assigned to profilePicImg.src
    // - If post.author.image === false (such as null or undefined) --> 'fallback-image-url' will be assigned to profilePicImg.src 
    profilePicImg.src = post.author.image ? post.author.image : 'fallback-image-url';
    // I'm setting the profile picture alt to the post author's name
    profilePicImg.alt = post.author.name;

    // Append the profile picture to the meta icon div
    postMetaIconDiv.appendChild(profilePicImg);

    // Create the post meta data div
    const postMetaDataDiv = document.createElement('div');
    // I give the class "post-meta__data" to the div element
    postMetaDataDiv.classList.add('post-meta__data');

    // Create the post meta author div
    const postMetaAuthorDiv = document.createElement('div');
    // I give the class "post-meta__author" to the div element
    postMetaAuthorDiv.classList.add('post-meta__author');
    // I need to populate the post author div with the author's name
    postMetaAuthorDiv.textContent = post.author.name;

    // Create the post meta date div
    const postMetaDateDiv = document.createElement('div');
    // I give the class "post-meta__date" to the div element
    postMetaDateDiv.classList.add('post-meta__date');
    // I need to populate the post date div with the post date
    const createdDate = new Date(post.created);
    // I need to make sure the date is formatted correctly (DD/MM/YYYY)
    const formattedDate = createdDate.toLocaleDateString('it-IT');
    // I need to populate the date div with the created date
    postMetaDateDiv.textContent = formattedDate;

    // I need to append the post meta author and date divs to the post meta data div 
    postMetaDataDiv.appendChild(postMetaAuthorDiv); 
    postMetaDataDiv.appendChild(postMetaDateDiv);

    // I need to append the post meta icon and data divs to the post meta div
    postMetaDiv.appendChild(postMetaIconDiv); 
    postMetaDiv.appendChild(postMetaDataDiv); 

    // Append the meta div to the post header div
    postHeaderDiv.appendChild(postMetaDiv);

    

});

