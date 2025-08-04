import React from 'react';
import BuggyMutatingProps from './BuggyMutatingProps';
import FixedMutatingProps from './FixedMutatingProps';

export default function Debugging() {
  return (
    <div>
      <h2>Debugging: Mutating Props</h2>
      <BuggyMutatingProps />
      <FixedMutatingProps />
    </div>
  );
}
