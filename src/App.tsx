import './App.scss';
import './WildcardList.scss';
import {
  WildcardFile,
  wildcardCollection,
  wildcardFiles,
} from './lib/wildcards';
import { For } from 'million/react';
import { WildcardList } from './WildcardList';
import { block } from 'million';

const renderWildcard = (wildcards: WildcardFile) => {
  return (
    <WildcardList
      key={wildcards.filepath}
      filename={wildcards.filename}
      entries={wildcards.wildcardEntries}></WildcardList>
  );
};

const AppBlock = block(function App() {
  const wildcardsLocal = [...wildcardCollection];
  return (
    <>
      <h1>Wildcard Browser</h1>

      <h2>{Object.keys(wildcardFiles).length} files</h2>

      <div>
        <For each={wildcardsLocal}>{renderWildcard}</For>
      </div>
    </>
  );
});

export default AppBlock;
