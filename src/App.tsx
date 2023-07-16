import './App.css';
import { WildcardFile, wildcardCollection } from './lib/wildcards';
import { For } from 'million/react';
import { WildcardList } from './WildcardList';
import { block } from 'million';

const renderWildcard = (wildcards: WildcardFile) => {
  return (
    <WildcardList
      style={{}}
      key={wildcards.filepath}
      filename={wildcards.filename}
      entries={wildcards.wildcardEntries}></WildcardList>
  );
};

const AppBlock = block(() => {
  const wildcardsLocal = [...wildcardCollection].filter((_, idx) => idx < 50);
  return (
    <>
      <header className="header">
        <h1>Wildcard Browser</h1>
        <h2>{wildcardsLocal.length} files</h2>
      </header>

      <main className="wildcards-lists-container">
        <For each={wildcardsLocal}>{renderWildcard}</For>
      </main>
    </>
  );
});

export default AppBlock;
