import '../styles/globals.css';
import Sidebar from "../src/component/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
