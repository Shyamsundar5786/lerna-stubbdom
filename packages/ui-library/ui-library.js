// ui-library.js

import snabbdom from 'snabbdom';

const patch = snabbdom.init(/* Modules */);
const container = document.getElementById('app');

function createTemplate(state, props) {
  return snabbdom.h('h1', `Count: ${state}`);
}

let currentState = 0;

function updateState(newState) {
  currentState = newState;
  console.log('State changed:', newState);
  const newVnode = createTemplate(currentState, {});
  patch(container, newVnode);
}

function mountComponent() {
  console.log('Component mounted!');
}

mountComponent();

const button = snabbdom.h('button', { on: { click: () => updateState(currentState + 1) } }, 'Add');
document.body.appendChild(snabbdom.toVNode(button));

// Make updateState globally accessible
window.updateState = updateState;
