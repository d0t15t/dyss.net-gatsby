import React from "react";
import favicon from "../images/favicon.ico";
export const Head = ({ location, params, data, pageContext }) => {

  console.log(location);
  console.log(params);
  console.log(data);
  console.log(pageContext);

  return (
    <>
      <title>DYSSEMBLER / Isaac Bigsby Trogdon</title>
      <meta name="description" content="Dyssembler is the moniker for projects by Isaac Bigsby Trogdon. It has been a radio show, record label, and various music/party events. IBT lives and works in Berlin." />
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <link rel="icon" href={favicon} type="image/x-icon" />
    </>
  );
}

