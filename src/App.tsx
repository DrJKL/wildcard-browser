import './App.css';
import { WildcardList } from './WildcardList';
import { WildcardFile, wildcardCollection } from './lib/wildcards';

const renderWildcard = (wildcards: WildcardFile) => {
  return (
    <WildcardList
      key={wildcards.filepath}
      filename={wildcards.filename}
      entries={wildcards.wildcardEntries}></WildcardList>
  );
};

const App = () => {
  const wildcardsLocal = [...wildcardCollection].filter((_, idx) => idx < 50);
  return (
    <>
      <header className="header">
        <h1>Wildcard Browser</h1>
        <h2>{wildcardsLocal.length} files</h2>
      </header>

      <main className="wildcards-lists-container">
        {wildcardsLocal.map((file) => renderWildcard(file))}
      </main>
    </>
  );
};

export default App;
