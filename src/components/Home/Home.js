import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
  return(
    <div className="home">
      <h1>Welcome to Petful</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac dui dolor.
        Fusce ac blandit arcu, at molestie enim. Maecenas non molestie risus. 
        Nam sodales neque a purus pulvinar, vitae ultrices elit cursus. 
        Suspendisse mollis bibendum nulla vel scelerisque. In ante est, malesuada 
        eget massa nec, gravida sagittis sapien. Integer ut efficitur dui, at feugiat 
        justo. Vivamus convallis purus ac semper luctus. Praesent in nibh vel massa 
        tristique volutpat. Nam ut gravida urna. Vestibulum volutpat eros pulvinar 
        tellus dignissim condimentum. Quisque sollicitudin rhoncus felis in pellentesque.</p>
      <Link to="/dashboard">
        <button type="button">Start Adopting!</button>
      </Link>
    </div>
  )
}
