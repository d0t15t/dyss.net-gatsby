import * as React from "react"
import logo from "../images/dyssembler-logo.jpg"

// styles
const hidden = {
  position: "absolute",
  left: "-999999999px",
  top: 'auto',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
}
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  { 
    text: "DJ Your Body on Mixcloud", 
    url: "https://www.mixcloud.com/djyourbody/", 
    description: "This is where you can find the occasional mix or repost by DJ Your Body.", 
    color: "#AC027D",
  },
  {
    text: " Dyss Soundcloud",
    url: "https://soundcloud.com/dyssembler",
    description: "Original productions by DJ Your Body / IBT.",
    color: "#321abc",
  },
  {
    text: "Dyss Discogs",
    url: "https://www.discogs.com/label/375586-Dyssembler/",
    description: "Releases by Hush Hush & M.E.S.H.",
    color: "#ABC123",
  },
  {
    text: "Dyssembler on Berlin Community Radio",
    url: "https://www.mixcloud.com/BCR_Radio/playlists/dyssembler-season-2/",
    description:
      "Berlin Community Radio was online from 2013 to 2019 with a huge network of contributors broadcasting their mixes live every day. The Dyssembler show came bi-weekly and featured free-format mixes by IBT and guests.",
    color: "#E95800",
  },
  {
    text: "IBT on Github",
    url: "https://github.com/d0t15t",
    color: "#F099A8",
  },
  {
    text: "Dyss FB",
    url: "https://www.facebook.com/dyssembler/",
    color: "#1099A8",
  },
  {
    text: "mr [at] dyss.net",
    url: "mailto:mr@dyss.net",
    color: "#D02AB1",
    description: "Contact me by E-Mail."
  },
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Dyssembler / Isaac Bigsby Trogdon</title>
      <h1 style={headingStyles}>
        DYSSEMBLER
      </h1>
      <p style={paragraphStyles}>
	<span style={hidden}>Dyssembler</span>
	is the moniker for projects by <strong>Isaac Bigsby Trogdon</strong>. <br/> 
	It has been a radio show, record label, and various music/party events. <br/><strong>IBT</strong> lives and works as a web-programmer in Berlin. <span role="img" aria-label="Peace-sign with hand emoji">
          ✌️
        </span></p>

      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={link.url}
              >
                {link.text}
              </a>
	      { link?.description ? <p style={descriptionStyle}>{link.description}</p> : null}
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="DYSSEMBLER Logo"
        src={logo}
      />
    </main>
  )
}

export { Head } from '../components/Head.jsx';
export default IndexPage;
