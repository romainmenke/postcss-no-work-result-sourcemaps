import postcss from 'postcss';
import fs from 'fs';

const css = fs.readFileSync('foo.css', 'utf8');

{ 
	const lazyResult = await postcss([]).process(
		css,
		{
			from: 'foo.css',
			parser: null,
			map: false
		},
	);

	fs.writeFileSync('foo.lazy.css', lazyResult.css);
}

{
	const lazyResult = await postcss([]).process(
		css,
		{
			from: 'foo.css',
			parser: null,
		},
	);

	fs.writeFileSync('foo.lazy.with-map.css', lazyResult.css);
}
