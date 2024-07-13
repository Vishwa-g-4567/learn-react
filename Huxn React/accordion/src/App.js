import Accordion from "./components/Accordion";
import { content } from "./utils/content";

function App() {
  return (
    <div>
      {content.map(({ title, content }) => (
        <Accordion title={title} content={content} key={Math.random() * 100} />
      ))}
    </div>
  );
}

export default App;
