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
    }, 
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=190",
        "author": {
            "name": "Matteo Didonè",
            "image": ""
        },
        "likes": 19,
        "created": "2001-07-19"
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

    
    // ----------------------------------------------------------------
    // POST HEADER START 
    // ----------------------------------------------------------------

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

    // Function to get initials from a name 
    function getInitials(name) // Take a name as a parameter
    {
        // Split the name into an array of names
        const names = name.split(' ');
        // Create a variable to store the initials, and initialize it to an empty string
        let initials = '';

        // Then we use a for loop to iterate through the array of names
        for (let i = 0; i < names.length; i++) 
        {
            // For each name in the array, we add the first letter of the name to the initials variable and we capitalize it
            initials += names[i][0].toUpperCase();
        }
        // Finally, we return the initials
        return initials;
    }

    // Check if the post author image exists
    if (post.author.image) // If it exists
    {
        // Set the profile picture image to the post author image
        profilePicImg.src = post.author.image; 
    } 
    else // If it does not exist
    {
        // Now, we need to handle the absence of a profile image

        // We invoke the function to get the initials from the author's name
        // And we store such variables in a variable
        const initials = getInitials(post.author.name); 
        
        // Then, we creates a new <canvas> element using the document.createElement() method and assigns it to the canvas variable
        // What is the <canvas> element? It is an HTML element that provides a drawing area for JavaScript
        const canvas = document.createElement('canvas');

        // We set the width and height of the canvas to 300px
        // So, now, we have a square canvas element
        canvas.width = 300;
        canvas.height = 300;

        // We get the 2D rendering context for the canvas
        // The returned context object (context) of the method getContext() provides methods and properties to draw on the canvas element
        const context = canvas.getContext('2d');

        // fillStyle sets the fill color for drawing operations on the canvas
        context.fillStyle = '#ccc'; // In this case, it sets the fill color to light gray

        // fillRect() method draws a "filled" rectangle on the canvas using the color stated above
        context.fillRect(0, 0, canvas.width, canvas.height);
        // The rectangle starts at coordinates (0, 0) and has a width and height equal to the canvas dimensions (canvas.width and canvas.height)
        // This step effectively creates a solid colored background on the canvas.

        // We set the font size and style
        context.font = '150px Arial'; // Font size and style
        context.textAlign = 'center'; // Aligns the text horizontally at the center
        context.textBaseline = 'middle'; // Aligns the text vertically at the center
        context.fillStyle = '#fff'; // Sets the text color to white 

        // We draw the initials on the canvas using the fillText method
        // The fillText() method draws filled text on the canvas using the color stated above (white)
        // It takes the initials variable (containing the extracted initials from the post author's name) as the text to be drawn and specifies the position as (canvas.width / 2, canvas.height / 2), which represents the center of the canvas. The text is drawn with the previously set font and color.
        context.fillText(initials, canvas.width / 2, canvas.height / 2);

        // Convert the canvas to a data URL. The resulting data URL represents the canvas image as a base64-encoded string
        //Finally, we set it as the source of the profile picture image
        profilePicImg.src = canvas.toDataURL();
    }

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

    // ----------------------------------------------------------------
    // POST HEADER END 
    // ----------------------------------------------------------------

    
    // ----------------------------------------------------------------
    // POST TEXT AND POST PICTURE START
    // ----------------------------------------------------------------

    // Create the post text div
    const postTextDiv = document.createElement('div');
    // Give the class "post__text" to the div element
    postTextDiv.classList.add('post__text');
    // I need to populate the post text div with the post content
    postTextDiv.textContent = post.content;
    
    // Create the post image div 
    const postImageDiv = document.createElement('div');
    // Give the class "post__image" to the div element
    postImageDiv.classList.add('post__image');

    // Create the image element
    const postImage = document.createElement('img');
    // Give the class "post-image" to the img element
    postImage.classList.add('post-image'); 
    // I need to set the image source to the post media
    postImage.src = post.media; 
    // I need to set the image alt to the post content
    postImage.alt = post.content;

    // I append the child element to the container
    postImageDiv.appendChild(postImage);

    // ----------------------------------------------------------------
    // POST FOOTER START
    // ----------------------------------------------------------------

    // Create the post footer div
    const postFooterDiv = document.createElement('div');
    // Give the class "post-footer" to the div element
    postFooterDiv.classList.add('post__footer');

    // Create the post footer likes div
    const likesDiv = document.createElement('div'); 
    // Give the class "likes" to the div element
    likesDiv.classList.add('likes');

    // Create the likes button div
    const likesButtonDiv = document.createElement('div');
    // Give the class "likes__button-div" to the div element
    likesButtonDiv.classList.add('likes__button-div');

    // Create the like button 
    const likeButton = document.createElement('a');
    // Give the class "like-button" to the a element
    likeButton.classList.add('like-button');
    // Set the href attribute to #
    likeButton.href = '#';

    // Create the like button icon
    const likeButtonIcon = document.createElement('i');
    // Give the class "like-button__icon" to the i element, as well as the font-awesome classes
    likeButtonIcon.classList.add('like-button__icon', 'fas', 'fa-thumbs-up');

    // Create the like button label
    const likeButtonLabel = document.createElement('span');
    // Give the class "like-button__label" to the span element
    likeButtonLabel.classList.add('like-button__label');
    // Set the text content to "Mi Piace"
    likeButtonLabel.textContent = 'Mi Piace';

    // Append the like button icon and label to the like button
    likeButton.appendChild(likeButtonIcon);
    likeButton.appendChild(likeButtonLabel);

    // Append the like button to the likes CTA div
    likesButtonDiv.appendChild(likeButton);

    // Create the likes counter div
    const likesCounterDiv = document.createElement('div');
    // Give the class "like-counter__counter" to the counter
    likesCounterDiv.classList.add('likes__counter');
    // Populate the likes counter div with the number of likes the post has received
    likesCounterDiv.innerHTML = `Piace a <b id="like-counter-${post.id}" class="likes-counter">${post.likes}</b> persone`;

    // Append the likes button and likes counter divs to the likes div
    likesDiv.appendChild(likesButtonDiv);
    likesDiv.appendChild(likesCounterDiv);

    // Append the likes div to the post footer div
    postFooterDiv.appendChild(likesDiv);

    // ----------------------------------------------------------------
    // POST FOOTER END
    // ----------------------------------------------------------------

    // Append the header, text, image, and footer divs to the main post div
    postDiv.appendChild(postHeaderDiv);
    postDiv.appendChild(postTextDiv);
    postDiv.appendChild(postImageDiv);
    postDiv.appendChild(postFooterDiv);

    // Append the whole post div to the container
    container.appendChild(postDiv);
});

// Milestone 2
// If we click on the "Like" button, we change the color of the button text and increment the likes counter. We save the IDs of the posts we liked in a second array.
// If we click on the "Like" button again, we change the color of the button text back to the original color and decrement the likes counter. We remove the ID of the post from the second array.

// I need to select all the like buttons
const likeButtons = document.querySelectorAll('.like-button');
// I need to select all the like counters
const likeCounters = document.querySelectorAll('.likes-counter');
// I prepare an array in which we'll save the IDs of the posts we liked
const likedPostsIds = [];

// I need to add an event listener to the like counter 
// I need to loop through all the like counters though, because we don't want to deal with Uncaught TypeError: likeButton.addEventListener is not a function
// likeButton is not a single element, but a NodeList obtained from document.querySelectorAll('.like-button')

// Iterate over each like button and add the event listener
likeButtons.forEach((likeButton, index) => {
    likeButton.addEventListener('click', function() {
    // Change the color of the button text
    this.classList.toggle('like-button--liked');

    // Get the corresponding like counter for the clicked button
    const likesCounter = likeCounters[index];

    // Get the ID of the post from the parent element
    const postId = parseInt(likesCounter.id.split('-')[2]);
    // likesCounter refers to the variable that stores the reference to the likes counter element. .id is used to access the id attribute of that element
    // The id attribute is in the format "like-counter-1", where 1 is the ID of the post we're dealing with
    // We split the string into an array of sub-strings, using the "-" character as the separator
    // This index access is used to retrieve the third element (index 2) from the array obtained after splitting the string. The array is zero-indexed, so the third element corresponds to index 2. If our id is "like-counter-1", by using the split method we obtain an array with three elements: "like", "counter", and "1". We want to access the third element, which is the ID of the post we're dealing with.
    // We need to convert the ID from a string to a number, because the ID of the post is a number, while the ID of the post counter is a string. We do that using the parseInt method.

    // Check if the post is already liked or not
    if (likedPostsIds.includes(postId))  // If it's already liked 
        {
            // Decrement the likes counter and remove the post ID from the likedPostsIds array

            // Store into a variable the current likes 
            const currentLikes = parseInt(likesCounter.textContent);
            // Decrement the likes counter by 1
            likesCounter.textContent = currentLikes - 1;
            // Get the index of the post ID in the likedPostsIds array
            const index = likedPostsIds.indexOf(postId);
            // Remove the post ID from the likedPostsIds array
            likedPostsIds.splice(index, 1);
        } 
    else // If it's not liked yet
        {
            // Increment the likes counter and add the post ID to the likedPostsIds array

            // Store into a variable the current likes
            const currentLikes = parseInt(likesCounter.textContent);
            // Increment the likes counter by 1
            likesCounter.textContent = currentLikes + 1;
            // Add the post ID to the likedPostsIds array
            likedPostsIds.push(postId);
        }
    });
});
