export var single = '<p>foo</p>';
export var multiple = '<p>foo</p><p>bar</p>';
export var nested = '<div><p>foo <em>bar</em></p></div>';
export var attributes =
  '<hr id="foo" class="bar baz" style="background:#fff;text-align:center" data-foo="bar"/>';
export var complex =
  '<html><head><meta charSet="utf-8"/><title>Title</title><link rel="stylesheet" href="style.css"/></head><body><header id="header">Header</header><h1 style="color:#000;font-size:42px">Heading</h1><hr/><p>Paragraph</p><img src="image.jpg"/><div class="class1 class2">Some <em>text</em>.</div><script>alert();</script></body></html>';
export var textarea = '<textarea>foo</textarea>';
export var script = '<script>alert(1 < 2);</script>';
export var style = '<style>body > .foo { color: #f00; }</style>';
export var img = '<img src="http://stat.ic/img.jpg" alt="Image"/>';
export var void_ = '<link/><meta/><img/><br/><hr/><input/>';
export var comment = '<!-- comment -->';
export var doctype = '<!DOCTYPE html>';
export var title = '<title><em>text</em></title>';
export var customElement =
  '<custom-element class="myClass" custom-attribute="value" style="-o-transition: all .5s; line-height: 1;"></custom-element>';
export var form = '<input type="text" value="foo" checked="checked">';
export var list = '<ol><li>One</li><li value="2">Two</li></ol>';
export var template = '<template><article><p>Test</p></article></template>';
