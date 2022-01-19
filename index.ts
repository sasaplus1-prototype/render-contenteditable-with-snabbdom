import {
  init,
  classModule,
  propsModule,
  styleModule,
  toVNode,
} from "snabbdom";

const patch = init([
  classModule,
  propsModule,
  styleModule,
]);

const editor = document.querySelector<HTMLDivElement>('#js-editor');
const preview = document.querySelector<HTMLDivElement>('#js-editor + div');

if (editor && preview) {
  editor.addEventListener('input', function(event) {
    const preview = document.querySelector<HTMLDivElement>('#js-editor + div');

    if (preview) {
      patch(toVNode(preview), toVNode(editor));
    }
  }, false);
}
