import postcss from 'postcss';
import fs from 'fs';

const css = fs.readFileSync('foo.css', 'utf8');

{
	const noWorkResult = await postcss([]).process(
		css,
		{
			from: 'foo.css',
			map: false
		},
	);

	fs.writeFileSync('foo.no-work.css', noWorkResult.css);
}

{
	const noWorkResult = await postcss([]).process(
		css,
		{
			from: 'foo.css',
		},
	);

	fs.writeFileSync('foo.no-work.with-map.css', noWorkResult.css);
}
