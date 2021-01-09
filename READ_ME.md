# Serializer

## To Run

-   Clone the repo
-   Run `npm run start` in a terminal
-   Go to `http://localhost:3000/` in your browser

## How it Works

-   A `counter` object is created in the state of a React component
-   Its current status, `0`, is shown on the page
-   A `Send` button is available. When it is clicked, the `counter` is incremented, serialized, and sent over the `/message` end-point
-   The `/message` endpoint desrializes, increments, and sends back to the client
