import './App.scss';
import './WildcardList.scss';
import { wildcardFiles } from './lib/wildcards';
import { For } from 'million/react';
import { WildcardList } from './WildcardList';
import { block } from 'million';

const AppBlock = block(function App() {
  return (
    <>
      <h1>Wildcard Browser</h1>

      <h2>{Object.keys(wildcardFiles).length} files</h2>

      <div>
        <For each={Object.entries(wildcardFiles)}>
          {([filename, contents]) => {
            return (
              <WildcardList
                key={filename}
                filename={filename}
                contents={contents}></WildcardList>
            );
          }}
        </For>
      </div>
    </>
  );
});

export default AppBlock;
