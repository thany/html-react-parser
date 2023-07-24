import { renderToStaticMarkup } from 'react-dom/server';

/**
 * Renders a React element to static HTML markup.
 *
 * @param {ReactElement} reactElement - React element.
 * @returns {string} - HTML markup.
 */
export var render = reactElement => renderToStaticMarkup(reactElement);
