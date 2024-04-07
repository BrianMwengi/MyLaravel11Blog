import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
    wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});

// window.Echo.private('posts')
//     .listen('.App\\Events\\PostCreated', (e) => {
//         alert("A new post has been created: " + e.post.message);
//         // Update the UI to show the new post
//         // This could be adding the new post to a list, re-rendering a component, etc.
//     });

    window.Echo.channel('posts')
        .listen('.App\\Events\\PostCreated', (e) => {
            alert("A new post has been created: " + e.post.message);
            // Update the UI to show the new post
            // This could be adding the new post to a list, re-rendering a component, etc.
        });

        // postIds.forEach(postId => {
        //     window.Echo.private(`posts.${postId}`)
        //         .listen('PostUpdated', (e) => {
        //             alert("A post has been updated: " + e.post.message);
        //             // Update the UI to show the updated post
        //         });
        // });
        
    
   
      

